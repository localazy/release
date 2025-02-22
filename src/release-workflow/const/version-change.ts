export const VersionChange = {
  // Prepare release
  PATCH_INCREASE: 'patch-increase',
  MINOR_INCREASE: 'minor-increase',
  MAJOR_INCREASE: 'major-increase',

  // Handle pre-release
  START_PRERELEASE: 'start-prerelease',
  INCREASE_PRERELEASE: 'increase-prerelease',
  END_PRERELEASE: 'end-prerelease',
} as const;
