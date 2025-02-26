import { GitCommitType } from '@/model/git/git-commit-type';
import { IGitRawCommit } from '@/model/git/i-git-raw-commit';

export interface IGitParseTagsOptions {
  rawTags: IGitRawCommit['tags'];
  hash: GitCommitType['hash'];
}
