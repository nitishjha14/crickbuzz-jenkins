class ScorecardPage {
  constructor(page) {
    this.page = page;
    this.firstCard = page.locator('.carousal-item').first();
    this.scorecard = page.locator("//a[text()='Scorecard']");
    this.batterRows = page.locator(".scorecard-bat-grid");
  }

  async goto() {
    await this.page.goto('https://www.cricbuzz.com/');
  }

  async clickFirstCard() {
    await this.firstCard.click();
  }

  async clickScorecard() {
    await this.scorecard.click();
  }

  async getBatterRowCount() {
  const count = await this.batterRows.count();
  return count;
  }

  async getBatterRowData(index) {
  const row = this.batterRows.nth(index);
  const columns = row.locator('> .flex');

  const nameText = await columns.nth(0).textContent();
  const name = nameText.split('View match performance')[0].trim();

  const runs = await columns.nth(1).textContent();
  const balls = await columns.nth(2).textContent();
  const fours = await columns.nth(3).textContent();
  const sixes = await columns.nth(4).textContent();
  const sr = await columns.nth(5).textContent();

  return {
    name,
    runs,
    balls,
    fours,
    sixes,
    sr
  };
}

  async getAllBatterData() {
  const count = await this.getBatterRowCount();
  const allData = [];

  for (let i = 1; i < count; i++) {
    const rowData = await this.getBatterRowData(i);
    allData.push(rowData);
  }

  return allData;
}
}

export default ScorecardPage;