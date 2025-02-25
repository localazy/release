import { ILogTableRow } from '../../../model/log/box/i-log-table-row';

export function getRowLabelMaxWidth(rows: ILogTableRow[]) {
  return rows.reduce((acc, cur) => {
    return cur.label.length > acc ? cur.label.length : acc;
  }, 0);
}
