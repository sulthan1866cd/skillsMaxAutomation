import assesmentLevels from "../interface/assesmentLevels.interface";
import assessmentTypes from "../interface/assesmentTypes.interface";
import utility from "../utils/utility";

class CreateOrganization {
  constructor() {}


  switchToOrganizationTab = async () => {
    await utility.click('//a//child::p[text()="Organization"]');
  };

  openCreateOrganizationSideBar = async () => {
    await utility.click('//button[text()="Create Organization"]');
  };

  fillOrganizationName = async (organizationName: string) => {
    await utility.fillText(
      '//input[@placeholder="Organisation Name"]',
      organizationName
    );
  };

  fillAddress = async (address: string) => {
    await utility.fillText('//textarea[@name="address"]', address);
  };

  selectCountry = async (listIndex: number) => {
    await utility.selectDropdown(
      '//input[@id="«r19»"]',
      `//li[@id="«r19»-option-${listIndex}"]`
    );
  };

  selectState = async (listIndex: number) => {
    await utility.selectDropdown(
      '//input[@id="«r1c»"]',
      `//li[@id="«r1c»-option-${listIndex}"]`
    );
  };

  selectCity = async (listIndex: number) => {
    await utility.selectDropdown(
      '//input[@id="«r1g»"]',
      `//li[@id="«r1g»-option-${listIndex}"]`
    );
  };

  fillPin = async (pincode: string) => {
    await utility.fillText('//input[@placeholder="XXXXXX"]', pincode);
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
    await utility.click('//button//child::p[text()="Create"]');
  };
}

export default new CreateOrganization();
