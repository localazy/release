import { GitCommitType } from '@/model/git/git-commit-type';

export interface IParseSemverOptions {
  parsedMessage: GitCommitType['parsedMessage'];
}
