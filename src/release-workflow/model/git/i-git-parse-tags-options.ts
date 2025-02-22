import { GitCommitType } from './git-commit-type';
import { IRawGitCommit } from './i-raw-git-commit';

export interface IGitParseTagsOptions {
  rawTags: IRawGitCommit['tags'];
  hash: GitCommitType['hash'];
}
