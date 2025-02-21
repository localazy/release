import { ICommandContext } from './i-command-context';

export type IGetWorkflowContextOptions = Pick<
  ICommandContext,
  'octokit' | 'isSimulatedWorkflowRun' | 'runId' | 'token' | 'owner' | 'repo' | 'branch'
>;
