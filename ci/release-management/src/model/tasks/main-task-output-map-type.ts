import { IChooseWorkflowTaskOutput } from '@/model/tasks/i-choose-workflow-task-output';
import { IDetermineVersionIncreaseTaskOutput } from '@/model/tasks/i-determine-version-increase-task-output';
import { IExecuteVersionIncreaseTaskOutput } from '@/model/tasks/i-execute-version-increase-task-output';
import { IGenerateChangelogTaskOutput } from '@/model/tasks/i-generate-changelog-task-output';
import { IScanGitRepositoryTaskOutput } from '@/model/tasks/i-scan-git-repository-task-output';

export type MainTaskOutputMapType = {
  'scan-branch-state': IScanGitRepositoryTaskOutput;
  'choose-workflow': IChooseWorkflowTaskOutput;
  'determine-version-increase': IDetermineVersionIncreaseTaskOutput;
  'execute-version-increase': IExecuteVersionIncreaseTaskOutput;
  'generate-changelog': IGenerateChangelogTaskOutput;
};
