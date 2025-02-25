import { c } from '../theme/c';
import { config } from '../theme/config';
import { IFormatBoxFooterOptions } from '../../../model/log/box/i-format-box-footer-options';

export function formatBoxHeaderLine({ boxWidth }: IFormatBoxFooterOptions) {
  const segments = [
    c.boxBorder(config.parts.topLeft),
    c.boxBorder(config.parts.horizontal.repeat(boxWidth)),
    c.boxBorder(config.parts.circle),
  ];
  return segments.join('');
}
