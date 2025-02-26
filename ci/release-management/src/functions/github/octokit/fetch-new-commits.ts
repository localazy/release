import { logger } from '@/functions/log/logger';
import { fetchAllCommits } from '@/functions/github/octokit/fetch-all-commits';
import { fetchCommitsSinceTag } from '@/functions/github/octokit/fetch-commits-since-tag';
import { IFetchCommitsOptions } from '@/model/github/octokit/i-fetch-commits-options';

export async function fetchNewCommits({ octokit, owner, repo, branch, latestTag }: IFetchCommitsOptions) {
  try {
    logger('Fetching new commits');
    if (typeof latestTag === 'undefined') {
      logger(`No tags found in the current branch (${branch}). Assuming this is the first release.`);
      return await fetchAllCommits({
        octokit,
        owner,
        repo,
        branch,
      });
    } else {
      return await fetchCommitsSinceTag({
        octokit,
        owner,
        repo,
        branch,
        latestTag,
      });
    }
  } catch (err: unknown) {
    throw new Error('Error fetching new commits', { cause: err });
  }
}
