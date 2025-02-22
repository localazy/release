import { SemverDefinitions } from '../../../const/semver-definitions';
import { ICategorizedCommitsOptions } from '../../../model/git/commit/i-categorized-commits-options';
import { logger } from '../../log/logger';
import { CategorizedCommitsOutputType } from '../../../model/git/commit/categorized-commits-output-type';

export function categorizeCommits({ newCommits }: ICategorizedCommitsOptions): CategorizedCommitsOutputType {
  logger('Categorizing commits');

  // Dynamically create an object where each key corresponds to a commit type from SemverDefinitions
  const categorizedCommits: CategorizedCommitsOutputType = SemverDefinitions.reduce(
    (acc: CategorizedCommitsOutputType, type) => {
      acc[type.id] = [];
      return acc;
    },
    {} as CategorizedCommitsOutputType,
  );

  // Explicitly add the 'other' category, which is not part of SemverDefinitions.
  categorizedCommits.other = [];

  // Categorize commits
  return newCommits.reduce((acc, commit) => {
    if (commit.parsedMessage.type === null) {
      acc.other.push(commit);
      return acc;
    }

    acc[commit.semver.type].push(commit);

    return acc;
  }, categorizedCommits);
}
