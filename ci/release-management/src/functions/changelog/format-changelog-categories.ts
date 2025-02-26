import { typedEntries } from '@/functions/utils/typed-entries';
import { formatChangelogCommits } from '@/functions/changelog/format-changelog-commits';
import { IFormatChangelogOptions } from '@/model/changelog/i-format-changelog-options';

export function formatChangelogCategories({ changelogCategories }: IFormatChangelogOptions) {
  return typedEntries(changelogCategories)
    .reduce((acc: string[], [category, commits]) => {
      if (!commits || commits.length === 0) {
        return acc;
      }

      // TODO: This is a bit of a hack, but it works for now. Find heading from category
      const heading = commits[0].changelog === 'none' ? '' : commits[0].changelog.heading;
      const formattedCommits = formatChangelogCommits({ commits }).join('\n');

      acc.push(`### ${heading}\n\n${formattedCommits}\n`);

      return acc;
    }, [])
    .join('\n');
}
