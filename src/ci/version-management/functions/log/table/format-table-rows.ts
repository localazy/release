import { IFormatTableRowsOptions } from '../../../model/log/box/i-format-table-rows-options';
import { c } from '../../../const/theme/c';
import { config } from '../../../const/theme/config';
import { formatTableRow } from './format-table-row';
import { getRowLabelMaxWidth } from './get-row-label-max-width';

export function formatTableRows({ rows, drawBorder }: IFormatTableRowsOptions) {
  const border = c.tableRowBorder(config.parts.vertical);
  const borderIconGap = ' '.repeat(config.table.padding.left);
  const iconLabelGap = ' '.repeat(config.table.rows.gap.betweenIconAndLabel);

  const labelMaxWidth = getRowLabelMaxWidth(rows);
  const columnWidth = labelMaxWidth + config.table.rows.gap.betweenLabelAndValue;

  return rows.map((row) => {
    return formatTableRow({ row, border, borderIconGap, iconLabelGap, columnWidth, drawBorder });
  });
}
