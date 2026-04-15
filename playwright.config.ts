import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['functional/**/*.spec.ts', 'boundary/**/*.spec.ts', 'persistence/**/*.spec.ts', 'smoke/**/*.spec.ts'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'test-results/html-report', open: 'never' }], ['list']],
  outputDir: 'test-results/artifacts',
  use: {
    baseURL: 'https://todomvc.com/examples/emberjs/todomvc/dist/',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
