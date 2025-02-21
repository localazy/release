import { runShell } from './shell/run-shell';

export async function majorIncreaseCommand() {
  const result = await runShell({
    text: 'Increase major version',
    cmd: 'npm version major --no-git-tag-version',
  });

  return result.exitCode !== 0 ? null : result.value;
}
