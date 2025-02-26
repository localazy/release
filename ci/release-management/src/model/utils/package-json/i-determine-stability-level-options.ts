import { IScanBranchStateTaskOutput } from '@/model/tasks/i-scan-branch-state-task-output';

export interface IDetermineStabilityLevelOptions {
  packageJson: IScanBranchStateTaskOutput['packageJson'];
}
