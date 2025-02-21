import { Action } from '../../../const/action';
import { addAndCommitChangesCommand } from '../../commands/add-and-commit-changes-command';
import { increasePrereleaseCommand } from '../../commands/increase-prerelease-command';
import { majorIncreaseCommand } from '../../commands/major-increase-command';
import { minorIncreaseCommand } from '../../commands/minor-increase-command';
import { patchIncreaseCommand } from '../../commands/patch-increase-command';
import { publishPrereleaseCommand } from '../../commands/publish-prerelease-command';
import { startPrereleaseCommand } from '../../commands/start-prerelease-command';
import { readPackageJson } from '../package-json/read-package-json';
import { IExecuteWorkflowActionOptions } from '../../../model/utils/workflow-action/i-execute-workflow-action-options';

export async function executeWorkflowAction({ ctx }: IExecuteWorkflowActionOptions) {
  switch (ctx.workflowAction) {
    case Action.PUBLISH_PRERELEASE:
      await publishPrereleaseCommand();
      break;
    case Action.INCREASE_PRERELEASE:
      await increasePrereleaseCommand();
      break;
    case Action.START_PRERELEASE:
      await startPrereleaseCommand({ ctx });
      break;
    case Action.MAJOR_INCREASE:
      await majorIncreaseCommand();
      break;
    case Action.MINOR_INCREASE:
      await minorIncreaseCommand();
      break;
    case Action.PATCH_INCREASE:
    default:
      await patchIncreaseCommand();
      break;
  }

  const updatedPkg = await readPackageJson();

  if (updatedPkg.version !== ctx.pkg.version) {
    await addAndCommitChangesCommand(updatedPkg.version);
  } else {
    // TODO show warning
  }
}
