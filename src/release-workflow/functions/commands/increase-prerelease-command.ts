import { runShell } from './shell/run-shell';

export async function increasePrereleaseCommand() {
  const result = await runShell({
    text: 'Increase pre-release version',
    cmd: 'npm version prerelease --no-git-tag-version',
  });

  return result.exitCode !== 0 ? null : result.value;
}
