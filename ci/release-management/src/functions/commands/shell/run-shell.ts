import { spawn } from 'child_process';
import { IShellOutputData } from '@/model/log/box/i-shell-output-data';
import { formatBoxHeader } from '@/functions/log/box/format-box-header';
import { formatShellCommand } from '@/functions/log/box/format-shell-command';
import { formatShellOutputLine } from '@/functions/log/box/format-shell-output-line';
import { formatShellStatus } from '@/functions/log/box/format-shell-status';
import { logShell } from '@/functions/log/log-shell';
import { IRunShellOptions } from '@/model/commands/shell/i-run-shell-options';
import { IRunShellResult } from '@/model/commands/shell/i-run-shell-result';
import { logger } from '@/functions/log/logger';
import { c } from '@/const/theme/c';
import { config } from '@/const/theme/config';

export function runShell({ cmd, args, text }: IRunShellOptions): Promise<IRunShellResult> {
  return new Promise((resolve, reject) => {
    const width = config.shell.padding.left + config.shell.iconWidth + text.length + config.shell.padding.right;
    const boxWidth = Math.max(width, config.shell.minWidth);
    logger(
      formatBoxHeader({
        text: `💻 ${text}`,
        boxWidth,
        theme: { text: c.tableTitle },
      }),
    );
    logger(formatShellCommand({ cmd, args }));

    const subprocess = spawn(cmd, args || [], { stdio: 'pipe', shell: true });
    const out: IShellOutputData[] = [];

    subprocess.stdout?.on('data', (rawData) => {
      const data: IShellOutputData = {
        text: rawData.toString().trim(),
        type: 'stdout',
      };
      out.push(data);
      logShell({ data });
    });

    subprocess.stderr?.on('data', (rawData) => {
      const data: IShellOutputData = {
        text: rawData.toString().trim(),
        type: 'stderr',
      };
      out.push(data);
      logShell({ data });
    });

    subprocess.on('close', (code) => {
      const value = out.map((data) => data.text).join('');
      const exitCode = code ?? 0;

      if (out.length === 0) {
        logger(formatShellOutputLine({ text: '( no output )  ', type: 'none' }));
      }
      logger(formatShellOutputLine({ text: '', type: 'stdout' }));
      logger(formatShellStatus({ exitCode, out, boxWidth }));
      resolve({ out, exitCode, value: value.trim() });
    });

    subprocess.on('error', (err) => {
      reject(err);
    });
  });
}
