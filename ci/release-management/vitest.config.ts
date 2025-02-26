import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      // '@': resolve(__dirname, 'src'),
      // '@tests': resolve(__dirname, 'tests'),
    },
  },

  test: {
    include: ['tests/unit/**/*.spec.ts'],
    globalSetup: ['tests/unit/support/global-setup.ts'],
    setupFiles: ['tests/unit/support/setup.ts'],
    coverage: {
      include: ['src/**/*.ts'],
      reporter: [...(configDefaults.coverage.reporter ?? []), 'json-summary'],
      reportOnFailure: true,
    },

    /**
     * Unit tests in browser, using Playwright
     */
    browser: {
      enabled: false,
      provider: 'playwright',
      name: 'chromium',
    },
  },
});
