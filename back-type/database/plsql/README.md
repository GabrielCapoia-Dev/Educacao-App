# Banco e regras de negócio

Organize scripts versionados por tipo (`packages`, `procedures`, `functions`). Ao começar um domínio, documente aqui o contrato público do package, parâmetros, códigos de retorno e versão mínima do Oracle.

A API chama operações de negócio com binds (`:parametro`) pelo driver `oracledb`; nunca concatene dados recebidos do cliente em blocos SQL/PLSQL. Defina convenções para erros de negócio (por exemplo, códigos próprios do package), traduza-os para HTTP no adaptador e mantenha commits/transações sob controle explícito do package.

A primeira fatia de domínio deve ser escolhida antes de definir tabelas ou procedures: pessoas/usuários é uma candidata natural, mas o modelo final precisa refletir os requisitos atuais e a estratégia de integração com o legado.
