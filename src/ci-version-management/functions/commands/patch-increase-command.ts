import { runShell } from './shell/run-shell';

export async function patchIncreaseCommand(): Promise<string | null> {
  const output = await runShell({
    text: 'Increase patch version',
    cmd: 'npm version patch',
    args: ['--no-git-tag-version'],
  });

  return output.exitCode !== 0 ? null : output.value;
}
