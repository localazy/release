import { setOutput } from '@actions/core';
import { MainContextType } from '@/model/tasks/main-context-type';
import { endGroup, startGroup } from '@/functions/log/logger';
import { determineVersionIncreaseTask } from '@/functions/tasks/determine-version-increase-task';
import { executeCommitChangesTask } from '@/functions/tasks/execute-commit-changes-task';
import { executeVersionIncreaseTask } from '@/functions/tasks/execute-version-increase-task';
import { generateChangelogTask } from '@/functions/tasks/generate-changelog-task';
import { isTaskPresent } from '@/functions/utils/type-guard/is-task-present';

export async function prepareReleasePrTask(ctx: MainContextType) {
  try {
    startGroup('📤 Prepare Release PR');

    await determineVersionIncreaseTask(ctx);
    await executeVersionIncreaseTask(ctx);
    await generateChangelogTask(ctx);
    await executeCommitChangesTask(ctx);

    endGroup();

    // logList({
    //   rows: [
    //     { icon: '🟢', label: 'Version Stability', value: ctx.versioning.stabilityLevel },
    //     { icon: '⬆️', label: 'Version Increase', value: ctx.versioning.versionIncrease },
    //     { icon: '♻️', label: 'Stability Change', value: ctx.versioning.stabilityChangeLabel },
    //   ],
    // });

    if (isTaskPresent(ctx, 'execute-version-increase')) {
      setOutput('package-version', ctx['execute-version-increase'].output.packageJson.version);
    }

    if (isTaskPresent(ctx, 'generate-changelog')) {
      setOutput('changelog-pull-request', ctx['generate-changelog'].output.changelogPullRequest);
      setOutput('changelog-github-release', ctx['generate-changelog'].output.changelogGithubRelease);
    }

    setOutput('next-action', 'create-pull-request');
  } catch (err: unknown) {
    throw new Error('Failed to prepare release PR', { cause: err });
  }
}
