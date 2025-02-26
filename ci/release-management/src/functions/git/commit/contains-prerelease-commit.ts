import { IContainsPrereleaseCommitOptions } from '@/model/git/commit/i-contains-prerelease-commit-options';
import { logger } from '@/functions/log/logger';

export function containsPrereleaseCommit({ newCommits }: IContainsPrereleaseCommitOptions) {
  try {
    logger('Checking if new commits contain a prerelease commit');

    return newCommits.some((commit) => commit.semver.type === 'prerelease');
  } catch (err: unknown) {
    throw new Error('Failed to check if new commits contain a prerelease commit', { cause: err });
  }
}
