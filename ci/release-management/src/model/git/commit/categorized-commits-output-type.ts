import { GitCommitType } from '@/model/git/git-commit-type';
import { CategorizedCommitsType } from '@/model/git/commit/categorized-commits-type';

export type CategorizedCommitsOutputType = Record<CategorizedCommitsType, GitCommitType[]>;
