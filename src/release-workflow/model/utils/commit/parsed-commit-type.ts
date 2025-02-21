import { OctokitCommit } from '../../octokit/octokit-commit';
import { CategorizedCommitsType } from './categorized-commits-type';

export type ParsedCommitType = OctokitCommit & {
  parsedMessage: {
    emoji: string | null;
    type: string | null;
    scope: string | null;
    message: string;
  };
  semver: {
    type: CategorizedCommitsType;
  };
};
