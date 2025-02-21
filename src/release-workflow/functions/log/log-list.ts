import { ILogListOptions } from '../../model/log/table/i-log-list-options';
import { logger } from './logger';
import { formatTableRows } from './table/format-table-rows';

export function logList({ rows }: ILogListOptions) {
  const formattedRows = formatTableRows({ rows, drawBorder: false });

  formattedRows.forEach((row) => logger(row));
}
