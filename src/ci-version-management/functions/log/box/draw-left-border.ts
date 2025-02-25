import { c } from '../theme/c';
import { config } from '../theme/config';

export function drawLeftBorder() {
  const segments = [c.boxBorder(config.parts.vertical)];
  return segments.join('');
}
