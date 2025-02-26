import { addAndCommitChangesCommand } from '@/functions/commands/add-and-commit-changes-command';
import { logger } from '@/functions/log/logger';
import { isTaskPresent } from '@/functions/utils/type-guard/is-task-present';
import { MainContextType } from '@/model/tasks/main-context-type';

export async function executeCommitChangesTask(ctx: MainContextType) {
  try {
    logger('Starting the "Execute Commit Changes" task');

    if (!isTaskPresent(ctx, 'execute-version-increase')) {
      throw new Error('Missing execute-version-increase task output');
    }

    const packageJson = ctx['execute-version-increase'].output.packageJson;

    await addAndCommitChangesCommand(packageJson.version);
  } catch (err: unknown) {
    throw new Error('Failed to prepare release PR', { cause: err });
  }
}
