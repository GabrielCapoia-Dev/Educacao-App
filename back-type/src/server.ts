import { createApp } from './app.js';
import { env } from './config/env.js';
import { closeOraclePool, initializeOraclePool } from './database/oracle/pool.js';

async function start() {
  await initializeOraclePool();
  const server = createApp().listen(env.PORT, () => {
    console.log(`Gestão Edu API em http://localhost:${env.PORT}${env.API_PREFIX}`);
  });

  const shutdown = async () => {
    server.close(async () => {
      await closeOraclePool();
      process.exit(0);
    });
  };

  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
}

start().catch((error: unknown) => {
  console.error('Não foi possível iniciar a API:', error);
  process.exit(1);
});
