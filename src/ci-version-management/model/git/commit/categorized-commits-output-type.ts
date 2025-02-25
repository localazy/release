import { GitCommitType } from '../git-commit-type';
import { CategorizedCommitsType } from './categorized-commits-type';

export type CategorizedCommitsOutputType = Record<CategorizedCommitsType, GitCommitType[]>;
