import { ILogListOptions } from '@/model/log/table/i-log-list-options';
import { formatBoxFooterLine } from '@/functions/log/box/format-box-footer-line';
import { formatBoxHeaderLine } from '@/functions/log/box/format-box-header-line';
import { formatBoxLine } from '@/functions/log/box/format-box-line';
import { logger } from '@/functions/log/logger';
import { formatTableRows } from '@/functions/log/table/format-table-rows';
import { c } from '@/const/theme/c';
import { config } from '@/const/theme/config';

export function logList({ rows }: ILogListOptions) {
  const boxWidth = config.categorizedCommits.minWidth;
  const formattedRows = formatTableRows({ rows, drawBorder: false });

  logger(formatBoxHeaderLine({ boxWidth }));
  formattedRows.forEach((row) => {
    logger(formatBoxLine({ text: row, textColor: c.commitMessage }));
  });
  logger(formatBoxFooterLine({ boxWidth }));
}
