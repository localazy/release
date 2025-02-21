import { runShell } from './shell/run-shell';

export async function publishPrereleaseCommand(): Promise<string | null> {
  const result = await runShell({
    text: 'Publish pre-release version',
    cmd: 'npm version patch --no-git-tag-version',
  });

  return result.exitCode !== 0 ? null : result.value;
}
