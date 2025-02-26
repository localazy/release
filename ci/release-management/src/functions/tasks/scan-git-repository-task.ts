import { getBranchName } from '@/functions/github/get-branch-name';
import { logCategorizedCommits } from '@/functions/log/log-categorized-commits';
import { logList } from '@/functions/log/log-list';
import { endGroup, logger, startGroup } from '@/functions/log/logger';
import { determineStabilityLevel } from '@/functions/utils/package-json/determine-stability-level';
import { MainContextType } from '@/model/tasks/main-context-type';
import { gitGetCommits } from '@/functions/git/git-get-commits';
import { gitGetCommitsSinceLatestTag } from '@/functions/git/git-get-commits-since-latest-tag';
import { gitGetLatestTag } from '@/functions/git/git-get-latest-tag';
import { categorizeCommits } from '@/functions/git/commit/categorize-commits';
import { readPackageJson } from '@/functions/utils/package-json/read-package-json';
import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';
import { context } from '@actions/github';

export async function scanGitRepositoryTask(ctx: MainContextType): Promise<IScanGitRepositoryTaskOutput> {
  try {
    startGroup('🗃️ Git Repository Status');

    logger('Starting the "Scan Git Repository" task');

    // Get environment variables
    const isSimulatedWorkflowRun = !!process.env.ACT;

    // Get owner and repo from GitHub context
    const eventName = context.eventName;
    const owner = context.repo.owner;
    const repo = context.repo.repo;
    const branch = getBranchName();

    logList({
      rows: [
        { icon: '⚙️', label: 'Workflow Trigger', value: `${eventName} to ${branch}` },
        { icon: '🎭', label: 'Simulated Run', value: isSimulatedWorkflowRun },
        { icon: '👤', label: 'Owner', value: owner },
        { icon: '📂', label: 'Repo', value: repo },
      ],
    });

    // Get commits and latest tag from git
    const commits = await gitGetCommits();
    const latestTag = gitGetLatestTag({ commits });
    const newCommits = gitGetCommitsSinceLatestTag({ commits, latestTag });

    // Read package.json
    const packageJson = await readPackageJson();
    const stabilityLevel = determineStabilityLevel({ packageJson });
    endGroup();

    logList({
      rows: [
        { icon: '🌿', label: 'Branch', value: branch },
        { icon: '🔖', label: 'Latest Git Tag', value: latestTag?.name ?? 'No Tag' },
        {
          icon: '📦',
          label: 'NPM package',
          value: `${packageJson.name}@${packageJson.version}`,
        },
      ],
    });

    startGroup(`✨ New Commits (${newCommits.length})`);
    // Analyze commits
    const categorizedCommits = categorizeCommits({ newCommits });

    logCategorizedCommits({ categorizedCommits });
    endGroup();

    const output: IScanGitRepositoryTaskOutput = {
      isSimulatedWorkflowRun,
      owner,
      repo,
      branch,
      commits,
      latestTag,
      newCommits,
      categorizedCommits,
      packageJson,
      stabilityLevel,
    };

    // Save the results to the context
    ctx['scan-branch-state'] = {
      output,
    };

    return output;
  } catch (err: unknown) {
    throw new Error('Failed to scan git branch', { cause: err });
  }
}
