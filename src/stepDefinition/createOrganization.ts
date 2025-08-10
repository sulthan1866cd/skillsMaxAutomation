import { Given, Then, When } from "@cucumber/cucumber";
import { getPage } from "../hooks";
import { expect } from "@playwright/test";
import { configDotenv } from "dotenv";
import createOrganization from "../pageActions/createOrganization";
import utility from "../utils/utility";
import randomstring from "randomstring";
import assesmentLevels from "../interface/assesmentLevels.interface";
import assessmentTypes from "../interface/assesmentTypes.interface";

configDotenv();
const organizationName: string = `Organization_${randomstring.generate({
  length: 5,
})}`;
const address: string = `Address_${randomstring.generate({ length: 5 })}`;
const countryIndex: number = 0;
const stateIndex: number = 3;
const cityIndex: number = 5;
const assesmentTypes: assessmentTypes = {
  apptitude: 1,
  communication: 2,
  coding: 3,
};
const assesmentLevels: assesmentLevels = {
  practice: true,
  interview: true,
};

const pin: string = randomstring.generate({ charset: "numeric", length: 6 });

Given("user is in organization tab", async () => {
  await utility.login();
  console.log("redirected to dashboard page");
  await createOrganization.switchToOrganizationTab();
  console.log("user in organization tab");
});

When(
  "user clicks Create Organization button to open create organization side bar",
  async () => {
    await createOrganization.openCreateOrganizationSideBar();
    console.log("in create organization sidebar");
  }
);

When(
  "user didn't fill {string} field and user fills other fields",
  async (
    field:
      | "Organisation Name"
      | "Address"
      | "Country"
      | "State"
      | "Pin Code"
      | "City"
  ) => {
    if (field !== "Organisation Name")
      await createOrganization.fillOrganizationName(organizationName);
    if (field !== "Address") await createOrganization.fillAddress(address);
    if (field !== "Country")
      await createOrganization.selectCountry(countryIndex);
    if (field !== "Country" && field !== "State")
      await createOrganization.selectState(stateIndex);
    if (field !== "Country" && field !== "State" && field !== "City")
      await createOrganization.selectCity(cityIndex);
    if (field !== "Pin Code") await createOrganization.fillPin(pin);
    await createOrganization.fillAssessmentTypes(assesmentTypes);
    await createOrganization.checkAssessmentLevels(assesmentLevels);
  }
);

When("user clicks create button", async () => {
  await createOrganization.clickCreateButton();
});

Then("{string} message should be shown -createOrg", async (message: string) => {
  await expect(utility.getElement(`//div[text()="${message}"]`)).toBeVisible();
});

When("user fills all the manditory fields", async () => {
  await createOrganization.fillOrganizationName(organizationName);
  await createOrganization.fillAddress(address);
  await createOrganization.selectCountry(countryIndex);
  await createOrganization.selectState(stateIndex);
  await createOrganization.selectCity(cityIndex);
  await createOrganization.fillPin(pin);
  await createOrganization.fillAssessmentTypes(assesmentTypes);
  await createOrganization.checkAssessmentLevels(assesmentLevels);
});

When(
  "user check any Assessment Level checkbox and user fills other fields",
  async () => {
    await createOrganization.fillOrganizationName(organizationName);
    await createOrganization.fillAddress(address);
    await createOrganization.selectCountry(countryIndex);
    await createOrganization.selectState(stateIndex);
    await createOrganization.selectCity(cityIndex);
    await createOrganization.fillPin(pin);
    await createOrganization.fillAssessmentTypes(assesmentTypes);
  }
);

Then("organization name should be visibel on organization table", async () => {
  await expect(
    getPage().getByRole("cell", { name: organizationName })
  ).toBeVisible();
  console.log("created organization successfully");
});
