import { debug, error, info, startGroup as actionsStartGroup, endGroup as actionsEndGroup } from '@actions/core';

export const config = {
  debug: process.env.DEBUG === 'true',
};

export function logger(message: string, type: 'debug' | 'info' | 'error' = 'info'): void {
  if (process.env.VITEST === 'true') {
    return;
  }

  switch (type) {
    case 'debug':
      debug(message);
      break;
    case 'error':
      error(message);
      break;
    case 'info':
    default:
      info(message);
  }
}

export function startGroup(name: string): void {
  if (process.env.VITEST === 'true') {
    return;
  }
  actionsStartGroup(name);
}

export function endGroup(): void {
  if (process.env.VITEST === 'true') {
    return;
  }
  actionsEndGroup();
}
