import { c } from '@/const/theme/c';
import { config } from '@/const/theme/config';

export function drawRightBorder() {
  const segments = [c.boxBorder(config.parts.vertical)];
  return segments.join('');
}
