import { config } from '../theme/config';
import { drawBottomBorder } from './draw-bottom-border';
import { drawLeftBorder } from './draw-left-border';
import { drawRightBorder } from './draw-right-border';
import { drawTopBorder } from './draw-top-border';
import { IBoxHeaderOptions } from '../../../model/log/box/i-box-header-options';

export function formatBoxHeader({ text, theme, boxWidth }: IBoxHeaderOptions) {
  const leftPadding = ' '.repeat(config.table.padding.left);
  const rightPadding = ' '.repeat(config.table.padding.right);
  const missingSpace = Math.max(boxWidth - text.length - config.table.padding.left - config.table.padding.right, 0);
  const textPadding = ' '.repeat(missingSpace);

  const topBorder = drawTopBorder({ boxWidth });
  const bottomBorder = drawBottomBorder({ boxWidth });

  const message = [drawLeftBorder(), leftPadding, theme.text(text), textPadding, rightPadding, drawRightBorder()].join(
    '',
  );

  const segments = [topBorder, message, bottomBorder];
  return segments.join('\n');
}
