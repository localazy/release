import 'source-map-support/register';
import { handleException } from '@/functions/utils/error/handle-exception';
import { versionManagementAction } from '@/version-management-action';

versionManagementAction().catch((err: unknown) => {
  handleException({ err });
});
