import { RestEndpointMethodTypes } from '@octokit/rest';

export type GithubTagType = RestEndpointMethodTypes['repos']['listTags']['response']['data'][0];
