import { EnvVariables } from '../../../model/env-variables';

export function processEnvVariables(): EnvVariables {
  const isSimulatedWorkflowRun = process.env.ACT !== undefined || false;
  const token = process.env.GITHUB_TOKEN ?? '';
  let runId = process.env.GITHUB_RUN_ID ?? '';
  let [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
  let branch = process.env.GITHUB_REF ?? '';

  if (isSimulatedWorkflowRun) {
    runId = '9271808588';
    owner = 'localazy';
    repo = 'ci-sandbox';
    branch = 'test_pr1';
  }

  return {
    isSimulatedWorkflowRun,
    token,
    runId,
    owner,
    repo,
    branch,
  };
}
