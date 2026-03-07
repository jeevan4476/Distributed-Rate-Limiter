use axum::{
    extract::State,
    http::StatusCode,
    response::{IntoResponse, Json},
    routing::{get, post},
    Router,
};
use serde::{Deserialize, Serialize};
use serde_json::{json};
use tokio::net::TcpListener;
use std::{env, sync::Arc};
use tonic::transport::Channel;
use uuid::Uuid;

pub mod ratelimit{
    use tonic::include_proto;
    include_proto!("ratelimit.v1");
}

use ratelimit::rate_limiter_client::RateLimiterClient;
use ratelimit::{AcquireRequest,acquire_response::Verdict};

#[derive(Clone)]
struct AppState{
    rate_limiter: RateLimiterClient<Channel>
}

#[derive(Deserialize)]
struct PaymentRequest {
    user_id: String,
    amount: f64,
    currency: String,
}
#[derive(Serialize)]
struct PaymentResponse {
    transaction_id: String,
    status: String,
    remaining_requests: f64,
}

#[derive(Serialize)]
struct ErrorResponse{
    error:String,
    #[serde(skip_serializing_if = "Option::is_none")]
    retry_after: Option<i64>,
}

async fn health(State(state): State<Arc<AppState>>) -> impl IntoResponse{
    match state.rate_limiter.clone().health_check(ratelimit::HealthCheckRequest {}).await {
        Ok(res)=>{
            let health = res.into_inner();
            Json(json!({
                "status": "ok",
                "rate_limiter": {
                    "status": health.status,
                    "backend": health.backend
                }
            }))
            .into_response()
        }
        Err(_)=>(
            StatusCode::SERVICE_UNAVAILABLE,
            Json(serde_json::json!({ "status": "degraded" }))
        ).into_response()
    }
}

async fn process_payment(
    State(state): State<Arc<AppState>>,
    Json(payload): Json<PaymentRequest>
)-> impl IntoResponse{
    let logical_key = format!("payment:user:{}",payload.user_id);
    let acquire_req = AcquireRequest {
        request_id: Uuid::new_v4().to_string(),
        logical_key,
        cost: 1,
    };
     match state.rate_limiter.clone().acquire(acquire_req).await {
        Ok(resp) => {
            let result = resp.into_inner();
            match Verdict::try_from(result.verdict) {
                Ok(Verdict::Allowed) => {
                    // just simulating the payment processing
                    let response = PaymentResponse {
                        transaction_id: Uuid::new_v4().to_string(),
                        status: "processed".to_string(),
                        remaining_requests: result.remaining,
                    };
                    (StatusCode::OK, Json(response)).into_response()
                }
                Ok(Verdict::Denied) | _ => {
                    let retry_after = result
                        .retry_after
                        .map(|d| d.seconds)
                        .unwrap_or(0);
                    let error = ErrorResponse {
                        error: "Rate limit exceeded".to_string(),
                        retry_after: Some(retry_after),
                    };
                    (StatusCode::TOO_MANY_REQUESTS, Json(error)).into_response()
                }
            }
        } Err(e) => {
            let error = ErrorResponse {
                error: format!("Rate limiter unavailable: {}", e),
                retry_after: None,
            };
            (StatusCode::SERVICE_UNAVAILABLE, Json(error)).into_response()
        }
    }
}

#[tokio::main]
async fn main(){
    tracing_subscriber::fmt::init();

    let rate_limiter_addr = env::var("RATE_LIMITER_ADDR").unwrap_or_else(|_| "http://localhost:50051".to_string());

    let channel = Channel::from_shared(rate_limiter_addr)
        .expect("invalid rate limiter addr")
        .connect().await
        .expect("Failed to connect to rate limiter");

    let state = Arc::new(AppState{
        rate_limiter:RateLimiterClient::new(channel)
    });
    let app = Router::new()
        .route("/health", get(health))
        .route("/process-payment", post(process_payment))
        .with_state(state);
    let addr = env::var("BIND_ADDR").unwrap_or_else(|_| "0.0.0.0:8000".to_string());

    let listener = TcpListener::bind(&addr).await.unwrap();
    tracing::info!("Payment processor listening on {}", addr);
    axum::serve(listener, app).await.unwrap();
}
