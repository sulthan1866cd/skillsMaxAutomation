import { Given, Then, When } from "@cucumber/cucumber";
import utility from "../utils/utility";
import createUserPageAction from "../pageActions/createUser";
import { expect } from "@playwright/test";

//give email as in asserts/user.csv"
const emails: string[] = ["sul+7@example.com","sul+8@example.com"];
const orgName: string = "!";
const csvFilePath: string = "asserts/user.csv";
const csvWithDuplicateEmailPath: string = "asserts/csv-with-dup-emails.csv";

Given("user is in User tab", async () => {
  await utility.login();
  console.log("redirected to dashboard page");
  await createUserPageAction.switchToUserTab();
  console.log("user in user tab");
});

When(
  "user clicks Create User button to open create User side bar",
  async () => {
    await createUserPageAction.openCreateUsersSidebar();
  }
);
When("user clicks create bulk user and clicks next button", async () => {
  await createUserPageAction.selectBulkUsers();
  await createUserPageAction.clickNextButtom();
});

When(
  "user selects organization and uploads user details and clicks next",
  async () => {
    await createUserPageAction.selectOrganizationName(orgName);
    await createUserPageAction.uploadUserDetails(csvFilePath);
    await createUserPageAction.clickNextButtom();
  }
);
When(
  "user selects organization and uploads user details with duplicate emails and clicks next",
  async () => {
    await createUserPageAction.selectOrganizationName(orgName);
    await createUserPageAction.uploadUserDetails(csvWithDuplicateEmailPath);
    await createUserPageAction.clickNextButtom();
  }
);

When("{string} and clicks next", async (action: string) => {
  console.log(action);
  await createUserPageAction.clickNextButtom();
});

When("user clicks Confirm & Create button", async () => {
  await createUserPageAction.clickConfirmAndCreate();
});
Then("user should be added to users list", async () => {
  for (const email of emails) {
    await createUserPageAction.searchUsers(email);
    const usernameListElemnt = utility.getElement(`//td[text()="${email}"]`);
    await usernameListElemnt.waitFor({ state: "visible" });
    await expect(usernameListElemnt).toBeVisible();
  }
});

Then(
  "{string} message should be shown -createUser",
  async (message: string) => {
    await expect(utility.getElement(`//p[text()="${message}"]`)).toBeVisible();
  }
);

Then("Next button should be disabled", async () => {
  await expect(
    utility.getElement('//button//child::p[text()="Next"]')
  ).toBeDisabled();
});
