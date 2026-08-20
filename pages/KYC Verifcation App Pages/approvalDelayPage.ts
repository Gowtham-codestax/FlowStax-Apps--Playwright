import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class approvalDelayPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async ticketPriorityMedium(): Promise<void> {
    const MediumRdioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='Medium']/preceding::flt-semantics[@role='radio'][1]"
    );
    await MediumRdioBtn.waitFor({ state: 'visible' });
    await MediumRdioBtn.click();
    await this.page.waitForTimeout(500);
  }

  async customerOnboardDate(): Promise<void> {
    const CurrentDay = new Date().getDate();

    const Calender = this.page.locator("xpath=//input[@aria-label='YYYY-MM-DD']");
    await Calender.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await Calender.click();

    const today = this.page.locator(
      `xpath=//flt-semantics[contains(text(),'${CurrentDay}') and contains(text(),'Today')]`
    );
    await today.waitFor({ state: 'visible' });
    await this.forceClick(today);

    const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
    await OkClick.click();
    await this.page.waitForTimeout(500);
  }

  async customerOnboardChannel(): Promise<void> {
    const customerOnboardChannelClick = this.page.locator(
      "xpath=(//span[.='Please select']/parent::flt-semantics)[1]"
    );
    await customerOnboardChannelClick.click();
    await this.page.waitForTimeout(1000);
  }

  async selfOnboarding(): Promise<void> {
    const selfOnboardingOPtion = this.page.locator("xpath=//span[.='Self Onboarding']");
    await selfOnboardingOPtion.waitFor({ state: 'visible' });
    await selfOnboardingOPtion.click();
  }

  async eaOnboarding(): Promise<void> {
    const EAOnboardingOPtion = this.page.locator("xpath=//span[.='EA Onboarding']");
    await EAOnboardingOPtion.waitFor({ state: 'visible' });
    await EAOnboardingOPtion.click();
  }

  async enteringCustomerDetails(): Promise<void> {
    const CusName = this.page.locator("xpath=(//input[@data-semantics-role='text-field'])[2]");
    await CusName.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1500);
    await CusName.hover();
    await CusName.click();
    await CusName.pressSequentially(' QA');

    const CusPhn = this.page.locator("xpath=(//input[@data-semantics-role='text-field'])[3]");
    await CusPhn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1500);
    await CusPhn.click();
    await this.page.waitForTimeout(200);
    await CusPhn.pressSequentially('678976777');
  }

  async serviceRequestType(): Promise<void> {
    const ServiceSelectionOPtion = this.page.locator(
      "xpath=(//flt-semantics/span[.='Please select'])[1]"
    );
    await ServiceSelectionOPtion.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(ServiceSelectionOPtion);
  }

  async approvalDelayOption(): Promise<void> {
    const Aprovaldelayoption = this.page.locator(
      "xpath=//flt-semantics/span[.='Approval Delay (New obd customer only)']"
    );
    await Aprovaldelayoption.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(100);
    await Aprovaldelayoption.click();
  }

  async typeOfServiceRequestField(): Promise<void> {
    const TypeofservicereqField = this.page.locator(
      "xpath=//flt-semantics/span[.='Type of Service Request (In Detail) *']/following::flt-semantics/textarea[@data-semantics-role='text-field']"
    );
    await TypeofservicereqField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await TypeofservicereqField.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(200);
    await this.forceClick(TypeofservicereqField);
    await this.page.waitForTimeout(300);
    await TypeofservicereqField.pressSequentially('Testing Approval delay Flow');
  }

  async passportIDProof(): Promise<void> {
    const passportIDproofRadioBtn = this.page.locator(
      "xpath=(//flt-semantics/span[.='Passport']/preceding::flt-semantics[@role='radio'])[6]"
    );
    await passportIDproofRadioBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await passportIDproofRadioBtn.click();
    await this.page.waitForTimeout(500);
  }

  async customerPassportNumField(): Promise<void> {
    const custumerPassport_NumField = this.page.locator(
      "xpath=(//flt-semantics/span[.='Customer Passport Number *']/following::flt-semantics/input[@data-semantics-role='text-field'])[1]"
    );
    await custumerPassport_NumField.waitFor({ state: 'visible' });
    await custumerPassport_NumField.hover();
    await custumerPassport_NumField.click();
    await custumerPassport_NumField.pressSequentially('11223344577');
  }

  async uploadPassport_FrontPageBtn(): Promise<void> {
    await this.uploadFile("xpath=//flt-semantics/span[.='Upload Passport Front Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']");
  }

  async uploadPassport_BackpageBtn(): Promise<void> {
    await this.uploadFile("xpath=//flt-semantics/span[.='Upload Passport Back Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
      );
  }

  async uploadRequestForm_Btn(): Promise<void> {
    await this.uploadFile("xpath=//flt-semantics/span[.='Upload Request Form File *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async customerSegmentType(): Promise<void> {
    const Cutomersegment = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer Segment']/following::flt-semantics/span[.='Please select']"
    );
    await Cutomersegment.waitFor({ state: 'visible' });
    await Cutomersegment.click();

    const NonHNI = this.page.locator("xpath=//span[.='Non HNI']");
    await NonHNI.waitFor({ state: 'visible' });
    await NonHNI.click();
  }

  async uploadSecondaryIDfrontPage_Btn(): Promise<void> {
    await this.uploadFile("xpath=//flt-semantics/span[.='Upload Secondary Id Front Page']/following::flt-semantics[1]/input[@data-semantics-role='text-field']");
  }

  async uploadSecondaryIDBackPage_Btn(): Promise<void> {
    await this.uploadFile("xpath=//flt-semantics/span[.='Upload Secondary Id Back Page']/following::flt-semantics[1]/input[@data-semantics-role='text-field']");
  }

  async uploadAdditionalDocument_Btn(): Promise<void> {
    await this.uploadFile("xpath=//flt-semantics/span[.='Upload Additional Documents']/following::flt-semantics[1]/input[@data-semantics-role='text-field']");
  }

  async UploadNRCRecmendationLetter(): Promise<void> {
    await this.uploadFile("xpath=//flt-semantics/span[.='Upload NRC Recommendation Letter']/following::flt-semantics[1]/input[@data-semantics-role='text-field']");
  }

  async UploadSelfPhoto(): Promise<void> {
    await this.uploadFile("xpath=//flt-semantics/span[.='Upload Selfie Photo *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']");
  }

  async NextButton(): Promise<void> {
    const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
    await NxtBtn.waitFor({ state: 'visible' });
    await NxtBtn.click();
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(8100);
    for (let i = 0; i < 32; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(300);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(2300);
    await this.forceClick(eyeiconbtn);
  }

  async sendToCheckerBtn(): Promise<void> {
    const sendcheckerbtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(.,'Send to Checker')]"
    ).first();
    await sendcheckerbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(4000);
    await this.forceClick(sendcheckerbtn);
   
   // await sendcheckerbtn.click();
  }

  async kbzcenterChecker_RadioBtn(): Promise<void> {
    const KBZCentercheckerbtn = this.page.locator(
      "xpath=(//flt-semantics/span[.='KBZPay Center Checker']/preceding::flt-semantics[@role='radio'])[1]"
    );
    await KBZCentercheckerbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await KBZCentercheckerbtn.click();
  }

  async UpdateSatgeCMNTbox(): Promise<void> {
    const UpdateSatgeCMNtTextField = this.page.locator(
      "xpath=//flt-semantics/span/following::flt-semantics/textarea[@data-semantics-role='text-field']"
    );
    await UpdateSatgeCMNtTextField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await UpdateSatgeCMNtTextField.click();
    await UpdateSatgeCMNtTextField.pressSequentially('Done');
  }
}
