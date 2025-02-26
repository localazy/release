import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';

export interface IDetermineVersionIncreaseOptions {
  newCommits: IScanGitRepositoryTaskOutput['newCommits'];
}
