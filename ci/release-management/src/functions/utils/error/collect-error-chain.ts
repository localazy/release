export function collectErrorChain(error: unknown): Error[] {
  const causes: Error[] = [];

  while (error instanceof Error) {
    causes.push(error);
    error = error.cause;
  }

  return causes;
}
