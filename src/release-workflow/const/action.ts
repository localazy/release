export const Action = {
  PATCH_INCREASE: 'patch-increase',
  MINOR_INCREASE: 'minor-increase',
  MAJOR_INCREASE: 'major-increase',
  START_PRERELEASE: 'start-prerelease',
  INCREASE_PRERELEASE: 'increase-prerelease',
  PUBLISH_PRERELEASE: 'publish-prerelease',
} as const;

export type ActionType = (typeof Action)[keyof typeof Action];
