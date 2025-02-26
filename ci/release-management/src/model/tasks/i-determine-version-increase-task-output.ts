import { ActionType } from '@/model/commands/context/action-type';
import { VersionIncreaseType } from '@/model/utils/version/version-increase-type';

export interface IDetermineVersionIncreaseTaskOutput {
  versionChangeAction: ActionType;
  versionIncrease: VersionIncreaseType;
  switchingVersionStability: boolean;
  versionChangeActionLabel: string;
  stabilityChangeLabel: string;
}
