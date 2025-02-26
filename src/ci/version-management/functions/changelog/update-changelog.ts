import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { IUpdateChangelogOptions } from '../../model/changelog/i-update-changelog-options';
import { formatBoxFooterLine } from '../log/box/format-box-footer-line';
import { formatBoxHeaderLine } from '../log/box/format-box-header-line';
import { formatBoxLine } from '../log/box/format-box-line';
import { logger } from '../log/logger';
import { c } from '../log/theme/c';
import { config } from '../log/theme/config';

export async function updateChangelog({
  newSection,
  filePath = 'CHANGELOG.md',
}: IUpdateChangelogOptions): Promise<void> {
  try {
    logger(`Updating ${filePath}`);

    let existingContent = '';

    if (existsSync(filePath)) {
      existingContent = await readFile(filePath, 'utf8');
    }

    const updatedContent = `${newSection}\n${existingContent}`;
    await writeFile(filePath, updatedContent, 'utf8');

    logger(formatBoxHeaderLine({ boxWidth: config.categorizedCommits.minWidth }));
    const lines = newSection.split('\n');
    lines.forEach((line) => {
      logger(formatBoxLine({ text: line, textColor: c.shellNoOutput }));
    });
    logger(formatBoxFooterLine({ boxWidth: config.categorizedCommits.minWidth }));
  } catch (err: unknown) {
    throw new Error(`Failed to update ${filePath}`, { cause: err });
  }
}
