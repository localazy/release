import { IFormatTableRowOptions } from '@/model/log/table/i-format-table-row-options';
import { c } from '@/const/theme/c';

export function formatTableRow({
  row: { icon, label, value },
  columnWidth,
  border,
  borderIconGap,
  iconLabelGap,
  drawBorder = true,
}: IFormatTableRowOptions) {
  const labelSpacing = Math.max(columnWidth - label.length, 0);
  const labelValueGap = ' '.repeat(labelSpacing);

  const segments = [];
  if (drawBorder) {
    segments.push(border, borderIconGap);
  }
  segments.push(...[icon, iconLabelGap, c.key(label), labelValueGap, c.value(value)]);
  return segments.join('');
}
