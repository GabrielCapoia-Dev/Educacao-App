import oracledb from 'oracledb';
import { withOracleConnection } from './pool.js';

/**
 * Executa uma chamada a package/procedure Oracle dentro de uma conexão do pool.
 * Regras de negócio e transações devem ficar no package PL/SQL chamado.
 */
export async function callPlsql<TBinds extends oracledb.BindParameters>(
  block: string,
  binds: TBinds,
): Promise<oracledb.Result<TBinds>> {
  return withOracleConnection((connection) =>
    connection.execute<TBinds>(block, binds, { autoCommit: false }),
  );
}
