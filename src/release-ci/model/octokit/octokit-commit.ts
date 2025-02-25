import { RestEndpointMethodTypes } from '@octokit/rest';

export type OctokitCommit = RestEndpointMethodTypes['repos']['listCommits']['response']['data'][0];
