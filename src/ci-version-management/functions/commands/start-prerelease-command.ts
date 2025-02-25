import { IStartPrereleaseCommandOptions } from '../../model/commands/i-start-prerelease-command-options';
import { runShell } from './shell/run-shell';

export async function startPrereleaseCommand({
  versionIncrease,
}: IStartPrereleaseCommandOptions): Promise<string | null> {
  let output;

  switch (versionIncrease) {
    case 'major':
      output = await runShell({
        text: 'Start pre-release of major version',
        cmd: 'npm version premajor',
        args: ['--preid=beta', '--no-git-tag-version'],
      });
      break;

    case 'minor':
      output = await runShell({
        text: 'Start pre-release of minor version',
        cmd: 'npm version preminor',
        args: ['--preid=beta', '--no-git-tag-version'],
      });
      break;

    case 'patch':
    default:
      output = await runShell({
        text: 'Start pre-release of patch version',
        cmd: 'npm version prepatch',
        args: ['--preid=beta', '--no-git-tag-version'],
      });
  }

  return output.exitCode !== 0 ? null : output.value;
}
