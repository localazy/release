import { GitCommitType } from '@/model/git/git-commit-type';

export interface IGitTag {
  name: string;
  normalizedName: string;
  isMajor: boolean;
  commit: GitCommitType['hash'];
}
