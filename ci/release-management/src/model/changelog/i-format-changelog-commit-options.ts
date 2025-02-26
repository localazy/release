import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';

export interface IFormatChangelogCommitOptions {
  commit: IScanGitRepositoryTaskOutput['newCommits'][0];
}
