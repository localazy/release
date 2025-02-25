import { VersionIncreaseType } from '../../../model/utils/version/version-increase-type';
import { IDetermineVersionIncreaseOptions } from '../../../model/utils/version/i-determine-version-increase-options';
import { logger } from '../../log/logger';

export function determineVersionIncrease({ newCommits }: IDetermineVersionIncreaseOptions): VersionIncreaseType {
  try {
    logger('Determining version increase');

    if (newCommits.some((commit) => commit.semver.type === 'breaking')) {
      return 'major';
    }

    if (newCommits.some((commit) => commit.semver.type === 'feature')) {
      return 'minor';
    }

    return 'patch';
  } catch (err: unknown) {
    throw new Error('Failed to determine version increase', { cause: err });
  }
}
