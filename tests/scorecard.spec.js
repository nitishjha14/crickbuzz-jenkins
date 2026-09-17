import { test } from '@playwright/test';
import ScorecardPage from '../pages/ScorecardPage.js';

test('print all batter scores from Cricbuzz scorecard', async ({ page }) => {
  const scorecardPage = new ScorecardPage(page);

  await scorecardPage.goto();
  await scorecardPage.clickFirstCard();
  await scorecardPage.clickScorecard();

  const allData = await scorecardPage.getAllBatterData();
  console.table(allData);
});

