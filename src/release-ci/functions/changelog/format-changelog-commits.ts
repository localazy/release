import { formatChangelogCommit } from './format-changelog-commit';
import { IFormatChangelogCommitsOptions } from '../../model/changelog/i-format-changelog-commits-options';

export function formatChangelogCommits({ commits }: IFormatChangelogCommitsOptions) {
  return commits.map((commit) => formatChangelogCommit({ commit }));
}
