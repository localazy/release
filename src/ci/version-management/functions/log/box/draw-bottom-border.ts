import { c } from '../../../const/theme/c';
import { IDrawBottomBorderOptions } from '../../../model/log/box/i-draw-bottom-border-options';
import { config } from '../../../const/theme/config';

export function drawBottomBorder({ boxWidth }: IDrawBottomBorderOptions) {
  const segments = [
    c.boxBorder(config.parts.verticalRight),
    c.boxBorder(config.parts.horizontal.repeat(boxWidth)),
    c.boxBorder(config.parts.bottomRight),
  ];
  return segments.join('');
}
