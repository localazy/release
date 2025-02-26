import { IEnvVariables } from '../../../model/i-env-variables';

export function processEnvVariables(): IEnvVariables {
  const isSimulatedWorkflowRun = process.env.ACT !== undefined || false;
  const token = process.env.GITHUB_TOKEN ?? '';

  return {
    isSimulatedWorkflowRun,
    token,
  };
}
