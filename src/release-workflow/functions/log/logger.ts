import { debug, error, info } from '@actions/core';

export function logger(message: string, type: 'debug' | 'info' | 'error' = 'info'): void {
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
