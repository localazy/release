import { runShell } from './shell/run-shell';

export async function patchIncreaseCommand(): Promise<string | null> {
  const result = await runShell({
    text: 'Increase patch version',
    cmd: 'npm version patch --no-git-tag-version',
  });

  return result.exitCode !== 0 ? null : result.value;
}
