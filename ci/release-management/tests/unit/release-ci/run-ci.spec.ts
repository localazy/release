import { increasePrereleaseCommand } from '@/functions/commands/increase-prerelease-command';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { versionManagementAction } from '@/version-management-action';

describe('getCommitsSinceTag', () => {
  beforeEach(() => {});

  it('should return parsed commits from GitHub API', async () => {
    vi.restoreAllMocks();

    vi.mock('@/functions/git/git-get-commits', () => ({
      gitGetCommits: async () => {
        return [];
      },
    }));

    vi.mock('@/functions/utils/package-json/read-package-json', () => ({
      readPackageJson: async () => {
        return {
          name: '@localazy/test-package',
          version: '1.2.3',
        };
      },
    }));

    vi.mock('@/functions/commands/patch-increase-command', () => ({
      patchIncreaseCommand: async () => {
        return '1.2.4';
      },
    }));

    vi.mock('@/functions/commands/minor-increase-command', () => ({
      minorIncreaseCommand: async () => {
        return '1.3.0';
      },
    }));

    vi.mock('@/functions/commands/major-increase-command', () => ({
      majorIncreaseCommand: async () => {
        return '2.0.0';
      },
    }));

    vi.mock('@/functions/commands/add-and-commit-changes-command', () => ({
      addAndCommitChangesCommand: async () => {},
    }));

    vi.mock('@/functions/commands/increase-prerelease-command', () => ({
      increasePrereleaseCommand: async () => {
        return '2.0.0-beta.1';
      },
    }));

    vi.mock('@/functions/commands/publish-prerelease-command', () => ({
      publishPrereleaseCommand: async () => {
        return '2.0.0';
      },
    }));

    vi.mock('@/functions/commands/start-prerelease-command', () => ({
      startPrereleaseCommand: async () => {
        return '2.0.0-beta.0';
      },
    }));

    await versionManagementAction();

    expect(true).toBe(false);
  });
});
