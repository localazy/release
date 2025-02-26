import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';

export interface ICategorizedCommitsOptions {
  newCommits: IScanGitRepositoryTaskOutput['newCommits'];
}
