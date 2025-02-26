import { context } from '@actions/github';
import { logger } from '@/functions/log/logger';

export function getBranchName(): string {
  try {
    logger('Getting branch name');

    const ref = context.ref;

    if (ref.startsWith('refs/heads/')) {
      return ref.replace('refs/heads/', '');
    }

    return ref;
  } catch (err: unknown) {
    throw new Error('Failed to get branch name', { cause: err });
  }
}
