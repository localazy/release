import { c } from '../theme/c';
import { config } from '../theme/config';

export function drawRightBorder() {
  const segments = [c.boxBorder(config.parts.vertical)];
  return segments.join('');
}
