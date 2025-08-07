import { AfterAll, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";

import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
setDefaultTimeout(30000);
let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-extensions"],
  });

  context = await browser.newContext();

  page = await browser.newPage();

  await page.setViewportSize({ width: 1500, height: 720 });
});

// AfterAll(async () => {
//   await context.close();

//   await browser.close();
// });

export const getPage = () => {
  return page;
};
