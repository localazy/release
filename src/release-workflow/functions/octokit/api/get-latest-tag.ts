import { ICommandContext } from '../../../model/commands/context/i-command-context';
import { OctokitTag } from '../../../model/octokit/octokit-tag';

export async function getLatestTag({ octokit, owner, repo, branch }: ICommandContext): Promise<OctokitTag | null> {
  try {
    const { data: commits } = await octokit.repos.listCommits({
      owner,
      repo,
      sha: branch,
      per_page: 100,
    });

    const { data: tags } = await octokit.repos.listTags({
      owner,
      repo,
    });

    const tagMap = new Map(tags.map((tag) => [tag.commit.sha, tag]));

    for (const commit of commits) {
      if (tagMap.has(commit.sha)) {
        return tagMap.get(commit.sha) || null;
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching nearest tagged commit:', error);
    return null;
  }
}
