import { ChangelogCategoryType } from '../changelog/changelog-category-type';
import { CategorizedCommitsType } from './commit/categorized-commits-type';
import { IGitTag } from './i-git-tag';
import { IRawGitCommit } from './i-raw-git-commit';

export type GitCommitType = Omit<IRawGitCommit, 'tags'> & {
  shortHash: string;
  url: string;
  tags: IGitTag[];
  parsedMessage: {
    emoji: string | null;
    type: string | null;
    scope: string | null;
    message: string;
  };
  changelog:
    | {
        category: ChangelogCategoryType;
        heading: string;
        order: number;
      }
    | 'none';
  semver: {
    type: CategorizedCommitsType;
  };
};
