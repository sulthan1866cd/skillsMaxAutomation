import { Locator } from "@playwright/test";
import utility from "../utils/utility";
class LoginPageObject {
  emailField = (): Locator =>
    utility.getElement('//input[@placeholder="Email"]');
  passwordField = (): Locator =>
    utility.getElement('//input[@placeholder="Password"]');
  loginButton = (): Locator => utility.getElement('//button[text()="Login"]');
}

export default new LoginPageObject();
