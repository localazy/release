import { SemverDefinitions } from '../../const/semver-definitions';
import { ChangelogCommitsType } from '../../model/changelog/changelog-commits-type';
import { ICategorizeChangelogOptions } from '../../model/changelog/i-categorize-changelog-options';

export function categorizeChangelog({ newCommits }: ICategorizeChangelogOptions): ChangelogCommitsType {
  // Dynamically create an object where each key corresponds to a commit type from SemverDefinitions
  const categorizedCommits: ChangelogCommitsType = SemverDefinitions.reduce((acc: ChangelogCommitsType, definition) => {
    if (definition.changelog === 'none') {
      return acc;
    }

    // If the category doesn't exist, create an empty array
    acc[definition.changelog.category] ??= [];
    return acc;
  }, {});

  return newCommits.reduce((acc, commit) => {
    // Ignored commits
    if (commit.changelog === 'none') {
      return acc;
    }

    acc[commit.changelog.category]?.push(commit);

    return acc;
  }, categorizedCommits);
}
