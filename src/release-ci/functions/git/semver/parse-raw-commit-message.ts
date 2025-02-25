import { GitCommitType } from '../../../model/git/git-commit-type';
import { IGitParseRawCommitMessageOptions } from '../../../model/git/semver/i-git-parse-raw-commit-message-options';
import { parsedMessageFactory } from './parsed-message-factory';

export function parseRawCommitMessage({ rawCommit }: IGitParseRawCommitMessageOptions): GitCommitType['parsedMessage'] {
  const message = rawCommit.message;
  const regex = /^([\p{Emoji}]?)\s*(\w+)(?:\(([^)]+)\))?:\s*(.+)$/u;
  const match = message.match(regex);

  if (!match) {
    return parsedMessageFactory();
  }

  return parsedMessageFactory({
    emoji: match[1] || null,
    type: match[2] || null,
    scope: match[3] || null,
    message: match[4] || message,
  });
}
