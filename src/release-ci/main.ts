import { handleException } from './functions/utils/error/handle-exception';
import { releaseCiAction } from './release-ci-action';

releaseCiAction().catch((err: unknown) => {
  handleException({ err });
});
