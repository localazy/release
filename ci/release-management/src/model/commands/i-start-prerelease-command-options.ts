import { IDetermineVersionIncreaseTaskOutput } from '@/model/tasks/i-determine-version-increase-task-output';

export interface IStartPrereleaseCommandOptions {
  versionIncrease: IDetermineVersionIncreaseTaskOutput['versionIncrease'];
}
