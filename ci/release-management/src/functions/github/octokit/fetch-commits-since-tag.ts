import { IFetchCommitsSinceTagOptions } from '@/model/github/octokit/i-fetch-commits-since-tag-options';
import { GithubCommitType } from '@/model/github/github-commit-type';
import { logger } from '@/functions/log/logger';

export async function fetchCommitsSinceTag({
  octokit,
  owner,
  repo,
  branch,
  latestTag,
}: IFetchCommitsSinceTagOptions): Promise<GithubCommitType[]> {
  try {
    if (latestTag === null) {
      throw new Error('Latest tag is null');
    }

    logger(`Fetching commits since the latest tag: ${latestTag.name}`);

    const { data } = await octokit.repos.compareCommits({
      owner,
      repo,
      base: latestTag.name,
      head: branch,
    });

    return data.commits;
  } catch (err: unknown) {
    throw new Error('Error fetching commits since tag', { cause: err });
  }
}
