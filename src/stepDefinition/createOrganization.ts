import { Given, Then, When } from "@cucumber/cucumber";
import { getPage } from "../hooks";
import { expect } from "@playwright/test";
import { configDotenv } from "dotenv";
import createOrganization from "../pageActions/createOrganization";
import utility from "../utils/utility";
import randomstring from "randomstring";

configDotenv();

Given("user is in organization tab", async () => {
  await createOrganization.login();
  console.log("redirected to dashboard page");
  await createOrganization.switchToOrganizationTab();
  console.log("user in organization tab");
});

When(
  "user clicks Create Organization button to open create organization side bar",
  async () => {
    await createOrganization.openCreateOrganizationSideBar();
  }
);

When(
  `user didn't fill organization name field and user fills other fields`,
  async () => {
    await createOrganization.fillAddress("23,a st, city,country");
    await createOrganization.selectCountry(0);
    await createOrganization.selectState(2);
    await createOrganization.selectCity(1);
    await createOrganization.fillPin("432156");
    await createOrganization.fillAssessmentTypes({
      apptitude: 1,
      communication: 2,
      coding: 3,
    });
    await createOrganization.checkAssessmentLevels({
      practice: true,
      graded: true,
      interview: true,
    });
  }
);

When("clicked create button", async () => {
  await createOrganization.clickCreateButton();
});

Then("organization name is required message should be shown", async () => {
  await expect(
    utility.getElement('//div[text()="Organisation Name is required"]')
  ).toBeVisible();
});

const organizationName = `Organization_${randomstring.generate({ length: 5 })}`;
When("user fills all the manditory fields", async () => {
  await createOrganization.fillOrganizationName(organizationName);
  await createOrganization.fillAddress("23,a st, city,country");
  await createOrganization.selectCountry(0);
  await createOrganization.selectState(3);
  await createOrganization.selectCity(5);
  await createOrganization.fillPin("432156");
  await createOrganization.checkAssessmentLevels({
    practice: true,
    interview: true,
  });
  await createOrganization.fillAssessmentTypes({
    communication: 2,
    coding: 7,
  });
});

Then("organization name should be visibel on organization table", async () => {
  await expect(
    getPage().getByRole("cell", { name: organizationName })
  ).toBeVisible();
  console.log("created organization successfully");
});
