import { IScanBranchStateTaskOutput } from '../tasks/i-scan-branch-state-task-output';

export interface IFormatChangelogCommitOptions {
  commit: IScanBranchStateTaskOutput['newCommits'][0];
}
