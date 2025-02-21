import { IGetCommitsSinceTagOptions } from '../../../model/octokit/api/i-get-commits-since-tag-options';
import { ParsedCommitType } from '../../../model/utils/commit/parsed-commit-type';
import { parseCommitMessage } from '../../utils/commit/commit-message/parse-commit-message';
import { parseCommitType } from '../../utils/commit/commit-message/parse-commit-type';

export async function fetchCommitsSinceTag({
  ctx: { octokit, owner, repo, branch, latestTag },
}: IGetCommitsSinceTagOptions): Promise<ParsedCommitType[]> {
  try {
    const { data } = await octokit.repos.compareCommits({
      owner,
      repo,
      base: latestTag.name,
      head: branch,
    });

    return data.commits.map((commit) => {
      const parsedMessage = parseCommitMessage(commit);
      const semver = parseCommitType(parsedMessage);
      return {
        ...commit,
        parsedMessage,
        semver,
      };
    });
  } catch (error) {
    console.error('Error fetching commits:', error);
    return [];
  }
}
