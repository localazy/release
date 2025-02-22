import { GitCommitType } from '../../model/git/git-commit-type';
import { IGitParseCommitsOptions } from '../../model/git/i-git-parse-commits-options';
import { logger } from '../log/logger';
import { parseRawCommitMessage } from './semver/parse-raw-commit-message';
import { parseSemver } from './semver/parse-semver';
import { getSemverDefinition } from './commit/get-semver-definition';
import { gitParseCommitTags } from './git-parse-commit-tags';
import { IRawGitCommit } from '../../model/git/i-raw-git-commit';

export function gitParseCommits({ commitsJson }: IGitParseCommitsOptions): GitCommitType[] {
  try {
    logger('Parsing commits');

    const parsedCommits: IRawGitCommit[] = JSON.parse(commitsJson);
    const allSkippedTags: Set<string> = new Set();

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
        url: ``,
        tags,
      };
    });

    // TODO switch to debug
    logger(`All skipped tags: ${JSON.stringify(Array.from(allSkippedTags), null, 2)}`, 'info');

    return commits;
  } catch (err: unknown) {
    throw new Error('Error parsing commits', { cause: err });
  }
}
