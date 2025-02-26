import { IFormatShellCommandOptions } from '@/model/log/box/i-format-shell-command-options';
import { c } from '@/const/theme/c';
import { config } from '@/const/theme/config';

export function formatShellCommand({ cmd, args }: IFormatShellCommandOptions) {
  const segments = [c.boxBorder(config.parts.vertical), ' ', c.shellCommandArrow('$'), ' ', c.shellCommand(cmd)];
  if (args && args.length > 0) {
    segments.push(' ');
    segments.push(c.shellArgs(args.join(' ')));
  }
  return segments.join('');
}
