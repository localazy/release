import { IChooseWorkflowTaskOutput } from './i-choose-workflow-task-output';
import { IExecuteVersionIncreaseTaskOutput } from './i-execute-version-increase-task-output';
import { IGenerateChangelogTaskOutput } from './i-generate-changelog-task-output';
import { IScanBranchStateTaskOutput } from './i-scan-branch-state-task-output';
import { IDetermineVersionIncreaseTaskOutput } from './i-determine-version-increase-task-output';

export type MainTaskOutputMapType = {
  'scan-branch-state': IScanBranchStateTaskOutput;
  'choose-workflow': IChooseWorkflowTaskOutput;
  'determine-version-increase': IDetermineVersionIncreaseTaskOutput;
  'execute-version-increase': IExecuteVersionIncreaseTaskOutput;
  'generate-changelog': IGenerateChangelogTaskOutput;
};
