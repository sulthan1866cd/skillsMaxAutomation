import utility from "../utils/utility";

class CreateUser {
  switchToUserTab = async () => {
    await utility.click('//a//child::p[text()="User"]');
  };
  openCreateUsersSidebar = async () => {
    await utility.click('//button[text()="Create User"]');
  };
  selectSingleUser = async () => {
    await utility.click('//input[@type="radio" and @value="single-user"]');
  };
  selectBulkUsers = async () => {
    await utility.click('//input[@type="radio" and @value="bulk-user"]');
  };
  clickNextButtom = async () => {
    await utility.click('//button//child::p[text()="Next"]');
  };
  selectOrganizationName = async (option: string) => {
    await utility.selectDropdown(
      '//input[@id="organization-select"]',
      `//li[text()="${option}"]`
    );
  };
  uploadUserDetails = async (path: string) => {
    utility.fileUpload('//input[@type="file"]', path);
  };

  clickConfirmAndCreate = async () => {
    utility.click('//button//child::p[text()="Confirm & Create"]');
  };

  searchUsers = async (search: string) => {
    await utility.fillText('//input[@placeholder="Search User"]', search);
  };
}

export default new CreateUser();
