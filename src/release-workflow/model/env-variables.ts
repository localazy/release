import { ICommandContext } from './commands/context/i-command-context';

export type EnvVariables = Pick<
  ICommandContext,
  'isSimulatedWorkflowRun' | 'runId' | 'token' | 'owner' | 'repo' | 'branch'
>;
