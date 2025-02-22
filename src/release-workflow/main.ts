import { handleException } from './functions/utils/error/handle-exception';
import { releaseWorkflow } from './release-workflow';

releaseWorkflow().catch((err: unknown) => {
  handleException({ err });
});
