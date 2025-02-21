import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createOctokitInstance } from '../../../src/release-ci/functions/octokit/api/create-octokit-instance';
import { fetchCommitsSinceTag } from '../../../src/release-ci/functions/octokit/api/fetch-commits-since-tag';
import { parseCommitMessage } from '../../../src/release-ci/functions/utils/commit/commit-message/parse-commit-message';

vi.mock('../../../src/release-ci/functions/api/create-octokit-instance');
vi.mock('../../../src/release-ci/utils/commit/commit-message/parse-commit-message');

describe('getCommitsSinceTag', () => {
  const mockOctokit = {
    repos: {
      compareCommits: vi.fn(),
    },
  };

  const mockCommits = [
    {
      sha: '123',
      commit: { message: 'feat: add new feature' },
    },
    {
      sha: '456',
      commit: { message: 'fix: bug fix' },
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(createOctokitInstance).mockReturnValue(mockOctokit);

    mockOctokit.repos.compareCommits.mockResolvedValue({
      data: { commits: mockCommits },
    });

    vi.mocked(parseCommitMessage).mockImplementation((commit) => ({ parsed: commit.commit.message }));
  });

  it('should return parsed commits from GitHub API', async () => {
    const result = await fetchCommitsSinceTag({
      owner: 'test-owner',
      repo: 'test-repo',
      branch: 'main',
      latestTag: { name: 'v1.0.0' },
    });

    expect(mockOctokit.repos.compareCommits).toHaveBeenCalledWith({
      owner: 'test-owner',
      repo: 'test-repo',
      base: 'v1.0.0',
      head: 'main',
    });

    expect(result).toEqual([
      { ...mockCommits[0], parsedMessage: { parsed: 'feat: add new feature' } },
      { ...mockCommits[1], parsedMessage: { parsed: 'fix: bug fix' } },
    ]);
  });

  it('should return an empty array when API call fails', async () => {
    mockOctokit.repos.compareCommits.mockRejectedValue(new Error('GitHub API error'));

    const result = await fetchCommitsSinceTag({
      owner: 'test-owner',
      repo: 'test-repo',
      branch: 'main',
      latestTag: { name: 'v1.0.0' },
    });

    expect(result).toEqual([]);
  });
});
