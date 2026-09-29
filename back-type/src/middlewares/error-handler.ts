import type { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  if (error instanceof ZodError) {
    response.status(400).json({
      error: 'Dados inválidos',
      details: zodIssues(error),
    });
    return;
  }

  // TODO: converter códigos definidos nos packages PL/SQL em respostas HTTP.
  console.error(error);
  response.status(500).json({ error: 'Erro interno do servidor' });
};

function zodIssues(error: ZodError) {
  return error.issues.map((issue) => ({
    field: issue.path.join('.'),
    message: issue.message,
  }));
}
