class ScorecardPage {
  constructor(page) {
    this.page = page;
    this.firstCard = page.locator('.carousal-item').first();
    this.scorecard = page.locator("//a[text()='Scorecard']");
  }

  async goto() {
    await this.page.goto('https://www.cricbuzz.com/', {
      waitUntil: 'domcontentloaded'
    });
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
    const teamLocator1 = this.firstCard.locator(
      'a > div:nth-child(2) > div:nth-child(1)'
    );

    const teamLocator2 = this.firstCard.locator(
      'a > div:nth-child(2) > div:nth-child(2)'
    );

    const team1Texts = await teamLocator1.locator('span').allTextContents();
    const team2Texts = await teamLocator2.locator('span').allTextContents();

    const team1 = team1Texts[0].trim();
    const team2 = team2Texts[0].trim();

    const score1 = team1Texts.find(text => /\d/.test(text))?.trim() || '';
    const score2 = team2Texts.find(text => /\d/.test(text))?.trim() || '';

    return [
      { team: team1, score: score1 },
      { team: team2, score: score2 }
    ];
  }

  async getAllScoreCards(index) {
    const card = this.page.locator('.carousal-item').nth(index);

    const teamContainer1 = card.locator(
      'a > div:nth-child(2) > div:nth-child(1)'
    );

    const teamContainer2 = card.locator(
      'a > div:nth-child(2) > div:nth-child(2)'
    );

    const team1Texts = await teamContainer1.locator('span').allTextContents();
    const team2Texts = await teamContainer2.locator('span').allTextContents();

    const team1 = team1Texts[0]?.trim() || '';
    const team2 = team2Texts[0]?.trim() || '';

    const score1 = team1Texts.find(text => /\d/.test(text))?.trim() || '';
    const score2 = team2Texts.find(text => /\d/.test(text))?.trim() || '';

    return [
      {
        team: team1,
        score: score1
      },
      {
        team: team2,
        score: score2
      }
    ];
  }

  async getCardCount() {
    const count = await this.page.locator('.carousal-item').count();

    return count;
  }
}

export default ScorecardPage;