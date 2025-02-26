import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';
import { ChangelogCategoryType } from '@/model/changelog/changelog-category-type';

export type ChangelogCommitsType = Partial<Record<ChangelogCategoryType, IScanGitRepositoryTaskOutput['newCommits']>>;
