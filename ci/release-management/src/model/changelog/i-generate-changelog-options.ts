import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';

export interface IGenerateChangelogOptions {
  newCommits: IScanGitRepositoryTaskOutput['newCommits'];
  version: IScanGitRepositoryTaskOutput['packageJson']['version'];
  template: 'changelog-md' | 'pull-request' | 'github-release';
}
