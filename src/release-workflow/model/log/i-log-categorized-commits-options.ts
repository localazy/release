import { ParsedCommitType } from '../utils/commit/parsed-commit-type';
import { CategorizedCommitsType } from '../utils/commit/categorized-commits-type';

export interface ILogCategorizedCommitsOptions {
  categorizedCommits: Record<CategorizedCommitsType, ParsedCommitType[]>;
}
