import { GithubCommitType } from '@/model/github/github-commit-type';
import { logger } from '@/functions/log/logger';

import { IFetchAllCommitsOptions } from '@/model/github/octokit/i-fetch-all-commits-options';

export async function fetchAllCommits({}: IFetchAllCommitsOptions): Promise<GithubCommitType[]> {
  try {
    logger('Fetching all commits');
    return [];
  } catch (err: unknown) {
    throw new Error('Error fetching all commits', { cause: err });
  }
}
