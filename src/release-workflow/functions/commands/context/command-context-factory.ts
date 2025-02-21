import { Action } from '../../../const/action';
import { ICommandContext } from '../../../model/commands/context/i-command-context';
import { IGetWorkflowContextOptions } from '../../../model/commands/context/i-get-workflow-context-options';
import { createOctokitInstance } from '../../octokit/api/create-octokit-instance';
import { getWorkflowContext } from '../../octokit/api/get-workflow-context';

export async function commandContextFactory({
  octokit,
  isSimulatedWorkflowRun,
  runId,
  token,
  owner,
  repo,
  branch,
}: Partial<ICommandContext> = {}): Promise<ICommandContext> {
  const resolvedValues: IGetWorkflowContextOptions = {
    octokit: octokit || createOctokitInstance({ token: '' }),
    isSimulatedWorkflowRun: isSimulatedWorkflowRun || false,
    runId: runId || '',
    token: token || '',
    owner: owner || '',
    repo: repo || '',
    branch: branch || '',
  };

  const workflowContext = await getWorkflowContext(resolvedValues);

  if (!workflowContext) {
    throw new Error('Failed to get workflow context.');
  }

  return {
    ...resolvedValues,
    workflowContext,
    newCommits: [],
    containsPrereleaseCommit: false,
    categorizedCommits: {} as ICommandContext['categorizedCommits'],
    latestTag: {} as ICommandContext['latestTag'],
    pkg: { name: '', version: '' },
    isPrereleaseStability: false,
    versionStability: 'stable',
    bumpType: 'patch',
    workflowAction: Action.PATCH_INCREASE,
    workflowActionText: '',
    getVersionStabilityText: '',
  };
}
