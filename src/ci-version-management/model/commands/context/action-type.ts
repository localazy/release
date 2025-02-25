import { VersionChange } from '../../../const/version-change';

export type ActionType = (typeof VersionChange)[keyof typeof VersionChange];
