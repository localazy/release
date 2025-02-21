import { runShell } from './shell/run-shell';

export async function minorIncreaseCommand() {
  const result = await runShell({
    text: 'Increase minor version',
    cmd: 'npm version minor --no-git-tag-version',
  });

  return result.exitCode !== 0 ? null : result.value;
}
