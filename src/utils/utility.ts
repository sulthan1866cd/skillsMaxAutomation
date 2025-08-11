import { Locator } from "@playwright/test";
import { getPage } from "../hooks";

class Utility {
  constructor() {}
  login = async () => {
    await this.goToURL("https://sandbox.skillsmax.ai/");

    await this.fillText('//input[@placeholder="Email"]', process.env.MY_MAIL);
    await this.fillText(
      '//input[@placeholder="Password"]',
      process.env.MY_PASSWORD
    );
    await this.click('//button[text()="Login"]');
  };

  goToURL = async (url: string) => {
    await getPage().goto(url, { waitUntil: "domcontentloaded" });
  };

  getElement = (xPath: string): Locator => {
    return getPage().locator(xPath);
  };

  selectDropdown = async (
    select: string | Locator,
    option: string | Locator
  ) => {
    const selectElement =
      typeof select === "string" ? getPage().locator(select) : select;

    const optionElement =
      typeof option === "string" ? getPage().locator(option) : option;
    await selectElement.waitFor({ state: "visible" });
    await selectElement.click();
    await optionElement.waitFor({ state: "visible" });
    await optionElement.click();
  };

  click = async (button: string | Locator) => {
    const buttonElement =
      typeof button === "string" ? getPage().locator(button) : button;
    await buttonElement.waitFor({ state: "visible" });
    await buttonElement.click();
  };

  check = async (checkbox: string | Locator) => {
    const checkboxElement =
      typeof checkbox === "string" ? getPage().locator(checkbox) : checkbox;
    await checkboxElement.waitFor({ state: "visible" });
    await checkboxElement.check();
  };

  fillText = async (input: string | Locator, value: string) => {
    const inputElement =
      typeof input === "string" ? getPage().locator(input) : input;
    await inputElement.waitFor({ state: "visible" });
    await inputElement.fill(value);
  };

  fileUpload = async (input: string | Locator, path: string) => {
    const inputElement =
      typeof input === "string" ? getPage().locator(input) : input;
    await inputElement.waitFor({ state: "visible" });
    await inputElement.setInputFiles(path);
  };
}

export default new Utility();
