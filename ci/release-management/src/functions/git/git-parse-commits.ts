import { context } from '@actions/github';
import { GitCommitType } from '@/model/git/git-commit-type';
import { IGitParseCommitsOptions } from '@/model/git/i-git-parse-commits-options';
import { logger } from '@/functions/log/logger';
import { parseRawCommitMessage } from '@/functions/git/semver/parse-raw-commit-message';
import { parseSemver } from '@/functions/git/semver/parse-semver';
import { getSemverDefinition } from '@/functions/git/commit/get-semver-definition';
import { gitParseCommitTags } from '@/functions/git/git-parse-commit-tags';
import { IGitRawCommit } from '@/model/git/i-git-raw-commit';

export function gitParseCommits({ commitsJson }: IGitParseCommitsOptions): GitCommitType[] {
  try {
    logger('Parsing commits');

    const parsedCommits: IGitRawCommit[] = JSON.parse(commitsJson);
    const allSkippedTags: Set<string> = new Set();
    const owner = context.repo.owner;
    const repo = context.repo.repo;

    // Map the tags to an array
    const commits: GitCommitType[] = parsedCommits.map((rawCommit): GitCommitType => {
      const { tags: rawTags, ...rawRest } = rawCommit;
      const { tags, skippedTags } = gitParseCommitTags({ rawTags, hash: rawCommit.hash });
      skippedTags.forEach((tag) => allSkippedTags.add(tag));

      const parsedMessage = parseRawCommitMessage({ rawCommit });

      const semver = parseSemver({ parsedMessage });

      let changelog: GitCommitType['changelog'] = 'none';
      if (semver.type !== 'other') {
        const def = getSemverDefinition(semver.type);
        if (def) {
          changelog = def.changelog;
        }
      }

      return {
        ...rawRest,
        shortHash: rawCommit.hash.slice(0, 7),
        parsedMessage,
        semver,
        changelog,
        url: `https://github.com/${owner}/${repo}/commit/${rawCommit.hash}`,
        tags,
      };
    });

    // TODO switch to debug
    logger(`Tags skipped during parsing: ${JSON.stringify(Array.from(allSkippedTags), null, 2)}`, 'info');

    return commits;
  } catch (err: unknown) {
    throw new Error('Error parsing commits', { cause: err });
  }
}
