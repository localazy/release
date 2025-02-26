import { ILogTableOptions } from '@/model/log/table/i-log-table-options';
import { logger } from '@/functions/log/logger';
import { formatBoxFooterLine } from '@/functions/log/box/format-box-footer-line';
import { formatBoxHeader } from '@/functions/log/box/format-box-header';
import { getTableWidth } from '@/functions/log/table/get-table-width';
import { formatTableRows } from '@/functions/log/table/format-table-rows';
import { c } from '@/const/theme/c';

export function logTable({ text, rows }: ILogTableOptions) {
  const formattedRows = formatTableRows({ rows });
  const boxWidth = getTableWidth({ text, rows });

  logger(
    formatBoxHeader({
      text,
      boxWidth,
      theme: { text: c.tableTitle },
    }),
  );
  formattedRows.forEach((row) => logger(row));
  logger(formatBoxFooterLine({ boxWidth }));
}
