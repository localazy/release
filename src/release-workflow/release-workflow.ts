import { MainContextType } from './model/tasks/main-context-type';
import { prepareReleasePrTask } from './functions/tasks/prepare-release-pr-task';
import { productionReleaseTask } from './functions/tasks/production-release-task';
import { chooseWorkflowTask } from './functions/tasks/choose-workflow-task';
import { scanGitBranchTask } from './functions/tasks/scan-git-branch-task';

export async function releaseWorkflow() {
  try {
    const ctx: MainContextType = {};

    // startGroup('⚙️ Workflow Run Details');
    // showAvailableEnvVariables();
    // const env = processEnvVariables();

    await scanGitBranchTask(ctx);
    chooseWorkflowTask(ctx);

    switch (ctx['choose-workflow']?.output.nextTask) {
      case 'release-production':
        await productionReleaseTask(ctx);
        break;

      case 'prepare-release-pr':
        await prepareReleasePrTask(ctx);
        break;

      default:
        throw new Error('Invalid next task');
    }
  } catch (err: unknown) {
    throw new Error(`Failed to run release workflow.`, { cause: err });
  }
}
