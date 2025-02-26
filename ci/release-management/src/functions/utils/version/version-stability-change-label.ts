import { Stability } from '@/const/stability';
import { IVersionStabilityChangeLabelOptions } from '@/model/utils/version/i-version-stability-change-label-options';
import { logger } from '@/functions/log/logger';

export function versionStabilityChangeLabel({
  switchingVersionStability,
  stabilityLevel,
}: IVersionStabilityChangeLabelOptions) {
  try {
    logger('Getting version stability change label');

    let versionStabilityChange = '';

    if (switchingVersionStability) {
      switch (stabilityLevel) {
        case Stability.PRE_RELEASE:
          versionStabilityChange = 'Publishing pre-release';
          break;
        case Stability.STABLE:
          versionStabilityChange = 'Starting pre-release';
          break;
      }
    } else {
      versionStabilityChange = `Keeping ${stabilityLevel}`;
    }

    return versionStabilityChange;
  } catch (err: unknown) {
    throw new Error('Failed to get version stability change label', { cause: err });
  }
}
