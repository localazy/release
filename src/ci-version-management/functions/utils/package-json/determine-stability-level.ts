import { Stability } from '../../../const/stability';
import { IDetermineStabilityLevelOptions } from '../../../model/utils/package-json/i-determine-stability-level-options';
import { VersionStabilityType } from '../../../model/utils/version/version-stability-type';
import { logger } from '../../log/logger';

export function determineStabilityLevel({
  packageJson: { version },
}: IDetermineStabilityLevelOptions): VersionStabilityType {
  try {
    logger('Determining package.json version stability level');

    const regex = /-beta\.\d+$/;

    return regex.test(version) ? Stability.PRE_RELEASE : Stability.STABLE;
  } catch (err: unknown) {
    throw new Error('Failed to determine package.json version stability level', { cause: err });
  }
}
