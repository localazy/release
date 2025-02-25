import { handleException } from './functions/utils/error/handle-exception';
import { ciVersionManagementAction } from './ci-version-management-action';

ciVersionManagementAction().catch((err: unknown) => {
  handleException({ err });
});
