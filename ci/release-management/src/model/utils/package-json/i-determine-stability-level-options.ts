import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';

export interface IDetermineStabilityLevelOptions {
  packageJson: IScanGitRepositoryTaskOutput['packageJson'];
}
