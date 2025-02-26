import { IPackageJson } from '@/model/commands/context/i-package-json';
import { GitCommitType } from '@/model/git/git-commit-type';
import { IGitTag } from '@/model/git/i-git-tag';

import { CategorizedCommitsOutputType } from '@/model/git/commit/categorized-commits-output-type';

export interface IScanGitRepositoryTaskOutput {
  commits: GitCommitType[];
  latestTag: IGitTag | null;
  newCommits: GitCommitType[];
  categorizedCommits: CategorizedCommitsOutputType;
  packageJson: IPackageJson;
}
