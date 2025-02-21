import { Stability } from '../../../const/stability';
import { IGetVersionStabilityOptions } from '../../../model/utils/package-json/i-get-version-stability-options';

export function getVersionStability({ ctx: { isPrereleaseStability } }: IGetVersionStabilityOptions) {
  return isPrereleaseStability ? Stability.PRE_RELEASE : Stability.STABLE;
}
