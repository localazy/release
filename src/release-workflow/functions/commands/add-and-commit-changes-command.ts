import { runShell } from './shell/run-shell';

export async function addAndCommitChangesCommand(newVersion: string) {
  await runShell({
    text: 'Add files to commit',
    cmd: 'git add .',
  });

  await runShell({
    text: 'Check for changes',
    cmd: 'git diff --staged --unified=0 --color-words',
  });

  await runShell({
    text: 'ParsedCommitType changes',
    cmd: `git commit -m "🚀 release: ${newVersion}"`,
  });

  await runShell({
    text: 'Show latest commit',
    cmd: 'git show HEAD --no-patch',
  });
}
