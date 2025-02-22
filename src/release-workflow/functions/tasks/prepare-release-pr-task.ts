import { endGroup, startGroup } from '@actions/core';
import { determineVersionIncreaseTask } from './determine-version-increase-task';
import { executeCommitChangesTask } from './execute-commit-changes-task';
import { executeVersionIncreaseTask } from './execute-version-increase-task';
import { generateChangelogTask } from './generate-changelog-task';
import { MainContextType } from '../../model/tasks/main-context-type';

export async function prepareReleasePrTask(ctx: MainContextType) {
  try {
    startGroup('🚀 Prepare Release PR');

    await determineVersionIncreaseTask(ctx);
    await executeVersionIncreaseTask(ctx);
    await generateChangelogTask(ctx);
    await executeCommitChangesTask(ctx);
  } catch (err: unknown) {
    throw new Error('Failed to prepare release PR', { cause: err });
  } finally {
    endGroup();
  }
}
