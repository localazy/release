import { c } from '@/const/theme/c';
import { collectErrorChain } from '@/functions/utils/error/collect-error-chain';
import { setFailed } from '@actions/core';
import { IHandleExceptionOptions } from '@/model/utils/error/i-handle-exception-options';
import { getErrorMessage } from '@/functions/utils/error/get-error-message';

export function handleException({ err }: IHandleExceptionOptions) {
  console.error(err);

  const errors = collectErrorChain(err);
  const colorizedErrors = errors.map((error) => c.error(error)).join(c.shellNoOutput(' -> '));

  if (errors.length > 1) {
    setFailed(colorizedErrors);
  } else {
    setFailed(c.error(getErrorMessage(err)));
  }
}
