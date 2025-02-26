import { logger } from '@/functions/log/logger';
import { containsPrereleaseCommit } from '@/functions/git/commit/contains-prerelease-commit';
import { determineVersionIncrease } from '@/functions/utils/version/determine-version-increase';
import { versionStabilityChangeLabel } from '@/functions/utils/version/version-stability-change-label';
import { decideVersionChangeAction } from '@/functions/utils/workflow-action/decide-version-change-action';
import { getVersionChangeActionLabel } from '@/functions/utils/workflow-action/get-version-change-action-label';
import { IDetermineVersionIncreaseTaskOutput } from '@/model/tasks/i-determine-version-increase-task-output';
import { isTaskPresent } from '@/functions/utils/type-guard/is-task-present';
import { MainContextType } from '@/model/tasks/main-context-type';

export async function determineVersionIncreaseTask(ctx: MainContextType): Promise<IDetermineVersionIncreaseTaskOutput> {
  try {
    logger('Starting the "Determine Version Increase" task');

    if (!isTaskPresent(ctx, 'scan-branch-state')) {
      throw new Error('Missing scan-branch-state task output');
    }

    const { stabilityLevel, newCommits } = ctx['scan-branch-state'].output;

    // Determine version increase

    const versionIncrease = determineVersionIncrease({ newCommits });
    const switchingVersionStability = containsPrereleaseCommit({ newCommits });

    // Decide the appropriate version change action
    const versionChangeAction = decideVersionChangeAction({
      switchingVersionStability,
      stabilityLevel,
      versionIncrease,
    });

    // Convert workflow actions into human-readable text
    const versionChangeActionLabel = getVersionChangeActionLabel({ versionChangeAction });
    const stabilityChangeLabel = versionStabilityChangeLabel({
      switchingVersionStability,
      stabilityLevel,
    });

    const output: IDetermineVersionIncreaseTaskOutput = {
      versionIncrease,
      versionChangeAction,
      switchingVersionStability,
      versionChangeActionLabel,
      stabilityChangeLabel,
    };

    ctx['determine-version-increase'] = { output };

    return output;
  } catch (err: unknown) {
    throw new Error('Failed to prepare release PR', { cause: err });
  }
}
