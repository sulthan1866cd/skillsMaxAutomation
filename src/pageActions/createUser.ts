import  createUserPageObject  from "../pageObjects/createUser";
import utility from "../utils/utility";

class CreateUserPageAction {
  switchToUserTab = async () => {
    await utility.click(createUserPageObject.userTabButton());
  };
  openCreateUsersSidebar = async () => {
    await utility.click(createUserPageObject.createUsersSidebarButton());
  };
  selectSingleUser = async () => {
    await utility.click(createUserPageObject.selectSingleUserButton());
  };
  selectBulkUsers = async () => {
    await utility.click(createUserPageObject.selectBulkUsersButton());
  };
  clickNextButtom = async () => {
    await utility.click(createUserPageObject.nextButton());
  };
  selectOrganizationName = async (option: string) => {
    await utility.selectDropdown(
      createUserPageObject.selectOrganization(),
      `//li[text()="${option}"]`
    );
  };
  uploadUserDetails = async (path: string) => {
    utility.fileUpload(createUserPageObject.fileUploadInput(), path);
  };

  clickConfirmAndCreate = async () => {
    utility.click(createUserPageObject.confirmAndCreateButton());
  };

  searchUsers = async (search: string) => {
    await utility.fillText(createUserPageObject.searchBar(), search);
  };
}

export default new CreateUserPageAction();
