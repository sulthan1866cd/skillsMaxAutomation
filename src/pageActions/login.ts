import utility from "../utils/utility";

class LoginPageActions {
  constructor() {}
  gotoLoginPage = async () => {
    await utility.goToURL('https://sandbox.skillsmax.ai/')
  };

  fillEmail = async (email: string) => {
    await utility.fillText('//input[@placeholder="Email"]',email)
  };

  fillPassword = async (password: string) => {
    await utility.fillText('//input[@placeholder="Password"]',password);
  };

  clickLoginButton = async () => {
    await utility.click('//button[text()="Login"]');
  };
}

export default new LoginPageActions();
