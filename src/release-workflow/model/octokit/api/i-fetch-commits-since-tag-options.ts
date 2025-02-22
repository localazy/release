import { Octokit } from '@octokit/rest';
import { IGitTag } from '../../git/i-git-tag';

export interface IFetchCommitsSinceTagOptions {
  octokit: Octokit;
  owner: string;
  repo: string;
  branch: string;
  latestTag: Exclude<IGitTag | null, undefined>;
}
