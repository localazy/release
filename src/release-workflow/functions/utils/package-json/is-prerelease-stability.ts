import { IIsPrereleaseStabilityOptions } from '../../../model/utils/package-json/i-is-prerelease-stability-options';

export function isPrereleaseStability({
  ctx: {
    pkg: { version },
  },
}: IIsPrereleaseStabilityOptions): boolean {
  return /-beta\.\d+$/.test(version);
}
