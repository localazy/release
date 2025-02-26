import { IScanBranchStateTaskOutput } from '@/model/tasks/i-scan-branch-state-task-output';

export interface IGenerateChangelogOptions {
  newCommits: IScanBranchStateTaskOutput['newCommits'];
  version: IScanBranchStateTaskOutput['packageJson']['version'];
  template: 'changelog-md' | 'pull-request' | 'github-release';
}
