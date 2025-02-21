import { commitDefinitions } from '../../../const/commit-definitions';
import { ParsedCommitType } from '../../../model/utils/commit/parsed-commit-type';
import { CategorizedCommitsType } from '../../../model/utils/commit/categorized-commits-type';
import { IGetCategorizedCommitsOptions } from '../../../model/utils/commit/i-get-categorized-commits-options';

export function categorizeCommits({
  ctx: { newCommits },
}: IGetCategorizedCommitsOptions): Record<CategorizedCommitsType, ParsedCommitType[]> {
  // Dynamically create an object where each key corresponds to a commit type from commitDefinitions
  const categorizedCommits: Record<CategorizedCommitsType, ParsedCommitType[]> = commitDefinitions.reduce(
    (acc: Record<CategorizedCommitsType, ParsedCommitType[]>, type) => {
      acc[type.id] = [];
      return acc;
    },
    {} as Record<CategorizedCommitsType, ParsedCommitType[]>,
  );

  // Explicitly add the 'other' category, which is not part of commitDefinitions.
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
