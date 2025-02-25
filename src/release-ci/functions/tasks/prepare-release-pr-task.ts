import { setOutput } from '@actions/core';
import { endGroup, startGroup } from '../log/logger';
import { determineVersionIncreaseTask } from './determine-version-increase-task';
import { executeCommitChangesTask } from './execute-commit-changes-task';
import { executeVersionIncreaseTask } from './execute-version-increase-task';
import { generateChangelogTask } from './generate-changelog-task';
import { MainContextType } from '../../model/tasks/main-context-type';
import { isTaskPresent } from './is-task-present';

export async function prepareReleasePrTask(ctx: MainContextType) {
  try {
    startGroup('🚀 Prepare Release PR');

    await determineVersionIncreaseTask(ctx);
    await executeVersionIncreaseTask(ctx);
    await generateChangelogTask(ctx);
    await executeCommitChangesTask(ctx);

    if (isTaskPresent(ctx, 'execute-version-increase')) {
      setOutput('package-version', ctx['execute-version-increase'].output.packageJson.version);
    }

    if (isTaskPresent(ctx, 'generate-changelog')) {
      setOutput('changelog-pr', ctx['generate-changelog'].output.prChangelog);
    }
  } catch (err: unknown) {
    throw new Error('Failed to prepare release PR', { cause: err });
  } finally {
    endGroup();
  }
}
