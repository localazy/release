import { GitCommitType } from '../../../model/git/git-commit-type';

export function parsedMessageFactory({
  emoji,
  type,
  scope,
  message,
}: Partial<GitCommitType['parsedMessage']> = {}): GitCommitType['parsedMessage'] {
  return {
    emoji: emoji ?? null,
    type: type ?? null,
    scope: scope ?? null,
    message: message ?? '',
  };
}
