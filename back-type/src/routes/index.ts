import { Router } from 'express';
import { healthRouter } from './health.routes.js';

export const apiRouter = Router();
apiRouter.use('/health', healthRouter);

// Novos módulos entram aqui: apiRouter.use('/pessoas', pessoasRouter), etc.
