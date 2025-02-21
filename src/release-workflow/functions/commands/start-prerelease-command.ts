import { ICommandContext } from '../../model/commands/context/i-command-context';
import { runShell } from './shell/run-shell';

export interface StartPrereleaseCommandOptions {
  ctx: ICommandContext;
}
export async function startPrereleaseCommand({
  ctx: { bumpType },
}: StartPrereleaseCommandOptions): Promise<string | null> {
  let result;

  switch (bumpType) {
    case 'major':
      result = await runShell({
        text: 'Start pre-release of major version',
        cmd: 'npm version premajor --preid=beta --no-git-tag-version',
      });
      break;

    case 'minor':
      result = await runShell({
        text: 'Start pre-release of minor version',
        cmd: 'npm version preminor --preid=beta --no-git-tag-version',
      });
      break;

    case 'patch':
    default:
      result = await runShell({
        text: 'Start pre-release of patch version',
        cmd: 'npm version prepatch --preid=beta --no-git-tag-version',
      });
  }

  return result.exitCode !== 0 ? null : result.value;
}
