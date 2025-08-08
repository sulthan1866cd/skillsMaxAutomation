import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import loginPageAction from "../pageActions/login";

import { configDotenv } from "dotenv";
import utility from "../utils/utility";
configDotenv();

Given("user is in login page", async () => {
  await loginPageAction.gotoLoginPage();
  console.log("user is in login page");
});
When("user enters correct email id", async () => {
  await loginPageAction.fillEmail(process.env.MY_MAIL);
});
When("user enters correct password for the email id", async () => {
  await loginPageAction.fillPassword(process.env.MY_PASSWORD);
});
When("user clicks login button", async () => {
  await loginPageAction.clickLoginButton();
});
Then("user should be redirected to dashboard page", async () => {
  await expect(utility.getElement('//p[text()="dashboard"]')).toBeVisible({
    timeout: 30000,
  });
  console.log("user is redirected to dashboard");
});

When("user enters email id", async () => {
  await loginPageAction.fillEmail("sulthan.@mail.com");
});

When("user enters wrong password", async () => {
  await loginPageAction.fillPassword("password");
});

Then('"Incorrect email or password" message should be shown', async () => {
  await expect(
    utility.getElement('//p[text()="Incorrect email or password"]')
  ).toBeVisible();
});
