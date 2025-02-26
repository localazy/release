import { GitCommitType } from '@/model/git/git-commit-type';
import { getPrimaryType } from '@/functions/git/commit/get-primary-type';
import { isAlias } from '@/functions/utils/type-guard/is-alias';
import { isPrimaryType } from '@/functions/utils/type-guard/is-primary-type';
import { IParseSemverOptions } from '@/model/git/semver/i-parse-semver-options';

export function parseSemver({ parsedMessage }: IParseSemverOptions): GitCommitType['semver'] {
  const result: GitCommitType['semver'] = {
    type: 'other',
  };

  if (parsedMessage.type !== null) {
    if (isPrimaryType(parsedMessage.type)) {
      result.type = parsedMessage.type;
    } else if (isAlias(parsedMessage.type)) {
      result.type = getPrimaryType(parsedMessage.type);
    }
  }

  return result;
}
