import { isPrimaryType } from '../../../../model/utils/commit/is-primary-type';
import { ParsedCommitType } from '../../../../model/utils/commit/parsed-commit-type';

export function parseCommitType(parsedMessage: ParsedCommitType['parsedMessage']): ParsedCommitType['semver'] {
  const result: ParsedCommitType['semver'] = {
    type: 'other',
  };

  if (parsedMessage.type !== null) {
    if (isPrimaryType(parsedMessage.type)) {
      result.type = parsedMessage.type;
    }
  }

  return result;
}
