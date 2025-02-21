import { RestEndpointMethodTypes } from '@octokit/rest';

export type OctokitWorkflowContext = RestEndpointMethodTypes['actions']['getWorkflowRun']['response']['data'];
