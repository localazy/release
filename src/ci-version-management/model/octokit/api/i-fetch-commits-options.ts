import { Octokit } from '@octokit/rest';
import { IGitTag } from '../../git/i-git-tag';

export interface IFetchCommitsOptions {
  octokit: Octokit;
  owner: string;
  repo: string;
  branch: string;
  latestTag: IGitTag | null;
}
