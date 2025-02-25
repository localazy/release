import { VersionChange } from '../../const/version-change';
import { increasePrereleaseCommand } from '../commands/increase-prerelease-command';
import { majorIncreaseCommand } from '../commands/major-increase-command';
import { minorIncreaseCommand } from '../commands/minor-increase-command';
import { patchIncreaseCommand } from '../commands/patch-increase-command';
import { publishPrereleaseCommand } from '../commands/publish-prerelease-command';
import { startPrereleaseCommand } from '../commands/start-prerelease-command';
import { logger } from '../log/logger';
import { readPackageJson } from '../utils/package-json/read-package-json';
import { IExecuteVersionIncreaseTaskOutput } from '../../model/tasks/i-execute-version-increase-task-output';
import { isTaskPresent } from './is-task-present';
import { MainContextType } from '../../model/tasks/main-context-type';

export async function executeVersionIncreaseTask(ctx: MainContextType): Promise<IExecuteVersionIncreaseTaskOutput> {
  try {
    logger('Executing version increase');

    if (!isTaskPresent(ctx, 'determine-version-increase')) {
      throw new Error('Missing determine-version-increase task output');
    }

    const { versionChangeAction, versionIncrease } = ctx['determine-version-increase'].output;

    switch (versionChangeAction) {
      case VersionChange.END_PRERELEASE:
        await publishPrereleaseCommand();
        break;
      case VersionChange.INCREASE_PRERELEASE:
        await increasePrereleaseCommand();
        break;
      case VersionChange.START_PRERELEASE:
        await startPrereleaseCommand({ versionIncrease });
        break;
      case VersionChange.MAJOR_INCREASE:
        await majorIncreaseCommand();
        break;
      case VersionChange.MINOR_INCREASE:
        await minorIncreaseCommand();
        break;
      case VersionChange.PATCH_INCREASE:
      default:
        await patchIncreaseCommand();
        break;
    }

    const packageJson = await readPackageJson();
    const output: IExecuteVersionIncreaseTaskOutput = { packageJson };

    ctx['execute-version-increase'] = { output };

    return output;
  } catch (err: unknown) {
    throw new Error('Failed to prepare release PR', { cause: err });
  }
}
