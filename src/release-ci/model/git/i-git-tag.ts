import { GitCommitType } from './git-commit-type';

export interface IGitTag {
  name: string;
  normalizedName: string;
  isMajor: boolean;
  commit: GitCommitType['hash'];
}
