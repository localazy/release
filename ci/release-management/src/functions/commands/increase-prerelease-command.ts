import { runShell } from '@/functions/commands/shell/run-shell';

export async function increasePrereleaseCommand() {
  const output = await runShell({
    text: 'Increase pre-release version',
    cmd: 'npm version prerelease',
    args: ['--no-git-tag-version'],
  });

  return output.exitCode !== 0 ? null : output.value;
}
