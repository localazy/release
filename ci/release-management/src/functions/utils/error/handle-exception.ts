import { setFailed } from '@actions/core';
import { IHandleExceptionOptions } from '@/model/utils/error/i-handle-exception-options';
import { getErrorMessage } from '@/functions/utils/error/get-error-message';

export function handleException({ err }: IHandleExceptionOptions) {
  console.error(err);
  setFailed(getErrorMessage(err));
}
