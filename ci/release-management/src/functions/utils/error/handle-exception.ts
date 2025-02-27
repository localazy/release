import { c } from '@/const/theme/c';
import { collectErrorChain } from '@/functions/utils/error/collect-error-chain';
import { setFailed } from '@actions/core';
import { IHandleExceptionOptions } from '@/model/utils/error/i-handle-exception-options';
import { getErrorMessage } from '@/functions/utils/error/get-error-message';

export function handleException({ err }: IHandleExceptionOptions): void {
  console.error(err);

  const errors = collectErrorChain(err);
  const errorMessage =
    errors.length > 1 ? errors.map(c.error).join(c.shellNoOutput(' -> ')) : c.error(getErrorMessage(err));

  setFailed(errorMessage);
}
