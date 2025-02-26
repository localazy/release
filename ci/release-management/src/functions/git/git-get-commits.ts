import { GitCommitType } from '@/model/git/git-commit-type';
import { runShell } from '@/functions/commands/shell/run-shell';
import { logger } from '@/functions/log/logger';
import { gitParseCommits } from '@/functions/git/git-parse-commits';

export async function gitGetCommits(): Promise<GitCommitType[]> {
  try {
    logger('Getting commits');

    const output = await runShell({
      cmd: 'git log',
      args: ['--pretty=\'format:{"hash":"%H","message":"%s","body":"%b","tags":"%D"},\''],
      text: 'Reading commits',
    });

    // Fix the output to make it valid JSON by removing the trailing comma and wrapping in []
    const commitsJson = `[${output.value.replace(/,$/, '')}]`;
    return gitParseCommits({ commitsJson });
  } catch (err: unknown) {
    throw new Error('Error getting commits', { cause: err });
  }
}
