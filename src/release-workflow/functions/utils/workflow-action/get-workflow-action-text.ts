import { Action } from '../../../const/action';
import { IGetWorkflowActionTextOptions } from '../../../model/utils/workflow-action/i-get-workflow-action-text-options';

export function getWorkflowActionText({ ctx: { workflowAction } }: IGetWorkflowActionTextOptions): string {
  switch (workflowAction) {
    case Action.PUBLISH_PRERELEASE:
      return 'Publishing Pre-release';
    case Action.INCREASE_PRERELEASE:
      return 'Increasing Pre-release';
    case Action.START_PRERELEASE:
      return 'Starting Pre-release';
    case Action.MAJOR_INCREASE:
      return 'Major Version Increase';
    case Action.MINOR_INCREASE:
      return 'Minor Version Increase';
    case Action.PATCH_INCREASE:
    default:
      return 'Patch Version Increase';
  }
}
