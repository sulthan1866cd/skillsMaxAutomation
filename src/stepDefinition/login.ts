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
  const dashboardLink = utility.getElement('//p[text()="dashboard"]');
  await dashboardLink.waitFor({ state: "visible" });
  await expect(dashboardLink).toBeVisible();
  console.log("user is redirected to dashboard");
});

When(
  "user enters {string} in {string} field",
  async (value: string, field: "Email" | "Password") => {
    if (field === "Email") {
      await loginPageAction.fillEmail(value);
    } else if (field === "Password") {
      await loginPageAction.fillPassword(value);
    }
  }
);

Then("{string} message should be shown", async (message: string) => {
  await expect(utility.getElement(`//p[text()="${message}"]`)).toBeVisible();
});
