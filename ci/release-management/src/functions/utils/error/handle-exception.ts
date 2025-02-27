import { c } from '@/const/theme/c';
import { collectErrorChain } from '@/functions/utils/error/collect-error-chain';
import { setFailed } from '@actions/core';
import { IHandleExceptionOptions } from '@/model/utils/error/i-handle-exception-options';
import { getErrorMessage } from '@/functions/utils/error/get-error-message';

export function handleException({ err }: IHandleExceptionOptions) {
  console.error(err);

  const chain = collectErrorChain(err);
  if (chain.length > 1) {
    setFailed(`Errors chain:\n${chain.join(c.shellNoOutput(' -> '))}`);
  } else {
    setFailed(getErrorMessage(err));
  }
}
