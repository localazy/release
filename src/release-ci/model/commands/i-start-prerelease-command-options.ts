import { IDetermineVersionIncreaseTaskOutput } from '../tasks/i-determine-version-increase-task-output';

export interface IStartPrereleaseCommandOptions {
  versionIncrease: IDetermineVersionIncreaseTaskOutput['versionIncrease'];
}
