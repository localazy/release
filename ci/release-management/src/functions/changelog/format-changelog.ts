import { logger } from '@/functions/log/logger';
import { categorizeChangelog } from '@/functions/changelog/categorize-changelog';
import { ChangelogCommitsType } from '@/model/changelog/changelog-commits-type';
import { formatChangelogCategories } from '@/functions/changelog/format-changelog-categories';
import { formatChangelogHeader } from '@/functions/changelog/format-changelog-header';
import { IGenerateChangelogOptions } from '@/model/changelog/i-generate-changelog-options';

export function formatChangelog({ newCommits, version, template }: IGenerateChangelogOptions) {
  try {
    switch (template) {
      case 'changelog-md':
        logger('Formatting changelog for CHANGELOG.md');
        break;
      case 'pull-request':
        logger('Formatting changelog for pull request');
        break;
      case 'github-release':
        logger('Formatting changelog for release');
        break;
      default:
        throw new Error('Unsupported template: ${template}');
    }

    const formattedHeader = formatChangelogHeader({ version });
    const changelogCategories: ChangelogCommitsType = categorizeChangelog({ newCommits });
    const formattedCategories = formatChangelogCategories({ changelogCategories });

    return `${formattedHeader}\n${formattedCategories}\n`;
  } catch (err: unknown) {
    throw new Error('Failed to format changelog', { cause: err });
  }
}
