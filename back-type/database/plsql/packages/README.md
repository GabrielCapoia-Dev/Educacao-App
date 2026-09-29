# Packages PL/SQL

Coloque aqui a especificação (`.pks.sql`) e o corpo (`.pkb.sql`) de cada package Oracle.

Convenção proposta: `PKG_GE_<DOMINIO>` com operações públicas estáveis, por exemplo:

- `PKG_GE_PESSOAS`
- `PKG_GE_TURMAS`
- `PKG_GE_AVALIACOES`

O TypeScript deve validar formato/contrato HTTP, autenticar, autorizar a chamada e mapear resultados. As regras de negócio, invariantes e transações ficam nos packages PL/SQL. Não replique essas regras no serviço TypeScript.
