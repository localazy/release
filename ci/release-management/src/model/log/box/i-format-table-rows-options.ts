import { ILogTableRow } from '@/model/log/box/i-log-table-row';

export interface IFormatTableRowsOptions {
  rows: ILogTableRow[];
  drawBorder?: boolean;
}
