import { IPackageJson } from '../commands/context/i-package-json';
import { GitCommitType } from '../git/git-commit-type';
import { IGitTag } from '../git/i-git-tag';

import { CategorizedCommitsOutputType } from '../git/commit/categorized-commits-output-type';

export interface IScanBranchStateTaskOutput {
  commits: GitCommitType[];
  latestTag: IGitTag | null;
  newCommits: GitCommitType[];
  categorizedCommits: CategorizedCommitsOutputType;
  packageJson: IPackageJson;
}
