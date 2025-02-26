import { IFormatBoxLineOptions } from '../../../model/log/box/i-format-box-line-options';
import { c } from '../../../const/theme/c';
import { config } from '../../../const/theme/config';

export function formatBoxLine({ text, textColor }: IFormatBoxLineOptions) {
  const segments = [c.boxBorder(config.parts.vertical), textColor(text)];
  return segments.join(' ');
}
