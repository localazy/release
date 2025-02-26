import { formatBoxLine } from '../box/format-box-line';
import { IGetCommitLinesOptions } from '../../../model/log/categorized-commits/i-get-commit-lines-options';
import { c } from '../../../const/theme/c';

export function getCommitLines({ commits }: IGetCommitLinesOptions) {
  const lines = [];

  if (commits.length) {
    commits.forEach((commit) => {
      lines.push(formatBoxLine({ text: commit.message, textColor: c.commitMessage }));
    });
  } else {
    lines.push(formatBoxLine({ text: '( no commits )', textColor: c.shellNoOutput }));
  }

  return lines;
}
