import { IDecideWorkflowActionOptions } from '@/model/utils/workflow-action/i-decide-workflow-action-options';

export interface IVersionStabilityChangeLabelOptions {
  switchingVersionStability: IDecideWorkflowActionOptions['switchingVersionStability'];
  stabilityLevel: IDecideWorkflowActionOptions['stabilityLevel'];
}
