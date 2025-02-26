import { VersionChange } from '@/const/version-change';
import { IWorkflowActionLabelTextOptions } from '@/model/utils/workflow-action/i-workflow-action-label-text-options';
import { logger } from '@/functions/log/logger';

export function getVersionChangeActionLabel({ versionChangeAction }: IWorkflowActionLabelTextOptions): string {
  try {
    logger('Getting workflow action label');

    switch (versionChangeAction) {
      case VersionChange.END_PRERELEASE:
        return 'Publishing Pre-release';
      case VersionChange.INCREASE_PRERELEASE:
        return 'Increasing Pre-release';
      case VersionChange.START_PRERELEASE:
        return 'Starting Pre-release';
      case VersionChange.MAJOR_INCREASE:
        return 'Major Version Increase';
      case VersionChange.MINOR_INCREASE:
        return 'Minor Version Increase';
      case VersionChange.PATCH_INCREASE:
      default:
        return 'Patch Version Increase';
    }
  } catch (err: unknown) {
    throw new Error('Failed to get workflow action label', { cause: err });
  }
}
