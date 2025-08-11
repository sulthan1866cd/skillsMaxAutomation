import { Locator } from "@playwright/test";
import utility from "../utils/utility";

class CreateOrganizationPageObject {
  constructor() {}

  organizationTabButton = (): Locator =>
    utility.getElement('//a//child::p[text()="Organization"]');

  createOrganizationSidebarButton = (): Locator =>
    utility.getElement('//button[text()="Create Organization"]');

  organizationNameField = (): Locator =>
    utility.getElement('//input[@placeholder="Organisation Name"]');

  addressField = (): Locator =>
    utility.getElement('//textarea[@name="address"]');

  selectCountryField = (): Locator =>
    utility.getElement('//input[@id="«r19»"]');

  selectStateField = (): Locator => utility.getElement('//input[@id="«r1c»"]');

  selectCityField = (): Locator => utility.getElement('//input[@id="«r1g»"]');

  pinField = (): Locator =>
    utility.getElement('//input[@placeholder="XXXXXX"]');

  createButton = (): Locator =>
    utility.getElement('//button//child::p[text()="Create"]');
}
export default new CreateOrganizationPageObject();
