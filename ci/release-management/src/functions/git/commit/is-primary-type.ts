import { SemverDefinitions } from '@/const/semver-definitions';
import { CommitPrimaryAliasType } from '@/model/git/commit/commit-primary-alias-type';

export function isPrimaryType(type: string): type is CommitPrimaryAliasType {
  return SemverDefinitions.some((definition) => definition.id === type);
}
