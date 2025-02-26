import { IShellOutputData } from '@/model/log/box/i-shell-output-data';

export interface IFormatShellStatusOptions {
  exitCode: number;
  out: IShellOutputData[];
  boxWidth: number;
}
