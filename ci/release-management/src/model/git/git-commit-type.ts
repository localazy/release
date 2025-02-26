import { ChangelogCategoryType } from '@/model/changelog/changelog-category-type';
import { CategorizedCommitsType } from '@/model/git/commit/categorized-commits-type';
import { IGitTag } from '@/model/git/i-git-tag';
import { IGitRawCommit } from '@/model/git/i-git-raw-commit';

export type GitCommitType = Omit<IGitRawCommit, 'tags'> & {
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
