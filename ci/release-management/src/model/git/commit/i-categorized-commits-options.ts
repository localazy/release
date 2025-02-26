import { IScanBranchStateTaskOutput } from '@/model/tasks/i-scan-branch-state-task-output';

export interface ICategorizedCommitsOptions {
  newCommits: IScanBranchStateTaskOutput['newCommits'];
}
