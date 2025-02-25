import { IShellOutputData } from '../../../model/log/box/i-shell-output-data';
import { c } from '../theme/c';
import { config } from '../theme/config';

export function formatShellOutputLine({ text, type }: IShellOutputData) {
  let shell;

  switch (type) {
    case 'stderr':
      shell = c.shellOutputError;
      break;
    case 'none':
      shell = c.shellNoOutput;
      break;
    case 'stdout':
    default:
      shell = c.shellOutput;
  }

  const theme = {
    shell,
  };

  const segments = [c.boxBorder(config.parts.vertical), theme.shell(text)];
  return segments.join(' ');
}
