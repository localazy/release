import { Octokit } from '@octokit/rest';

export interface IFetchAllCommitsOptions {
  octokit: Octokit;
  owner: string;
  repo: string;
  branch: string;
}
