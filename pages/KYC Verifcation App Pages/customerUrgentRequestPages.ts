/**
 * Source (Java): org.KycVerificationAppPages.customerUrgentRequestPages
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * - Robot native file-picker sequences -> base.uploadFile() with the EXACT input xpath.
 * - SendCheckerButtonClick TAB focus navigation kept: keyboard.press('Tab') x27, same sleeps.
 * - Actions moveToElement().click().sendKeys() -> hover()+click()+pressSequentially().
 * - js click/scrollIntoView -> forceClick()/locator.evaluate(). xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class customerUrgentRequestPages extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async ticketpriority(): Promise<void> {
    const HighRadioBtn = this.page.locator("xpath=(//flt-semantics[@role='radio'])[1]");
    await HighRadioBtn.waitFor({ state: 'visible' });
    await HighRadioBtn.click();
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
    await customerOnboardChannelClick.click();
  }

  async selfOnboarding(): Promise<void> {
    const selfOnboardingOPtion = this.page.locator("xpath=//span[.='Self Onboarding']");
    await selfOnboardingOPtion.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(600);
    await selfOnboardingOPtion.click();
  }

  async eaOnboarding(): Promise<void> {
    const EAOnboardingOPtion = this.page.locator("xpath=//span[.='EA Onboarding']");
    await EAOnboardingOPtion.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(600);
    await EAOnboardingOPtion.click();
  }

  async enteringCustomerDetails(): Promise<void> {
    const CusName = this.page.locator("xpath=(//input[@data-semantics-role='text-field'])[2]");
    await CusName.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1500);
    await CusName.hover();
    await CusName.click();
    await CusName.pressSequentially(' Test');

    const CusPhn = this.page.locator("xpath=(//input[@data-semantics-role='text-field'])[3]");
    await CusPhn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1500);
    await CusPhn.hover();
    await CusPhn.click();
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

  async customerUrgentRequestOption(): Promise<void> {
    const customerUrgentRequestOptionButton = this.page.locator(
      "xpath=//span[.='Customer Urgent Request (New obd related and KYC change case only)']"
    );
    await customerUrgentRequestOptionButton.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await customerUrgentRequestOptionButton.click();
  }

  async typesofserviceReqTextFiedl(): Promise<void> {
    const textArea = this.page.locator("xpath=//textarea[@data-semantics-role='text-field']");
    await textArea.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await textArea.evaluate((el: HTMLElement) => el.scrollIntoView(true));
    await this.page.waitForTimeout(600);
    await this.forceClick(textArea);
    await this.page.waitForTimeout(1000);
    await textArea.pressSequentially('Customer urgent Request');
  }

  async passportIDproofRadiobtn(): Promise<void> {
    const passportIDproofRadioBtn = this.page.locator("xpath=(//flt-semantics[@role='radio'])[6]");
    await passportIDproofRadioBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await passportIDproofRadioBtn.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ block: 'center' })
    );
    await passportIDproofRadioBtn.click();
  }

  async passportnumField(): Promise<void> {
    const Passport_NumField = this.page.locator("xpath=(//input[@data-semantics-role='text-field'])[4]");
    await Passport_NumField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(600);
    await Passport_NumField.hover();
    await Passport_NumField.click();
    await Passport_NumField.pressSequentially('11223344577');
  }

  async uploadPassport_FrontPageBtn(): Promise<void> {
    await this.uploadFile("xpath=(//input[@data-semantics-role='text-field'])[5]");
  }

  async uploadPassport_BackpageBtn(): Promise<void> {
    await this.uploadFile("xpath=(//input[@data-semantics-role='text-field'])[6]");
  }

  async uploadRequestForm_Btn(): Promise<void> {
    await this.uploadFile("xpath=(//input[@data-semantics-role='text-field'])[7]");
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
    await this.uploadFile("xpath=(//input[@data-semantics-role='text-field'])[8]");
  }

  async uploadSecondaryIDBackPage_Btn(): Promise<void> {
    await this.uploadFile("xpath=(//input[@data-semantics-role='text-field'])[9]");
  }

  async uploadAdditionalDocument_Btn(): Promise<void> {
    await this.uploadFile("xpath=(//input[@data-semantics-role='text-field'])[10]");
  }

  async UploadNRCRecmendationLetter(): Promise<void> {
    await this.uploadFile("xpath=(//input[@data-semantics-role='text-field'])[11]");
  }

  async UploadSelfPhoto(): Promise<void> {
    await this.uploadFile("xpath=(//input[@data-semantics-role='text-field'])[12]");
  }

  async NextButton(): Promise<void> {
    const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
    await NxtBtn.waitFor({ state: 'visible' });
    await NxtBtn.click();
  }

 /* async SendCheckerButtonClick(): Promise<void> {
    await this.page.waitForTimeout(4000);
    for (let i = 0; i < 27; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(500);
    }
    const sendcheckerbtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Send to Checker')]"
    );
    await sendcheckerbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(3000);
    await sendcheckerbtn.click();
  }
    */

  async SendCheckerButtonClick():Promise<void>{
    const sendcheckerbtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Send to Checker')]"
    );
    await sendcheckerbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(3000);
    await sendcheckerbtn.click();
  }

  async reSubmitButtonClick():Promise<void>{
    const loc = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Resubmit')]"
    );
    await loc.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(3000);
    await loc.click();
  }

  async KBZcenterCheckerRadioButon(): Promise<void> {
    const KBZcenterCheckerRadioBtn = this.page.locator("xpath=(//flt-semantics[@role='radio'])[1]");
    await KBZcenterCheckerRadioBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await KBZcenterCheckerRadioBtn.click();
  }

  async CluserManagerRadioButtton(): Promise<void> {
    const CluserManagerRadioBtn = this.page.locator("xpath=(//flt-semantics[@role='radio'])[2]");
    await CluserManagerRadioBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await CluserManagerRadioBtn.click();
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
