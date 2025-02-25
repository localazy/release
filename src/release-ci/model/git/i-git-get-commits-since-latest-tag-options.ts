import { GitCommitType } from './git-commit-type';
import { IGitTag } from './i-git-tag';

export interface IGitGetCommitsSinceLatestTagOptions {
  commits: GitCommitType[];
  latestTag: IGitTag | null;
}
