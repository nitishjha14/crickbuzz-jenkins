import {test ,expect } from "playwright/test";
import LoginPage from "../pages/LoginPage.js";
import DashboardPage from "../pages/DashboardPage.js";


test.describe("Sidebar chevron toggle", () => {
    let dashboardPage;

    test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("Admin", "admin123");
    dashboardPage = new DashboardPage(page);
    await expect(page.locator(".oxd-main-menu > li").first()).toBeVisible();
  });

  test('should collapse and expand sidebar via chevron', async () => {
    expect(await dashboardPage.sidebar.isSidebarExpanded()).toBe(true);

    await dashboardPage.sidebar.toggleSidebar();
    expect(await dashboardPage.sidebar.isSidebarCollapsed()).toBe(true);

    await dashboardPage.sidebar.toggleSidebar();
    expect(await dashboardPage.sidebar.isSidebarExpanded()).toBe(true);
  });

  test("Locating dropdown", async ({page}) => {
    await page.goto("https://www.google.com");
    await page.locator('[title="Search"]').fill("Selenium");
    // Selenium python
    
    const listBox = await page.locator('[role="listbox"]>li>div>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>span')
    await listBox.nth(1).waitFor({ state: 'visible', timeout: 60000 });
    const listSize = listBox.count();
    console.log(listSize);
    const printAllItems = listBox.allTextContents();
    console.log(printAllItems);
});

});