import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';

export interface IFormatChangelogCommitsOptions {
  commits: IScanGitRepositoryTaskOutput['newCommits'];
}
