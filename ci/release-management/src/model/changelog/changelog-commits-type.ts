import { IScanBranchStateTaskOutput } from '@/model/tasks/i-scan-branch-state-task-output';
import { ChangelogCategoryType } from '@/model/changelog/changelog-category-type';

export type ChangelogCommitsType = Partial<Record<ChangelogCategoryType, IScanBranchStateTaskOutput['newCommits']>>;
