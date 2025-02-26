import { IContainsPrereleaseCommitOptions } from '@/model/git/commit/i-contains-prerelease-commit-options';

export interface IContainsReleaseCommitOptions {
  newCommits: IContainsPrereleaseCommitOptions['newCommits'];
}
