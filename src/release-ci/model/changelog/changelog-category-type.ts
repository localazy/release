import { SemverDefinitionType } from '../git/semver/semver-definition-type';

export type ChangelogCategoryType = Exclude<SemverDefinitionType['changelog'], 'none'>['category'];
