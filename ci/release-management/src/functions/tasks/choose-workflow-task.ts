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
    const hasReleaseCommit = containsReleaseCommit({ newCommits });

    const output: IChooseWorkflowTaskOutput = {
      nextTask: hasReleaseCommit ? 'release-production' : 'prepare-release-pr',
    };

    ctx['choose-workflow'] = {
      output,
    };

    return output;
  } catch (err: unknown) {
    throw new Error('Failed to choose workflow', { cause: err });
  }
}
