import { describe } from 'vitest';

describe('getCommitsSinceTag', () => {
  // const mockOctokit = {
  //   repos: {
  //     compareCommits: vi.fn(),
  //   },
  // };
  //
  // const mockCommits = [
  //   {
  //     sha: '123',
  //     commit: { message: 'feat: add new feature' },
  //   },
  //   {
  //     sha: '456',
  //     commit: { message: 'fix: bug fix' },
  //   },
  // ];
  //
  // beforeEach(() => {
  //   vi.clearAllMocks();
  //   vi.mocked(createOctokitInstance).mockReturnValue(mockOctokit);
  //
  //   mockOctokit.repos.compareCommits.mockResolvedValue({
  //     data: { commits: mockCommits },
  //   });
  //
  //   vi.mocked(parseRawCommitMessage).mockImplementation((commit) => ({ parsed: commit.commit.message }));
  // });
  //
  // it('should return parsed commits from GitHub API', async () => {
  //   const result = await fetchCommitsSinceTag({
  //     owner: 'test-owner',
  //     repo: 'test-repo',
  //     branch: 'main',
  //     latestTag: { name: 'v1.0.0' },
  //   });
  //
  //   expect(mockOctokit.repos.compareCommits).toHaveBeenCalledWith({
  //     owner: 'test-owner',
  //     repo: 'test-repo',
  //     base: 'v1.0.0',
  //     head: 'main',
  //   });
  //
  //   expect(result).toEqual([
  //     { ...mockCommits[0], parsedMessage: { parsed: 'feat: add new feature' } },
  //     { ...mockCommits[1], parsedMessage: { parsed: 'fix: bug fix' } },
  //   ]);
  // });
});
