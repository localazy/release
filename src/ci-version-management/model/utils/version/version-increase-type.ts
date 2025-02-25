import { SemverDefinitionType } from '../../git/semver/semver-definition-type';

export type VersionIncreaseType = Extract<SemverDefinitionType['versionIncrease'], 'patch' | 'minor' | 'major'>;
