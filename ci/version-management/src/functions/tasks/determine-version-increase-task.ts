import { logger } from '../log/logger';
import { containsPrereleaseCommit } from '../git/commit/contains-prerelease-commit';
import { determineStabilityLevel } from '../utils/package-json/determine-stability-level';
import { determineVersionIncrease } from '../utils/version/determine-version-increase';
import { versionStabilityChangeLabel } from '../utils/version/version-stability-change-label';
import { decideVersionChangeAction } from '../utils/workflow-action/decide-version-change-action';
import { getVersionChangeActionLabel } from '../utils/workflow-action/get-version-change-action-label';
import { IDetermineVersionIncreaseTaskOutput } from '../../model/tasks/i-determine-version-increase-task-output';
import { isTaskPresent } from './is-task-present';
import { MainContextType } from '../../model/tasks/main-context-type';

export async function determineVersionIncreaseTask(ctx: MainContextType): Promise<IDetermineVersionIncreaseTaskOutput> {
  try {
    logger('Starting the "Determine Version Increase" task');

    if (!isTaskPresent(ctx, 'scan-branch-state')) {
      throw new Error('Missing scan-branch-state task output');
    }

    // logList({
    //   rows: [
    //     { icon: '🟢', label: 'Version Stability', value: ctx.versioning.stabilityLevel },
    //     { icon: '⬆️', label: 'Version Increase', value: ctx.versioning.versionIncrease },
    //     { icon: '♻️', label: 'Stability Change', value: ctx.versioning.stabilityChangeLabel },
    //   ],
    // });

    const { packageJson, newCommits } = ctx['scan-branch-state'].output;

    // Determine stability and version increase
    const stabilityLevel = determineStabilityLevel({ packageJson });
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
      stabilityLevel,
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
