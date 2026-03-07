import { Hono } from 'hono'
import { rateLimiter } from './grpc-client'

const app = new Hono();

app.get('/health',async (c) =>{
  try{
    const health = await rateLimiter.healthCheck();
    return c.json({status: 'ok', rateLimiter: health});
  }catch(e){
    return c.json({status: 'degraded' , error: String(e)},503)
  }
})

app.get('/search', async (c)=>{
  const userId = c.req.query('user_id');
  const query = c.req.query('q');

  if (!userId) {
    return c.json({ error: 'user_id is required' }, 400);
  }
  if (!query) {
    return c.json({ error: 'q (query) is required' }, 400);
  }

  const logicalKey = `search:user:${userId}`;

  try{
    const result = await rateLimiter.acquire(logicalKey,1);
    if (result.verdict === 'DENIED') {
      const retryAfter = parseInt(result.retryAfter?.seconds || '0', 10);
      c.header('Retry-After', String(retryAfter));
      return c.json({
        error: 'Rate limit exceeded',
        retryAfter,
        remaining: result.remaining,
      }, 429);
    }

    //simulating the search, in production we will call the backend here
    return c.json({
      query,
      results: [`Result 1 for "${query}"`, `Result 2 for "${query}"`],
      remaining: result.remaining,
    });
  } catch (err) {
    return c.json({ error: 'Rate limiter unavailable' }, 503);
  }
});

export default app;