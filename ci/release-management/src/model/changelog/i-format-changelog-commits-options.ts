import { IScanBranchStateTaskOutput } from '@/model/tasks/i-scan-branch-state-task-output';

export interface IFormatChangelogCommitsOptions {
  commits: IScanBranchStateTaskOutput['newCommits'];
}
