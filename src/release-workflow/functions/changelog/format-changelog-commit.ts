import { IFormatChangelogCommitOptions } from '../../model/changelog/i-format-changelog-commit-options';

export function formatChangelogCommit({ commit }: IFormatChangelogCommitOptions) {
  const message = commit.parsedMessage.message;

  return `- ${message} ([${commit.shortHash}](${commit.url})`;
}
