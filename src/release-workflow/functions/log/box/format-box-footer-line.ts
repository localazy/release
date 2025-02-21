import { c } from '../theme/c';
import { config } from '../theme/config';
import { IFormatBoxFooterOptions } from '../table/i-format-box-footer-options';

export function formatBoxFooterLine({ boxWidth }: IFormatBoxFooterOptions) {
  const segments = [
    c.boxBorder(config.parts.bottomLeft),
    c.boxBorder(config.parts.horizontal.repeat(boxWidth)),
    c.boxBorder(config.parts.circle),
  ];
  return segments.join('');
}
