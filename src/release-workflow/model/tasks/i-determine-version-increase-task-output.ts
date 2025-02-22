import { ActionType } from '../commands/context/action-type';
import { VersionIncreaseType } from '../utils/version/version-increase-type';
import { VersionStabilityType } from '../utils/version/version-stability-type';

export interface IDetermineVersionIncreaseTaskOutput {
  versionChangeAction: ActionType;
  versionIncrease: VersionIncreaseType;
  stabilityLevel: VersionStabilityType;
  switchingVersionStability: boolean;
  versionChangeActionLabel: string;
  stabilityChangeLabel: string;
}
