import utility from "../utils/utility";
import loginPageObject from "../pageObjects/login";
class LoginPageActions {
  constructor() {}
  gotoLoginPage = async () => {
    await utility.goToURL("https://sandbox.skillsmax.ai/");
  };

  fillEmail = async (email: string) => {
    await utility.fillText(loginPageObject.emailField(), email);
  };

  fillPassword = async (password: string) => {
    await utility.fillText(loginPageObject.passwordField(), password);
  };

  clickLoginButton = async () => {
    await utility.click(loginPageObject.loginButton());
  };
}

export default new LoginPageActions();
