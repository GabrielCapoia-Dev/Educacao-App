# Gestão Edu

Projeto dividido em API TypeScript/Express, frontend Angular e banco Oracle
Free com regras PL/SQL.

## Execução completa com Docker

1. Copie `.env.example` para `.env` e ajuste as credenciais se necessário.
2. Na raiz do projeto, execute:

```bash
docker compose up --build
```

3. Acesse `http://localhost:4200`.

O Nginx serve o Angular e encaminha `/api/*` para a API. O Oracle fica
disponível na porta `1521`. O script `database/plsql/00-init.sql` carrega os
packages na primeira inicialização do volume do banco.

Para parar os containers sem apagar o banco:

```bash
docker compose down
```

Para recriar o banco e executar os scripts PL/SQL novamente:

```bash
docker compose down -v
```
