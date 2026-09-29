# Gestão Edu API — estrutura inicial

Esqueleto inicial para começar, por etapas, a separação do backend do Gestão Edu. Usa Node.js 24, TypeScript, Express 5 e o driver oficial `node-oracledb`. O backend TypeScript atende HTTP e acessa o Oracle; packages PL/SQL serão a fonte das regras de negócio.

## Rodar

1. Instale Node.js 24 e Oracle Database (ou obtenha acesso a uma instância de desenvolvimento).
2. Copie `.env.example` para `.env` e configure as credenciais/serviço Oracle.
3. Execute `npm install` e `npm run dev`.
4. Teste `GET /api/v1/health/live` e `GET /api/v1/health/ready`.

`/live` confirma que o processo está ativo. `/ready` verifica uma conexão ao banco. A API não inicia se o pool Oracle não puder ser criado.

## Organização

```text
src/
├── app.ts
├── server.ts
├── config/                 # ambiente e configuração
├── database/oracle/        # pool e adaptador para chamadas PL/SQL
├── middlewares/            # erros HTTP e validação
├── modules/                # domínios do Gestão Edu (adicionados por etapas)
└── routes/                 # composição e versão da API

database/plsql/
├── packages/               # especificações e corpos dos packages
├── procedures/
└── functions/
```

## Responsabilidades

- **TypeScript/API:** HTTP, autenticação/autorização, validação do contrato, observabilidade e adaptação dos parâmetros/resultados.
- **Oracle/PLSQL:** regras de negócio, invariantes de dados e operações transacionais.
- **React ou Angular:** cliente HTTP independente; a escolha do frontend pode acontecer depois.

A separação permite trocar o runtime da API mantendo Oracle como banco e contrato PL/SQL. Trocar também o banco é outra decisão: packages PL/SQL e SQL Oracle criam dependência deliberada de Oracle.

## Próximo incremento

Escolher um fluxo pequeno e representativo (por exemplo, consulta de pessoas) e fechar primeiro o contrato PL/SQL, o mapeamento para HTTP e a autorização. Evite começar por todo o CRUD de todos os módulos. O conteúdo atual é a base de infraestrutura, não uma migração dos endpoints Laravel.
