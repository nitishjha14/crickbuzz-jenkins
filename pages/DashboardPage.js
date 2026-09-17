import SidebarComponent from "./SidebarComponent.js";
import QuickLaunchComponent from "./QuickLaunchComponent.js";

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.sidebar = new SidebarComponent(page);
    this.quickLaunch = new QuickLaunchComponent(page);
  }
}
export default DashboardPage;
