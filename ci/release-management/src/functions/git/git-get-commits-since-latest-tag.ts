import { GitCommitType } from '@/model/git/git-commit-type';
import { IGitGetCommitsSinceLatestTagOptions } from '@/model/git/i-git-get-commits-since-latest-tag-options';
import { logger } from '@/functions/log/logger';

export function gitGetCommitsSinceLatestTag({
  commits,
  latestTag,
}: IGitGetCommitsSinceLatestTagOptions): GitCommitType[] {
  try {
    logger('Getting commits since latest tag');

    if (!latestTag) {
      logger('No latest tag found, returning all commits');
      return commits;
    }

    // Find the index of the commit that corresponds to latestTag.commit
    const latestTagIndex = commits.findIndex((commit) => commit.hash === latestTag.commit);

    // If the commit with the latest tag exists, return all commits up to that index
    return latestTagIndex > 0 ? commits.slice(0, latestTagIndex) : [];
  } catch (err: unknown) {
    throw new Error('Error getting commits since latest tag', { cause: err });
  }
}
