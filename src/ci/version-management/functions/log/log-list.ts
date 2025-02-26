import { ILogListOptions } from '../../model/log/table/i-log-list-options';
import { formatBoxFooterLine } from './box/format-box-footer-line';
import { formatBoxHeaderLine } from './box/format-box-header-line';
import { formatBoxLine } from './box/format-box-line';
import { logger } from './logger';
import { formatTableRows } from './table/format-table-rows';
import { c } from '../../const/theme/c';
import { config } from '../../const/theme/config';

export function logList({ rows }: ILogListOptions) {
  const boxWidth = config.categorizedCommits.minWidth;
  const formattedRows = formatTableRows({ rows, drawBorder: false });

  logger(formatBoxHeaderLine({ boxWidth }));
  formattedRows.forEach((row) => {
    logger(formatBoxLine({ text: row, textColor: c.commitMessage }));
  });
  logger(formatBoxFooterLine({ boxWidth }));
}
