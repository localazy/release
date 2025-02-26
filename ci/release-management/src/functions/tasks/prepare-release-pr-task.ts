import { setOutput } from '@actions/core';
import { context } from '@actions/github';
import { MainContextType } from '@/model/tasks/main-context-type';
import { endGroup, startGroup } from '@/functions/log/logger';
import { determineVersionIncreaseTask } from '@/functions/tasks/determine-version-increase-task';
import { executeCommitChangesTask } from '@/functions/tasks/execute-commit-changes-task';
import { executeVersionIncreaseTask } from '@/functions/tasks/execute-version-increase-task';
import { generateChangelogTask } from '@/functions/tasks/generate-changelog-task';
import { isTaskPresent } from '@/functions/tasks/is-task-present';

export async function prepareReleasePrTask(ctx: MainContextType) {
  try {
    startGroup('📤 Prepare Release PR');

    await determineVersionIncreaseTask(ctx);
    await executeVersionIncreaseTask(ctx);
    await generateChangelogTask(ctx);
    await executeCommitChangesTask(ctx);

    console.log('context.eventName', context.eventName);

    if (isTaskPresent(ctx, 'execute-version-increase')) {
      setOutput('package-version', ctx['execute-version-increase'].output.packageJson.version);
    }

    if (isTaskPresent(ctx, 'generate-changelog')) {
      setOutput('changelog-pr', ctx['generate-changelog'].output.prChangelog);
      // TODO changelog-github-release
      setOutput('changelog-github-release', ctx['generate-changelog'].output.prChangelog);
    }

    setOutput('next-action', 'create-pull-request');
  } catch (err: unknown) {
    throw new Error('Failed to prepare release PR', { cause: err });
  } finally {
    endGroup();
  }
}
