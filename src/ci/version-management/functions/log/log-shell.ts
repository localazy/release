import { IFormatShellOutputLineOptions } from '../../model/log/box/i-format-shell-output-line-options';
import { formatShellOutputLine } from './box/format-shell-output-line';
import { logger } from './logger';

export function logShell({ data }: IFormatShellOutputLineOptions) {
  const lines = data.text.split('\n');
  lines.forEach((line) => {
    logger(formatShellOutputLine({ text: line, type: data.type }));
  });
}
