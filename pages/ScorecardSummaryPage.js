class ScorecardPage {
  constructor(page) {
    this.page = page;
    this.firstCard = page.locator('.carousal-item').first();
    this.scorecard = page.locator("//a[text()='Scorecard']");
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

  async getMatchName() {
    const nameSpan = this.firstCard.locator('a > div > span');
    const rawNameText = await nameSpan.textContent();
    const matchName = rawNameText.trim();
    return matchName;
  }

  async getFirstCardScores() {
    const teamLocator1 = this.firstCard.locator('a > div:nth-child(2) > div:nth-child(1) > div > .hidden');
    const scoreLocator1 = this.firstCard.locator('a > div:nth-child(2) > div:nth-child(1) > span');
    const teamLocator2 = this.firstCard.locator('a > div:nth-child(2) > div:nth-child(2) > div > .hidden');
    const scoreLocator2 = this.firstCard.locator('a > div:nth-child(2) > div:nth-child(2) > span');

    const team1 = await teamLocator1.textContent();
    const score1 = await scoreLocator1.textContent();
    const team2 = await teamLocator2.textContent();
    const score2 = await scoreLocator2.textContent();

    return [ 
        {team: team1, score: score1 },
        {team: team2, score: score2 }
    ]
  }

  async getAllScoreCards(index) {
    const card = this.page.locator('.carousal-item').nth(index);
    const teamLocator1 = card.locator('a > div:nth-child(2) > div:nth-child(1) > div > .hidden');
    const scoreLocator1 = card.locator('a > div:nth-child(2) > div:nth-child(1) > span');
    const teamLocator2 = card.locator('a > div:nth-child(2) > div:nth-child(2) > div > .hidden');
    const scoreLocator2 = card.locator('a > div:nth-child(2) > div:nth-child(2) > span');

    const team1 = await teamLocator1.textContent();
    const score1 = await scoreLocator1.textContent();
    const team2 = await teamLocator2.textContent();
    const score2 = await scoreLocator2.textContent();

    return [ 
        {team: team1, score: score1 },
        {team: team2, score: score2 }
    ]
  }

  async getCardCount() {
  const count = await this.page.locator('.carousal-item').count();
  return count;
}

  
}



export default ScorecardPage;