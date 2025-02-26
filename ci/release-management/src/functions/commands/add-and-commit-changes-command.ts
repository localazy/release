import { runShell } from '@/functions/commands/shell/run-shell';

export async function addAndCommitChangesCommand(newVersion: string) {
  await runShell({
    text: 'Add files to commit',
    cmd: 'git add',
    args: ['.'],
  });

  await runShell({
    text: 'Check for changes',
    cmd: 'git diff',
    args: ['--staged', '--unified=0', '--color=always'],
  });

  await runShell({
    text: 'Commit changes',
    cmd: `git commit`,
    args: ['-m', `'🚀 release: ${newVersion}'`],
  });

  await runShell({
    text: 'Show latest commit',
    cmd: 'git show',
    args: ['HEAD', '--no-patch'],
  });
}
