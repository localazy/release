import { formatChangelog } from '../changelog/format-changelog';
import { updateChangelog } from '../changelog/update-changelog';
import { logger } from '../log/logger';
import { IGenerateChangelogTaskOutput } from '../../model/tasks/i-generate-changelog-task-output';
import { isTaskPresent } from './is-task-present';
import { MainContextType } from '../../model/tasks/main-context-type';

export async function generateChangelogTask(ctx: MainContextType): Promise<IGenerateChangelogTaskOutput> {
  try {
    logger('Starting the "Generate Changelog" task');

    if (!isTaskPresent(ctx, 'scan-branch-state') || !isTaskPresent(ctx, 'execute-version-increase')) {
      throw new Error('Missing scan-branch-state task output');
    }

    const prChangelog = formatChangelog({
      newCommits: ctx['scan-branch-state'].output.newCommits,
      version: ctx['execute-version-increase'].output.packageJson.version,
      template: 'pull-request',
    });
    const changelog = formatChangelog({
      newCommits: ctx['scan-branch-state'].output.newCommits,
      version: ctx['execute-version-increase'].output.packageJson.version,
      template: 'changelog-md',
    });

    await updateChangelog({ newSection: changelog });

    const output: IGenerateChangelogTaskOutput = { changelog, prChangelog };

    ctx['generate-changelog'] = { output };

    return output;
  } catch (err: unknown) {
    throw new Error('Failed to generate changelog', { cause: err });
  }
}
