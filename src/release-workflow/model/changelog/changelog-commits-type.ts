import { IScanBranchStateTaskOutput } from '../tasks/i-scan-branch-state-task-output';
import { ChangelogCategoryType } from './changelog-category-type';

export type ChangelogCommitsType = Partial<Record<ChangelogCategoryType, IScanBranchStateTaskOutput['newCommits']>>;
