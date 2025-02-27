export function collectErrorChain(error: unknown): string[] {
  const causes: string[] = [];
  let current = error;

  for (; current instanceof Error; current = current.cause) {
    causes.unshift(current.message);
  }

  return causes;
}
