import { logCategorizedCommits } from '../log/log-categorized-commits';
import { logList } from '../log/log-list';
import { endGroup, logger, startGroup } from '../log/logger';
import { MainContextType } from '../../model/tasks/main-context-type';
import { gitGetCommits } from '../git/git-get-commits';
import { gitGetCommitsSinceLatestTag } from '../git/git-get-commits-since-latest-tag';
import { gitGetLatestTag } from '../git/git-get-latest-tag';
import { categorizeCommits } from '../git/commit/categorize-commits';
import { readPackageJson } from '../utils/package-json/read-package-json';
import { IScanBranchStateTaskOutput } from '../../model/tasks/i-scan-branch-state-task-output';

export async function scanGitBranchTask(ctx: MainContextType): Promise<IScanBranchStateTaskOutput> {
  try {
    startGroup('🌿 Git Branch Status');

    logger('Starting the "Scan Git Branch" task');

    // logList({
    //   rows: [
    //     { icon: '🎭', label: 'Simulated Run', value: ctx.env.isSimulatedWorkflowRun },
    //     { icon: '👤', label: 'Owner', value: ctx.repository.owner },
    //     { icon: '📂', label: 'Repo', value: ctx.repository.repo },
    //   ],
    // });
    // endGroup();

    // Get commits and latest tag from git
    const commits = await gitGetCommits();
    const latestTag = gitGetLatestTag({ commits });
    const newCommits = gitGetCommitsSinceLatestTag({ commits, latestTag });

    // Read package.json
    const packageJson = await readPackageJson();
    endGroup();

    logList({
      rows: [
        // { icon: '🌿', label: 'Branch', value: ctx.repository.branch },
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

    const output: IScanBranchStateTaskOutput = {
      commits,
      latestTag,
      newCommits,
      categorizedCommits,
      packageJson,
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
