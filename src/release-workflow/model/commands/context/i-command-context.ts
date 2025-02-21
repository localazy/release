import { Octokit } from '@octokit/rest';
import { VersionIncreaseType } from '../../utils/version/version-increase-type';
import { ActionType } from '../../../const/action';
import { ParsedCommitType } from '../../utils/commit/parsed-commit-type';
import { OctokitTag } from '../../octokit/octokit-tag';
import { OctokitWorkflowContext } from '../../octokit/octokit-workflow-context';
import { CategorizedCommitsType } from '../../utils/commit/categorized-commits-type';
import { VersionStabilityType } from '../../utils/version/version-stability-type';

export interface ICommandContext {
  octokit: Octokit;
  isSimulatedWorkflowRun: boolean;
  runId: string;
  token: string;
  owner: string;
  repo: string;
  branch: string;
  workflowContext: OctokitWorkflowContext;
  newCommits: ParsedCommitType[];
  containsPrereleaseCommit: boolean;
  categorizedCommits: Record<CategorizedCommitsType, ParsedCommitType[]>;
  latestTag: OctokitTag;
  pkg: { name: string; version: string };
  isPrereleaseStability: boolean;
  versionStability: VersionStabilityType;
  bumpType: VersionIncreaseType;
  workflowAction: ActionType;
  workflowActionText: string;
  getVersionStabilityText: string;
}
