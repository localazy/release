import { handleException } from '@/functions/utils/error/handle-exception';
import { releaseManagementAction } from '@/release-management-action';

releaseManagementAction().catch((err: unknown) => {
  handleException({ err });
});
