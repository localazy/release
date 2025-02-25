import { c } from '../theme/c';
import { IDrawBottomBorderOptions } from '../../../model/log/box/i-draw-bottom-border-options';
import { config } from '../theme/config';

export function drawBottomBorder({ boxWidth }: IDrawBottomBorderOptions) {
  const segments = [
    c.boxBorder(config.parts.verticalRight),
    c.boxBorder(config.parts.horizontal.repeat(boxWidth)),
    c.boxBorder(config.parts.bottomRight),
  ];
  return segments.join('');
}
