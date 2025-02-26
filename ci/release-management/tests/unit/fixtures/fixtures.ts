import { createGithubCommit } from '@/functions/github/create-github-commit';
import { createGithubTag } from '@/functions/github/create-github-tag';

export const fixtures = {
  patch: {
    commits: [
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'fix: fix a bug',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
    ].map(createGithubCommit),
    latestTag: createGithubTag({ name: '1.2.3' }),
    packageJson: {
      version: '1.2.3',
      name: '@localazy/package',
    },
  },
  minor: {
    commits: [
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'feat: add a feature',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
    ].map(createGithubCommit),
    latestTag: createGithubTag({ name: '1.2.3' }),
    packageJson: {
      version: '1.2.3',
      name: '@localazy/package',
    },
  },
  major: {
    commits: [
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'breaking: breaking change',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
    ].map(createGithubCommit),
    latestTag: createGithubTag({ name: '1.2.3' }),
    packageJson: {
      version: '1.2.3',
      name: '@localazy/package',
    },
  },
  startPatchPreRelease: {
    commits: [
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'prerelease: start patch prerelease',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'fix: fix a bug',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
    ].map(createGithubCommit),
    latestTag: createGithubTag({ name: '1.2.3' }),
    packageJson: {
      version: '1.2.3',
      name: '@localazy/package',
    },
  },
  startMinorPreRelease: {
    commits: [
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'prerelease: start minor prerelease',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'feat: add a feature',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
    ].map(createGithubCommit),
    latestTag: createGithubTag({ name: '1.2.3' }),
    packageJson: {
      version: '1.2.3',
      name: '@localazy/package',
    },
  },
  startMajorPreRelease: {
    commits: [
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'prerelease: start major prerelease',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'breaking: breaking change',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
    ].map(createGithubCommit),
    latestTag: createGithubTag({ name: '1.2.3' }),
    packageJson: {
      version: '1.2.3',
      name: '@localazy/package',
    },
  },
  increasePrereleaseVersion: {
    commits: [
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'fix: fix a bug',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
    ].map(createGithubCommit),
    latestTag: createGithubTag({ name: '1.2.3-beta.0' }),
    packageJson: {
      version: '1.2.3-beta.0',
      name: '@localazy/package',
    },
  },
  publishPatchPrerelease: {
    commits: [
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'prerelease: publish prerelease',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
    ].map(createGithubCommit),
    latestTag: createGithubTag({ name: '1.2.4-beta.0' }),
    packageJson: {
      version: '1.2.4-beta.0',
      name: '@localazy/package',
    },
  },
  publishMinorPrerelease: {
    commits: [
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'prerelease: publish prerelease',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
    ].map(createGithubCommit),
    latestTag: createGithubTag({ name: '1.3.0-beta.0' }),
    packageJson: {
      version: '1.3.0-beta.0',
      name: '@localazy/package',
    },
  },
  publishMajorPrerelease: {
    commits: [
      {
        sha: 'f809538d641e1fcf093ac5befd564d24748b4dd2',
        message: 'prerelease: publish prerelease',
        url: 'https://api.github.com/repos/localazy/test-repo/commits/f809538d641e1fcf093ac5befd564d24748b4dd2',
      },
    ].map(createGithubCommit),
    latestTag: createGithubTag({ name: '2.0.0-beta.0' }),
    packageJson: {
      version: '2.0.0-beta.0',
      name: '@localazy/package',
    },
  },
};
