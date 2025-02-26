import { c } from '../../../const/theme/c';
import { config } from '../../../const/theme/config';
import { IFormatShellStatusOptions } from '../../../model/log/box/i-format-shell-status-options';

export function formatShellStatus({ exitCode, out, boxWidth }: IFormatShellStatusOptions) {
  const hasNonZeroExitCode = exitCode !== 0;
  const hasStderrOutput = out.some((line) => line.type === 'stderr');

  let status;

  if (hasNonZeroExitCode) {
    status = c.error;
  } else if (hasStderrOutput) {
    status = c.warning;
  } else {
    status = c.success;
  }

  const theme = {
    status,
    exitCode: hasNonZeroExitCode ? c.error : c.boxLabel,
  };

  const exitCodeMessage = ' Exit Code ';
  const stderrMessage = hasStderrOutput ? ' Detected stderr ' : ' No stderr ';
  const missingWidth = boxWidth - 3 - exitCodeMessage.length - 4 - stderrMessage.length;

  const segments = [
    c.boxBorder(config.parts.bottomLeft),
    c.boxBorder(config.parts.horizontal),
    theme.status(config.parts.circle),
    c.boxLabel(exitCodeMessage),
    theme.exitCode(exitCode),
    ' ',
    c.boxBorder(config.parts.horizontal.repeat(2)),
    c.boxLabel(stderrMessage),
    ' ',
    c.boxBorder(config.parts.horizontal.repeat(missingWidth)),
    c.boxBorder(config.parts.circle),
  ];
  return segments.join('');
}
