import { Stability } from '../../../const/stability';
import { IGetVersionStabilityChangeOptions } from '../../../model/utils/version/i-get-version-stability-change-options';

export function getVersionStabilityText({
  ctx: { containsPrereleaseCommit, versionStability },
}: IGetVersionStabilityChangeOptions) {
  let versionStabilityChange = '';

  if (containsPrereleaseCommit) {
    switch (versionStability) {
      case Stability.PRE_RELEASE:
        versionStabilityChange = 'Publishing pre-release';
        break;
      case Stability.STABLE:
        versionStabilityChange = 'Starting pre-release';
        break;
    }
  } else {
    versionStabilityChange = `Keeping ${versionStability}`;
  }

  return versionStabilityChange;
}
