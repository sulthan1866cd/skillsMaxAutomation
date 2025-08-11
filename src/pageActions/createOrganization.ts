import assesmentLevels from "../interface/assesmentLevels.interface";
import assessmentTypes from "../interface/assesmentTypes.interface";
import utility from "../utils/utility";
import createOrganizationPageObject from "../pageObjects/createOrganization";

class CreateOrganizationPageAction {
  constructor(){}
  switchToOrganizationTab = async () => {
    await utility.click(createOrganizationPageObject.organizationTabButton());
  };

  openCreateOrganizationSideBar = async () => {
    await utility.click(
      createOrganizationPageObject.createOrganizationSidebarButton()
    );
  };

  fillOrganizationName = async (organizationName: string) => {
    await utility.fillText(
      createOrganizationPageObject.organizationNameField(),
      organizationName
    );
  };

  fillAddress = async (address: string) => {
    await utility.fillText(
      createOrganizationPageObject.addressField(),
      address
    );
  };

  selectCountry = async (listIndex: number) => {
    await utility.selectDropdown(
      createOrganizationPageObject.selectCountryField(),
      `//li[@id="«r19»-option-${listIndex}"]`
    );
  };

  selectState = async (listIndex: number) => {
    await utility.selectDropdown(
      createOrganizationPageObject.selectStateField(),
      `//li[@id="«r1c»-option-${listIndex}"]`
    );
  };

  selectCity = async (listIndex: number) => {
    await utility.selectDropdown(
      createOrganizationPageObject.selectCityField(),
      `//li[@id="«r1g»-option-${listIndex}"]`
    );
  };

  fillPin = async (pincode: string) => {
    await utility.fillText(createOrganizationPageObject.pinField(), pincode);
  };

  checkLicensing = async (
    license:
      | "Practice"
      | "Graded"
      | "Interview"
      | "Aptitude+"
      | "AI-Powered Communication"
      | "Coding"
  ) => {
    await utility.check(
      `//p[text()='${license}']//parent::div//child::input[@type='checkbox']`
    );
  };

  fillAssessmentTypes = async (assessmentTypes: assessmentTypes) => {
    const { apptitude, communication, coding } = assessmentTypes;
    if (apptitude) {
      await this.checkLicensing("Aptitude+");
      await utility.fillText('//input[@id="«r1j»"]', String(apptitude));
    }
    if (communication) {
      await this.checkLicensing("AI-Powered Communication");
      await utility.fillText('//input[@id="«r1k»"]', String(communication));
    }
    if (coding) {
      await this.checkLicensing("Coding");
      await utility.fillText('//input[@id="«r1l»"]', String(coding));
    }
  };

  checkAssessmentLevels = async (assessmentLevels: assesmentLevels) => {
    const { practice, graded, interview } = assessmentLevels;
    if (practice) await this.checkLicensing("Practice");
    if (graded) await this.checkLicensing("Graded");
    if (interview) await this.checkLicensing("Interview");
  };

  clickCreateButton = async () => {
    await utility.click(createOrganizationPageObject.createButton());
  };
}

export default new CreateOrganizationPageAction();
