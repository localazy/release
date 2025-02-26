import { MainContextType } from '@/model/tasks/main-context-type';
import { prepareReleasePrTask } from '@/functions/tasks/prepare-release-pr-task';
import { productionReleaseTask } from '@/functions/tasks/production-release-task';
import { chooseWorkflowTask } from '@/functions/tasks/choose-workflow-task';
import { scanGitRepositoryTask } from '@/functions/tasks/scan-git-repository-task';

export async function versionManagementAction() {
  try {
    const ctx: MainContextType = {};
    // ⚙️ Workflow Run Details
    // showAvailableEnvVariables();
    // const env = processEnvVariables();

    await scanGitRepositoryTask(ctx);
    chooseWorkflowTask(ctx);

    switch (ctx['choose-workflow']?.output.nextTask) {
      case 'prepare-release-pr':
        await prepareReleasePrTask(ctx);
        break;

      case 'release-production':
        await productionReleaseTask(ctx);
        break;

      default:
        throw new Error('Invalid next task');
    }
  } catch (err: unknown) {
    throw new Error(`Failed to run release workflow.`, { cause: err });
  }
}
