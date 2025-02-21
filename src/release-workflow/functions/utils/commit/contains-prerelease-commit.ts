import { IContainsPrereleaseCommitOptions } from '../../../model/utils/commit/i-contains-prerelease-commit-options';

export function containsPrereleaseCommit({ ctx: { newCommits } }: IContainsPrereleaseCommitOptions) {
  return newCommits.some((commit) => commit.semver.type === 'prerelease');
}
