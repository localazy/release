import { IScanBranchStateTaskOutput } from '@/model/tasks/i-scan-branch-state-task-output';

export interface ICategorizeChangelogOptions {
  newCommits: IScanBranchStateTaskOutput['newCommits'];
}
