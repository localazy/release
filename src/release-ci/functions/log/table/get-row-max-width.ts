import { ILogTableRow } from '../../../model/log/box/i-log-table-row';
import { config } from '../theme/config';

export function getRowMaxWidth(rows: ILogTableRow[]) {
  const { maxLabelLength, maxValueLength } = rows.reduce(
    (acc, row) => {
      const labelLength = row.label.length;
      const valueLength = String(row.value ?? '').length;

      if (labelLength > acc.maxLabelLength) {
        acc.maxLabelLength = labelLength;
      }
      if (valueLength > acc.maxValueLength) {
        acc.maxValueLength = valueLength;
      }

      return acc;
    },
    { maxLabelLength: 0, maxValueLength: 0 },
  );

  return (
    config.table.padding.left +
    config.table.iconWidth +
    maxLabelLength +
    config.table.rows.gap.betweenLabelAndValue +
    maxValueLength +
    config.table.padding.right
  );
}
