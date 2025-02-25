export const config = {
  package: {
    name: 'release-ci',
    version: '0.0.1',
  },
  commits: [
    {
      sha: '123',
      commit: { message: 'feat: add new feature' },
    },
    {
      sha: '456',
      commit: { message: 'fix: bug fix' },
    },
  ],
};
