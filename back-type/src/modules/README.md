# Módulos de domínio

Cada domínio seguirá uma organização parecida com a API de aula, mas separada em camadas:

```text
<dominio>/
├── dtos/          # validação e contratos HTTP
├── controllers/   # tradução HTTP ↔ aplicação
├── services/      # orquestração da chamada ao banco; sem regras duplicadas
├── repositories/  # chamadas a procedures/packages e conversão dos resultados
└── routes/        # rotas do domínio
```

Pastas iniciais inspiradas nos contextos presentes no Gestão Edu: `auth`, `pessoas`, `escolas`, `turmas`, `alunos`, `avaliacoes`, `pautas`, `notificacoes`, `estoque` e `relatorios`. Implemente cada uma quando for iniciar aquele fluxo, em vez de criar arquivos vazios para todos os recursos.
