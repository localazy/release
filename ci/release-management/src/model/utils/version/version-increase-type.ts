import { SemverDefinitionType } from '@/model/git/semver/semver-definition-type';

export type VersionIncreaseType = Extract<SemverDefinitionType['versionIncrease'], 'patch' | 'minor' | 'major'>;
