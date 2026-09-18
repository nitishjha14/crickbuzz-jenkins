import { test, expect } from '@playwright/test';
import ScorecardPage from '../pages/ScorecardSummaryPage';

test.describe("Fetching scorecard's on crickbuzz", () => {
    
test('print match name of first card', async ({ page }) => {
  const scorecardPage = new ScorecardPage(page);
  await scorecardPage.goto();

  const matchName = await scorecardPage.getMatchName();
  console.log(matchName);

  const scores = await scorecardPage.getFirstCardScores();
  console.log(`${scores[0].team} - ${scores[0].score}`);
  console.log(`${scores[1].team} - ${scores[1].score}`);
});

test('print all score cards at once', async({page}) => {
    const scoreCardPage = new ScorecardPage(page);
    await scoreCardPage.goto();
    
    const cardCount = await scoreCardPage.getCardCount();

    for(let i=0; i < cardCount; i++) {
        const scores = await scoreCardPage.getAllScoreCards(i);
        console.log(
              scores[0].score
                ? `${scores[0].team} - ${scores[0].score}`
                : scores[0].team
            
        );
        console.log(
              scores[1].score
                ? `${scores[1].team} - ${scores[1].score}`
                : scores[1].team
            );
            }
        });
    })