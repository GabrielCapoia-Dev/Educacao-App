# Gestão Edu Web — Angular

Frontend inicial, independente do backend, com um painel demonstrativo e verificação da rota de saúde da API TypeScript.

## Requisitos e execução

Use uma versão Node.js suportada pelo Angular (Node.js 24 LTS funciona com a linha atual). Instale os pacotes e inicie:

```bash
npm install
npm start
```

Acesse `http://localhost:4200`. O servidor de desenvolvimento encaminha chamadas `/api` para `http://localhost:3000`. Inicie também o backend Oracle em `gestao-edu-api` para o status aparecer online. Para validar a compilação, rode `npm run build`.

## O que tem nesta amostra

- Layout responsivo com navegação lateral e visão geral.
- Cards para Pessoas, Escolas/CMEIs, Turmas/Alunos e Avaliações.
- Páginas de placeholder para os módulos ainda não implementados.
- `HealthApi` consome `GET /api/v1/health/live`.
- Componentes standalone e rotas configuradas sem NgModules.

## Organização

```text
src/app/
├── core/api/                  # acesso ao backend
├── features/
│   ├── dashboard/             # visão geral
│   └── module-placeholder/    # página temporária para domínios futuros
├── layout/app-shell/          # navegação e estrutura visual
├── app.config.ts
└── app.routes.ts
src/environments/               # endereço base da API
```

O endpoint vem do backend em `gestao-edu-api`; o `proxy.conf.json` é apenas para desenvolvimento local. Antes de publicar, ajuste o endereço da API e a configuração de infraestrutura para o ambiente de produção.
