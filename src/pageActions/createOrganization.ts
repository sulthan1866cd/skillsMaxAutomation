import { getPage } from "../hooks";

class CreateOrganization {
  constructor() {}
  login = async () => {
    await getPage().goto("https://sandbox.skillsmax.ai/", {
      waitUntil: "domcontentloaded",
    });

    await getPage().getByPlaceholder("Email").fill(process.env.MY_MAIL);
    await getPage().getByPlaceholder("Password").fill(process.env.MY_PASSWORD);
    await getPage().getByRole("button", { name: "Login" }).click();

    await getPage().getByRole("link", { name: "Organization" }).click();
  };

  selectDropdown = async (placeholder:string,xpath:string) => {
    await getPage().getByPlaceholder(placeholder).click();
    await getPage().locator(xpath).click();
  };
}

export default new CreateOrganization();
