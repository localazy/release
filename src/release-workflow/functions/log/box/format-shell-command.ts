import { IFormatShellCommandOptions } from '../../../model/log/box/i-format-shell-command-options';
import { c } from '../theme/c';
import { config } from '../theme/config';

export function formatShellCommand({ cmd }: IFormatShellCommandOptions) {
  const segments = [c.boxBorder(config.parts.vertical), ' ', c.shellCommandArrow('$'), ' ', c.shellCommand(cmd)];
  return segments.join('');
}
