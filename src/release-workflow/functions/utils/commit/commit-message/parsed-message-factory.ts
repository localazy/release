import { ParsedCommitType } from '../../../../model/utils/commit/parsed-commit-type';

export function parsedMessageFactory({
  emoji,
  type,
  scope,
  message,
}: Partial<ParsedCommitType['parsedMessage']> = {}): ParsedCommitType['parsedMessage'] {
  return {
    emoji: emoji ?? null,
    type: type ?? null,
    scope: scope ?? null,
    message: message ?? '',
  };
}
