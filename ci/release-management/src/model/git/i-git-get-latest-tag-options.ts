import { GitCommitType } from '@/model/git/git-commit-type';

export interface IGitGetLatestTagOptions {
  commits: GitCommitType[];
}
