import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import DashboardPage from "../pages/DashboardPage.js";

test.describe("Dashboard verification", () => {
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("Admin", "admin123");
    dashboardPage = new DashboardPage(page);
    await expect(page.locator(".oxd-main-menu > li").first()).toBeVisible();

  });

  test("@@sidebar contain all expected menu items", async () => {
    const expectedMenuItems = [
      "Admin",
      "PIM",
      "Leave",
      "Time",
      "Recruitment",
      "My Info",
      "Performance",
      "Dashboard",
      "Directory",
      "Maintenance",
      "Claim",
      "Buzz",
    ];

    const actualMenuItems = await dashboardPage.sidebar.getAllItems();
    const trimmedItems = actualMenuItems.map((item) => item.trim());

    expect(trimmedItems).toEqual(expectedMenuItems);
  });

  test("@@hover1 Assign Leave tile changes color on hover", async () => {
    const before = await dashboardPage.quickLaunch.getTileColor("Assign Leave");
    await dashboardPage.quickLaunch.hoverOverTile("Assign Leave");
    const after = await dashboardPage.quickLaunch.getTileColor("Assign Leave");

    expect(after).not.toBe(before);
  });

  test("@@hover2: Leave List tile changes color on hover", async () => {
    const before = await dashboardPage.quickLaunch.getTileColor("Leave List");
    await dashboardPage.quickLaunch.hoverOverTile("Leave List");
    const after = await dashboardPage.quickLaunch.getTileColor("Leave List");

    expect(after).not.toBe(before);
  });

  test("@@hover3: Timesheets tile changes color on hover", async () => {
    const before = await dashboardPage.quickLaunch.getTileColor("Timesheets");
    await dashboardPage.quickLaunch.hoverOverTile("Timesheets");
    const after = await dashboardPage.quickLaunch.getTileColor("Timesheets");

    expect(after).not.toBe(before);
  });

  test("@@hover4: Apply Leave tile changes color on hover", async () => {
    const before = await dashboardPage.quickLaunch.getTileColor("Apply Leave");
    await dashboardPage.quickLaunch.hoverOverTile("Apply Leave");
    const after = await dashboardPage.quickLaunch.getTileColor("Apply Leave");

    expect(after).not.toBe(before);
  });

  test("@@hover5: My Leave tile changes color on hover", async () => {
    const before = await dashboardPage.quickLaunch.getTileColor("My Leave");
    await dashboardPage.quickLaunch.hoverOverTile("My Leave");
    const after = await dashboardPage.quickLaunch.getTileColor("My Leave");

    expect(after).not.toBe(before);
  });

  test("@@hover6: My Timesheet tile changes color on hover", async () => {
    const before = await dashboardPage.quickLaunch.getTileColor("My Timesheet");
    await dashboardPage.quickLaunch.hoverOverTile("My Timesheet");
    const after = await dashboardPage.quickLaunch.getTileColor("My Timesheet");

    expect(after).not.toBe(before);
  });
});
