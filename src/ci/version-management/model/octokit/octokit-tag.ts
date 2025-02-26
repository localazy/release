import { RestEndpointMethodTypes } from '@octokit/rest';

export type OctokitTag = RestEndpointMethodTypes['repos']['listTags']['response']['data'][0];
