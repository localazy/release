import { SemverDefinitions } from '../../../const/semver-definitions';
import { SemverAliasesType } from '../../../model/git/semver/semver-aliases-type';

export function isAlias(type: string): type is SemverAliasesType {
  return SemverDefinitions.some((definition) => definition.aliases.some((alias) => alias === type));
}
