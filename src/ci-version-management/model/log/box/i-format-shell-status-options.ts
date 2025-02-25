import { IShellOutputData } from './i-shell-output-data';

export interface IFormatShellStatusOptions {
  exitCode: number;
  out: IShellOutputData[];
  boxWidth: number;
}
