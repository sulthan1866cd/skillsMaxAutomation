import { getPage } from "../hooks";

class LoginPageActions {
  constructor() {}
  gotoLoginPage = async () => {
    await getPage().goto("https://sandbox.skillsmax.ai/", {
      waitUntil: "domcontentloaded",
    });
  };

  fillEmail = async (email: string) => {
    await getPage().getByPlaceholder("Email").fill(email);
  };

  fillPassword = async (password: string) => {
    await getPage().getByPlaceholder("Password").fill(password);
  };

  clickLoginButton = async () => {
    await getPage().getByRole("button", { name: "Login" }).click();
  };
}

export default new LoginPageActions();
