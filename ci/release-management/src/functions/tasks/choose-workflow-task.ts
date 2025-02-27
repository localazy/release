import { logger } from '@/functions/log/logger';
import { MainContextType } from '@/model/tasks/main-context-type';
import { containsReleaseCommit } from '@/functions/git/commit/contains-release-commit';
import { IChooseWorkflowTaskOutput } from '@/model/tasks/i-choose-workflow-task-output';

export function chooseWorkflowTask(ctx: MainContextType): IChooseWorkflowTaskOutput {
  try {
    logger('Starting the "Choose Workflow" task');

    if (!ctx['scan-branch-state']) {
      throw new Error('Missing scan-branch-state task output');
    }

    const newCommits = ctx['scan-branch-state'].output.newCommits;
    const latestTag = ctx['scan-branch-state'].output.latestTag;

    throw new Error('No new commits found');

    if (newCommits.length === 0) {
      throw new Error('No new commits found');
    }

    if (latestTag === null) {
      throw new Error('TODO implement first release');
    }

    const hasReleaseCommit = containsReleaseCommit({ newCommits });
    const nextTask = hasReleaseCommit ? 'release-production' : 'prepare-release-pr';

    const output: IChooseWorkflowTaskOutput = {
      nextTask,
    };

    ctx['choose-workflow'] = {
      output,
    };

    return output;
  } catch (err: unknown) {
    throw new Error('Failed to choose workflow', { cause: err });
  }
}
