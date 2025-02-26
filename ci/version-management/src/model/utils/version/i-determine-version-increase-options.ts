import { IScanBranchStateTaskOutput } from '../../tasks/i-scan-branch-state-task-output';

export interface IDetermineVersionIncreaseOptions {
  newCommits: IScanBranchStateTaskOutput['newCommits'];
}
