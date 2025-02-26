import { logger } from '../../log/logger';
import { IContainsReleaseCommitOptions } from '../../../model/git/commit/i-contains-release-commit-options';

export function containsReleaseCommit({ newCommits }: IContainsReleaseCommitOptions) {
  logger('Checking if new commits contain a release commit');
  return newCommits.some((commit) => commit.semver.type === 'release');
}
