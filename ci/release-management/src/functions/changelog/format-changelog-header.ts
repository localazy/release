import { IFormatChangelogHeaderOptions } from '@/model/changelog/i-format-changelog-header-options';

export function formatChangelogHeader({ version }: IFormatChangelogHeaderOptions) {
  const date = new Date().toISOString().split('T')[0];
  return `## ${version} (${date})\n`;
}
