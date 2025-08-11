import { Locator } from "@playwright/test";
import utility from "../utils/utility";

class CreateUserPageObject {
    constructor(){}
    
  userTabButton = (): Locator =>
    utility.getElement('//a//child::p[text()="User"]');

  createUsersSidebarButton = (): Locator =>
    utility.getElement('//button[text()="Create User"]');

  selectSingleUserButton = (): Locator =>
    utility.getElement('//input[@type="radio" and @value="single-user"]');

  selectBulkUsersButton = (): Locator =>
    utility.getElement('//input[@type="radio" and @value="bulk-user"]');

  nextButton = (): Locator =>
    utility.getElement('//button//child::p[text()="Next"]');

  selectOrganization = (): Locator =>
    utility.getElement('//input[@id="organization-select"]');

  fileUploadInput = (): Locator => utility.getElement('//input[@type="file"]');

  confirmAndCreateButton = (): Locator =>
    utility.getElement('//button//child::p[text()="Confirm & Create"]');

  searchBar = (): Locator =>
    utility.getElement('//input[@placeholder="Search User"]');
}

export default new CreateUserPageObject();
