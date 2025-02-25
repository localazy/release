import { SemverDefinitions } from '../../../const/semver-definitions';
import { CommitPrimaryAliasType } from '../../../model/git/commit/commit-primary-alias-type';
import { SemverAliasesType } from '../../../model/git/semver/semver-aliases-type';

export function getPrimaryType(type: SemverAliasesType): CommitPrimaryAliasType {
  const definition = SemverDefinitions.find((definition) => definition.aliases.some((alias) => alias === type));
  if (!definition) {
    throw new Error(`Invalid commit type: ${type}`);
  }

  return definition.aliases[0];
}
