import { runShell } from '@/functions/commands/shell/run-shell';

export async function minorIncreaseCommand() {
  const output = await runShell({
    text: 'Increase minor version',
    cmd: 'npm version minor',
    args: ['--no-git-tag-version'],
  });

  return output.exitCode !== 0 ? null : output.value;
}
