import {
  After,
  AfterAll,
  BeforeAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";

import { chromium, Browser, Page } from "@playwright/test";
import randomstring from "randomstring";

setDefaultTimeout(60 * 1000);
let page: Page;
let browser: Browser;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-extensions"],
  });

  page = await browser.newPage();

  await page.setViewportSize({ width: 1500, height: 720 });
});

After(async ({ error, result, pickle }) => {
  if (error || result.status === "FAILED") {
    console.log(error);
    await page.screenshot({
      path: `test-results/screenshots/${
        pickle.name
      }_${randomstring.generate()}.png`,
    });
  }
});

AfterAll(async () => {
  await browser.close();
});

export const getPage = () => {
  return page;
};
