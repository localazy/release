import { OctokitCommit } from '../../../model/octokit/octokit-commit';
import { logger } from '../../log/logger';

import { IFetchAllCommitsOptions } from '../../../model/octokit/api/i-fetch-all-commits-options';

export async function fetchAllCommits({}: IFetchAllCommitsOptions): Promise<OctokitCommit[]> {
  try {
    logger('Fetching all commits');
    return [];
  } catch (err: unknown) {
    throw new Error('Error fetching all commits', { cause: err });
  }
}
