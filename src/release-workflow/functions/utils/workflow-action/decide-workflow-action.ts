import { Action, ActionType } from '../../../const/action';
import { IDecideWorkflowActionOptions } from '../../../model/utils/workflow-action/i-decide-workflow-action-options';

export function decideWorkflowAction({
  ctx: { isPrereleaseStability, containsPrereleaseCommit, bumpType },
}: IDecideWorkflowActionOptions): ActionType {
  if (isPrereleaseStability) {
    return containsPrereleaseCommit ? Action.INCREASE_PRERELEASE : Action.PUBLISH_PRERELEASE;
  }

  if (containsPrereleaseCommit) {
    return Action.START_PRERELEASE;
  }

  switch (bumpType) {
    case 'major':
      return Action.MAJOR_INCREASE;

    case 'minor':
      return Action.MINOR_INCREASE;

    case 'patch':
    default:
      return Action.PATCH_INCREASE;
  }
}
