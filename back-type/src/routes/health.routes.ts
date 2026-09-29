import { Router } from 'express';
import { withOracleConnection } from '../database/oracle/pool.js';

export const healthRouter = Router();

healthRouter.get('/live', (_request, response) => {
  response.json({ status: 'ok' });
});

healthRouter.get('/ready', async (_request, response) => {
  await withOracleConnection((connection) => connection.execute('SELECT 1 FROM DUAL'));
  response.json({ status: 'ready', database: 'oracle' });
});
