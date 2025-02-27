// import { beforeAll } from 'vitest';

process.env.GITHUB_REPOSITORY = 'test-owner/test-repo';
process.env.GITHUB_REF = 'refs/heads/main';
process.env.GITHUB_EVENT_NAME = 'push';

// beforeAll((): void => {});
