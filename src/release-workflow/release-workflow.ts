import { endGroup, startGroup } from '@actions/core';
import { executeWorkflowAction } from './functions/utils/workflow-action/execute-workflow-action';
import { commandContextFactory } from './functions/commands/context/command-context-factory';
import { processEnvVariables } from './functions/utils/env/process-env-variables';
import { logCategorizedCommits } from './functions/log/log-categorized-commits';
import { logList } from './functions/log/log-list';
import { logTable } from './functions/log/log-table';
import { logger } from './functions/log/logger';
import { createOctokitInstance } from './functions/octokit/api/create-octokit-instance';
import { fetchCommitsSinceTag } from './functions/octokit/api/fetch-commits-since-tag';
import { getLatestTag } from './functions/octokit/api/get-latest-tag';
import { decideWorkflowAction } from './functions/utils/workflow-action/decide-workflow-action';
import { getWorkflowActionText } from './functions/utils/workflow-action/get-workflow-action-text';
import { categorizeCommits } from './functions/utils/commit/categorize-commits';
import { containsPrereleaseCommit } from './functions/utils/commit/contains-prerelease-commit';
import { getVersionStability } from './functions/utils/package-json/get-version-stability';
import { isPrereleaseStability } from './functions/utils/package-json/is-prerelease-stability';
import { readPackageJson } from './functions/utils/package-json/read-package-json';
import { getVersionIncrease } from './functions/utils/version/get-version-increase';
import { getVersionStabilityText } from './functions/utils/version/get-version-stability-text';
import { ICommandContext } from './model/commands/context/i-command-context';
import { ILogTableRow } from './model/log/box/i-log-table-row';

export async function releaseCi() {
  // showAvailableEnvVariables();
  const envVariables = processEnvVariables();

  startGroup('⚙️ Workflow Run Details');
  logList({
    rows: [
      { icon: '🎭', label: 'Simulated Run', value: envVariables.isSimulatedWorkflowRun },
      { icon: '👤', label: 'Owner', value: envVariables.owner },
      { icon: '📂', label: 'Repo', value: envVariables.repo },
      { icon: '🌿', label: 'Branch', value: envVariables.branch },
    ],
  });
  endGroup();
  const octokit = createOctokitInstance({ token: envVariables.token });
  const ctx: ICommandContext = await commandContextFactory({ octokit, ...envVariables });

  const latestTag = await getLatestTag(ctx);
  if (latestTag === null) {
    logger('No tags found.');
    // TODO
    return;
  }

  ctx.latestTag = latestTag;
  ctx.newCommits = await fetchCommitsSinceTag({ ctx });
  ctx.containsPrereleaseCommit = containsPrereleaseCommit({ ctx });
  ctx.categorizedCommits = categorizeCommits({ ctx });
  ctx.pkg = await readPackageJson();
  ctx.isPrereleaseStability = isPrereleaseStability({ ctx });
  ctx.versionStability = getVersionStability({ ctx });

  const overview = '📌 Git Branch Status';
  const logRows: ILogTableRow[] = [
    { icon: '📦', label: 'NPM package', value: `${ctx.pkg.name}@${ctx.pkg.version}` },
    { icon: '🟢', label: 'Version Stability', value: ctx.versionStability },
    { icon: '🔖', label: 'Latest GIT Tag', value: envVariables.repo },
    { icon: '✨', label: 'New Commits', value: ctx.newCommits.length },
  ];

  if (ctx.newCommits.length === 0) {
    logRows.push({ icon: '🤖', label: 'Workflow Action', value: 'No new commits found. Exiting.' });
    logTable({ text: overview, rows: logRows });
    return;
  }

  logTable({ text: overview, rows: logRows });

  ctx.bumpType = getVersionIncrease({ ctx });
  ctx.workflowAction = decideWorkflowAction({ ctx });
  ctx.workflowActionText = getWorkflowActionText({ ctx });
  ctx.getVersionStabilityText = getVersionStabilityText({ ctx });

  startGroup('📜 New Commits');
  logCategorizedCommits({ categorizedCommits: ctx.categorizedCommits });
  endGroup();

  logTable({
    text: '🎯 Next Step',
    rows: [
      { icon: '⬆️', label: 'Version Increase', value: ctx.bumpType },
      { icon: '♻️', label: 'Stability Change', value: ctx.getVersionStabilityText },
      { icon: '🤖', label: 'Workflow Action', value: ctx.workflowActionText },
    ],
  });

  startGroup('🤖 Executing Workflow Action');
  await executeWorkflowAction({ ctx });
  endGroup();
}
