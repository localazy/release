import { ParsedCommitType } from '../../../../model/utils/commit/parsed-commit-type';
import { OctokitCommit } from '../../../../model/octokit/octokit-commit';
import { parsedMessageFactory } from './parsed-message-factory';

export function parseCommitMessage(commit: OctokitCommit): ParsedCommitType['parsedMessage'] {
  const message = commit.commit.message;
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
