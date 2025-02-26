import { IDetermineVersionIncreaseTaskOutput } from '@/model/tasks/i-determine-version-increase-task-output';
import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';

export interface IDecideWorkflowActionOptions {
  stabilityLevel: IScanGitRepositoryTaskOutput['stabilityLevel'];
  switchingVersionStability: IDetermineVersionIncreaseTaskOutput['switchingVersionStability'];
  versionIncrease: IDetermineVersionIncreaseTaskOutput['versionIncrease'];
}
