import { Given, Then, When } from "@cucumber/cucumber";
import { getPage } from "../hooks";
import { expect } from "@playwright/test";
import { configDotenv } from "dotenv";
import createOrganization from "../pageActions/createOrganization";

configDotenv();

Given("user is in organization tab", async () => {
  await createOrganization.login();
  console.log("redirected to login page");
});

When(
  "user clicks Create Organization button to open create organization side bar",
  async () => {
    await getPage()
      .getByRole("button", { name: "Create Organization" })
      .click();
  }
);

When(
  `user didn't fill organization name field and user fills other fields`,
  async () => {
    await getPage()
      .locator(
        "xpath=/html/body/div[2]/div[3]/div[1]/div[2]/div/div[2]/textarea[1]"
      )
      .fill("23,a st, city,country");
    await createOrganization.selectDropdown(
      "Select Country",
      '//*[@id="«r19»-option-0"]'
    );
    await createOrganization.selectDropdown(
      "Select State",
      '//*[@id="«r1c»-option-0"]'
    );
    await createOrganization.selectDropdown(
      "Select City",
      '//*[@id="«r1g»-option-0"]'
    );
    await getPage().getByPlaceholder("XXXXXX").fill("432156");
    await getPage()
      .locator(
        "xpath=/html/body/div[2]/div[3]/div[1]/div[2]/div/div[8]/div/div[1]/span/input"
      )
      .check();
  }
);

When("clicked create button", async () => {
  await getPage().getByRole("button", { name: "Create" }).click();
});

Then("organization name is required message should be shown", async () => {
  expect(getPage().getByText("Organisation Name is required")).toBeVisible();
});

const organizationName = "new org";
When("user fills all the manditory fields", async () => {
  await getPage().getByPlaceholder("Organisation Name").fill(organizationName);
  await getPage()
    .locator(
      "xpath=/html/body/div[2]/div[3]/div[1]/div[2]/div/div[2]/textarea[1]"
    )
    .fill("23,a st, city,country");
  await createOrganization.selectDropdown(
    "Select Country",
    '//*[@id="«r19»-option-0"]'
  );
  await createOrganization.selectDropdown(
    "Select State",
    '//*[@id="«r1c»-option-0"]'
  );
  await createOrganization.selectDropdown(
    "Select City",
    '//*[@id="«r1g»-option-0"]'
  );
  await getPage().getByPlaceholder("XXXXXX").fill("432156");
  await getPage()
    .locator(
      "xpath=/html/body/div[2]/div[3]/div[1]/div[2]/div/div[8]/div/div[1]/span/input"
    )
    .check();
});

Then("organization name should be visibel on organization table", async () => {
  await expect(
    getPage().getByRole("cell", { name: organizationName })
  ).toBeVisible();
  console.log("created organization successfully");
});
