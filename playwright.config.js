// @ts-check
import { defineConfig, devices } from "@playwright/test";

const reportDir = process.env.REPORT_DIR || "reports/html-report";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  // forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: [["html", { outputFolder: reportDir, open: "never" }]],

use: {
    channel: 'chrome',
    screenshot: "only-on-failure",
    headless: true,
    // trace: "retain-on-failure",
    timeout: 60_000,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
