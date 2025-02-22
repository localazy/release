import { c } from '../theme/c';
import { IDrawTopBorderOptions } from '../../../model/log/box/i-draw-top-border-options';
import { config } from '../theme/config';

export function drawTopBorder({ boxWidth }: IDrawTopBorderOptions) {
  const segments = [
    c.boxBorder(config.parts.topLeft),
    c.boxBorder(config.parts.horizontal.repeat(boxWidth)),
    c.boxBorder(config.parts.topRight),
  ];
  return segments.join('');
}
