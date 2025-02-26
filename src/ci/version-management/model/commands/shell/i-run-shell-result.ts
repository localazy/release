import { IShellOutputData } from '../../log/box/i-shell-output-data';

export interface IRunShellResult {
  out: IShellOutputData[];
  value: string;
  exitCode: number;
}
