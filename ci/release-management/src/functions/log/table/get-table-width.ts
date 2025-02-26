import { ILogTableOptions } from '@/model/log/table/i-log-table-options';
import { getRowMaxWidth } from '@/functions/log/table/get-row-max-width';
import { config } from '@/const/theme/config';

export function getTableWidth({ text, rows }: ILogTableOptions) {
  const rowMaxWidth = getRowMaxWidth(rows);
  const textMaxWidth = config.table.padding.left + text.length + config.table.padding.right;
  return Math.max(rowMaxWidth, textMaxWidth, config.table.minWidth);
}
