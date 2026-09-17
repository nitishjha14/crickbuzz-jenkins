// @ts-check
import { defineConfig, devices } from "@playwright/test";

const reportDir = process.env.REPORT_DIR || "reports/html-report";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { outputFolder: reportDir, open: "never" }]],

  use: {
    baseURL: "https://opensource-demo.orangehrmlive.com",
    screenshot: "only-on-failure",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
