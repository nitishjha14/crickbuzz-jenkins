import {test, expect} from "@playwright/test";

test("Randomly visiting sites", async({page}) => {
    page.goto("https://amazon.in/");
});