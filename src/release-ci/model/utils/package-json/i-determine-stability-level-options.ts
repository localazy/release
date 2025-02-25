import { IScanBranchStateTaskOutput } from '../../tasks/i-scan-branch-state-task-output';

export interface IDetermineStabilityLevelOptions {
  packageJson: IScanBranchStateTaskOutput['packageJson'];
}
