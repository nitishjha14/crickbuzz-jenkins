class QuickLaunchComponent {
  constructor(page) {
    this.page = page;
  }

  getTileLocator(tileName) {
    return this.page.locator(`.orangehrm-quick-launch-icon[title="${tileName}"]`);
  }

  async getTileColor(tileName) {
    const tile = this.getTileLocator(tileName);
    return await tile.evaluate((el) => window.getComputedStyle(el).backgroundColor);
  }

  async hoverOverTile(tileName) {
    const tile = this.getTileLocator(tileName);
    await tile.hover();
  }
}

export default QuickLaunchComponent;
