import { ILogTableRow } from '../box/i-log-table-row';

export interface IFormatTableRowOptions {
  row: ILogTableRow;
  columnWidth: number;
  border: string;
  borderIconGap: string;
  iconLabelGap: string;
  drawBorder?: boolean;
}
