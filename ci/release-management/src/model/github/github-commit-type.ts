import { RestEndpointMethodTypes } from '@octokit/rest';

export type GithubCommitType = RestEndpointMethodTypes['repos']['listCommits']['response']['data'][0];
