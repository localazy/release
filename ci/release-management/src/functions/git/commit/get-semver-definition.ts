import { SemverDefinitions } from '@/const/semver-definitions';
import { SemverAliasesType } from '@/model/git/semver/semver-aliases-type';

export function getSemverDefinition(type: SemverAliasesType) {
  return SemverDefinitions.find((definition) => definition.id === type);
}
