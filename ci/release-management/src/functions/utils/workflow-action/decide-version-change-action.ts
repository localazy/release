import { VersionChange } from '@/const/version-change';
import { ActionType } from '@/model/commands/context/action-type';
import { Stability } from '@/const/stability';
import { IDecideWorkflowActionOptions } from '@/model/utils/workflow-action/i-decide-workflow-action-options';
import { logger } from '@/functions/log/logger';

export function decideVersionChangeAction({
  stabilityLevel,
  switchingVersionStability,
  versionIncrease,
}: IDecideWorkflowActionOptions): ActionType {
  try {
    logger('Deciding workflow action');

    if (stabilityLevel === Stability.PRE_RELEASE) {
      return switchingVersionStability ? VersionChange.INCREASE_PRERELEASE : VersionChange.END_PRERELEASE;
    }

    if (switchingVersionStability) {
      return VersionChange.START_PRERELEASE;
    }

    switch (versionIncrease) {
      case 'major':
        return VersionChange.MAJOR_INCREASE;

      case 'minor':
        return VersionChange.MINOR_INCREASE;

      case 'patch':
      default:
        return VersionChange.PATCH_INCREASE;
    }
  } catch (err: unknown) {
    throw new Error('Failed to decide workflow action', { cause: err });
  }
}
