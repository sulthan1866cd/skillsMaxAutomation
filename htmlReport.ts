import * as os from "os";
import { generate } from "multiple-cucumber-html-reporter";

interface PlatformInfo {
  name: string;
  version: string;
}

const getPlatformInfo = (): PlatformInfo => {
  return {
    name: os.platform(),
    version: os.release(),
  };
};

const generateReport = () => {
  const platformInfo: PlatformInfo = getPlatformInfo();

  generate({
    jsonDir: "test-results",
    openReportInBrowser: true,
    reportPath: "./test-results",
    reportName: "skills max test report",
    displayDuration: true,
    metadata: {
      device: os.hostname(),
      platform: platformInfo,
    },
  });
};
generateReport();
