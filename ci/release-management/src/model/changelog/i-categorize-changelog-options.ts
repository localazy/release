import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';

export interface ICategorizeChangelogOptions {
  newCommits: IScanGitRepositoryTaskOutput['newCommits'];
}
