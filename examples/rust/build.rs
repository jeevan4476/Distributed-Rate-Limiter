fn main() -> Result<(), Box<dyn std::error::Error>> {
    let proto_dir = if std::path::Path::new("proto/ratelimit.proto").exists() {
        "proto"
    } else {
        "../../proto"
    };

    let proto_file = format!("{}/ratelimit.proto", proto_dir);

    tonic_prost_build::configure()
        .build_server(false)
        .build_client(true)
        .compile_protos(&[proto_file.as_str()], &[proto_dir])?;
    Ok(())
}
