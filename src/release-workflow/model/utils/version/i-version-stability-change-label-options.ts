import { IDecideWorkflowActionOptions } from '../workflow-action/i-decide-workflow-action-options';

export interface IVersionStabilityChangeLabelOptions {
  switchingVersionStability: IDecideWorkflowActionOptions['switchingVersionStability'];
  stabilityLevel: IDecideWorkflowActionOptions['stabilityLevel'];
}
