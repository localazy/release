import { IScanBranchStateTaskOutput } from '../tasks/i-scan-branch-state-task-output';

export interface IGenerateChangelogOptions {
  newCommits: IScanBranchStateTaskOutput['newCommits'];
  version: IScanBranchStateTaskOutput['packageJson']['version'];
  template: 'changelog-md' | 'pull-request' | 'release';
}
