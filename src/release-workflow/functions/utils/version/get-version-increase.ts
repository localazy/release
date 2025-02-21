import { VersionIncreaseType } from '../../../model/utils/version/version-increase-type';
import { IGetVersionIncreaseOptions } from '../../../model/utils/version/i-get-version-increase-options';

export function getVersionIncrease({ ctx: { newCommits } }: IGetVersionIncreaseOptions): VersionIncreaseType {
  if (newCommits.some((commit) => commit.semver.type === 'breaking')) {
    return 'major';
  }
  if (newCommits.some((commit) => commit.semver.type === 'feature')) {
    return 'minor';
  }
  return 'patch';
}
