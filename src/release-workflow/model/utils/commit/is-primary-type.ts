import { commitDefinitions } from '../../../const/commit-definitions';
import { PrimaryCommitType } from './primary-commit-type';

export function isPrimaryType(type: string): type is PrimaryCommitType {
  return commitDefinitions.some((commit) => commit.id === type);
}
