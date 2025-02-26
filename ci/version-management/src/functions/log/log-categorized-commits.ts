import { SemverDefinitions } from '../../const/semver-definitions';
import { ILogCategorizedCommitsOptions } from '../../model/log/i-log-categorized-commits-options';
import { CategorizedCommitsType } from '../../model/git/commit/categorized-commits-type';
import { formatBoxFooterLine } from './box/format-box-footer-line';
import { formatBoxHeaderLine } from './box/format-box-header-line';
import { formatBoxLine } from './box/format-box-line';
import { getCommitLines } from './categorized-commits/get-commit-lines';
import { logger } from './logger';
import { c } from '../../const/theme/c';
import { config } from '../../const/theme/config';

export function logCategorizedCommits({ categorizedCommits }: ILogCategorizedCommitsOptions) {
  const boxWidth = config.categorizedCommits.minWidth;
  const initialCategories: { label: string; key: CategorizedCommitsType }[] = [];
  const categories = SemverDefinitions.reduce((acc, definition) => {
    acc.push({ label: definition.heading as string, key: definition.id });
    return acc;
  }, initialCategories);
  categories.push({ label: '❓ Other Commits', key: 'other' });

  logger(formatBoxHeaderLine({ boxWidth }));
  categories.forEach(({ label, key }) => {
    logger(formatBoxLine({ text: label, textColor: c.commitCategory }));
    const lines = getCommitLines({ commits: categorizedCommits[key] });
    lines.forEach((line) => {
      logger(line);
    });
    logger(formatBoxLine({ text: '', textColor: c.shellNoOutput }));
  });
  logger(formatBoxFooterLine({ boxWidth }));
}
