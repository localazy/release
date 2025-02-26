import { runShell } from '@/functions/commands/shell/run-shell';

export async function publishPrereleaseCommand(): Promise<string | null> {
  const output = await runShell({
    text: 'Publish pre-release version',
    cmd: 'npm version patch',
    args: ['--no-git-tag-version'],
  });

  return output.exitCode !== 0 ? null : output.value;
}
