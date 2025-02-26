import { GitCommitType } from '@/model/git/git-commit-type';
import { IGitTag } from '@/model/git/i-git-tag';

export interface IGitGetCommitsSinceLatestTagOptions {
  commits: GitCommitType[];
  latestTag: IGitTag | null;
}
