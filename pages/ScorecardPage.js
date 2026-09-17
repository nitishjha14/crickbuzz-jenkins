class ScorecardPage {
  constructor(page) {
    this.page = page;
    this.firstCard = page.locator('.carousal-item').first();
    this.scorecard = page.locator("//a[text()='Scorecard']");
    this.batterRows = page.locator("#scard-team-5-innings-2 > div:nth-child(1) > .text-xs > .scorecard-bat-grid");
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
  const [name, runs, balls, fours, sixes, sr] = await columns.allTextContents();
  return { name, runs, balls, fours, sixes, sr };
  }

  async getAllBatterData() {
    const count = await this.getBatterRowCount();
    const allData = [];
  
    for (let i = 0; i < count; i++) {
      const rowData = await this.getBatterRowData(i);
      allData.push(rowData);
    }
    return allData;
  }
}

export default ScorecardPage;