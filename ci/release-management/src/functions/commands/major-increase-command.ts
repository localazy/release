import { runShell } from '@/functions/commands/shell/run-shell';

export async function majorIncreaseCommand() {
  const output = await runShell({
    text: 'Increase major version',
    cmd: 'npm version major',
    args: ['--no-git-tag-version'],
  });

  return output.exitCode !== 0 ? null : output.value;
}
