import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
  API_PREFIX: z.string().default('/api/v1'),
  ORACLE_USER: z.string().min(1),
  ORACLE_PASSWORD: z.string().min(1),
  ORACLE_CONNECT_STRING: z.string().min(1),
  ORACLE_POOL_MIN: z.coerce.number().int().nonnegative().default(1),
  ORACLE_POOL_MAX: z.coerce.number().int().positive().default(5),
  ORACLE_POOL_INCREMENT: z.coerce.number().int().positive().default(1),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.error('Configuração inválida:', z.flattenError(parsed.error).fieldErrors);
  process.exit(1);
}

export const env = parsed.data;
