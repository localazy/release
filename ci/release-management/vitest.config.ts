import { resolve } from 'node:path';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
      '@tests': resolve(import.meta.dirname, 'tests'),
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
