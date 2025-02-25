import { IDetermineVersionIncreaseTaskOutput } from '../../tasks/i-determine-version-increase-task-output';

export interface IDecideWorkflowActionOptions {
  stabilityLevel: IDetermineVersionIncreaseTaskOutput['stabilityLevel'];
  switchingVersionStability: IDetermineVersionIncreaseTaskOutput['switchingVersionStability'];
  versionIncrease: IDetermineVersionIncreaseTaskOutput['versionIncrease'];
}
