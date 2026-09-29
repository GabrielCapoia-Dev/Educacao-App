import oracledb from 'oracledb';
import { env } from '../../config/env.js';

let pool: oracledb.Pool | undefined;

export async function initializeOraclePool(): Promise<void> {
  if (pool) return;

  pool = await oracledb.createPool({
    user: env.ORACLE_USER,
    password: env.ORACLE_PASSWORD,
    connectString: env.ORACLE_CONNECT_STRING,
    poolMin: env.ORACLE_POOL_MIN,
    poolMax: env.ORACLE_POOL_MAX,
    poolIncrement: env.ORACLE_POOL_INCREMENT,
    poolAlias: 'gestaoEduApi',
  });
}

export async function withOracleConnection<T>(
  operation: (connection: oracledb.Connection) => Promise<T>,
): Promise<T> {
  if (!pool) throw new Error('Pool Oracle ainda não foi inicializado');

  const connection = await pool.getConnection();
  try {
    return await operation(connection);
  } finally {
    await connection.close();
  }
}

export async function closeOraclePool(): Promise<void> {
  if (!pool) return;
  await pool.close(10);
  pool = undefined;
}
