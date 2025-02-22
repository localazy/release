import { GitCommitType } from '../git/git-commit-type';
import { CategorizedCommitsType } from '../git/commit/categorized-commits-type';

export interface ILogCategorizedCommitsOptions {
  categorizedCommits: Record<CategorizedCommitsType, GitCommitType[]>;
}
