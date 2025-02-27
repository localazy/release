import { setFailed } from '@actions/core';
import { IHandleExceptionOptions } from '@/model/utils/error/i-handle-exception-options';
import { getErrorMessage } from '@/functions/utils/error/get-error-message';

export function handleException({ err }: IHandleExceptionOptions) {
  console.error(err);

  const chain = collectErrorChain(err).reverse();
  if (chain.length > 1) {
    setFailed(`Error chain: ${chain.join(' -> ')}`);
  } else {
    setFailed(getErrorMessage(err));
  }
}
