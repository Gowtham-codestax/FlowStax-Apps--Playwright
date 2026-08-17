/**
 * Source (Java): org.CentralOpsPages.Duplicate_Phone_Number_Online_BankingPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * - Robot file-picker sequences -> base.uploadFile() with EXACT input xpath.
 * - Actions moveToElement().click().sendKeys() -> hover()+click()+pressSequentially().
 * - js click/scrollIntoView/focus -> forceClick()/locator.evaluate(). xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class Duplicate_Phone_Number_Online_BankingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async Duplicate_Phone_Number_Online_BankingOption(): Promise<void> {
    const categoryDD = this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
    await categoryDD.click();
    await this.page.waitForTimeout(1000);

    const opt = this.page.locator(
      "xpath=//flt-semantics/span[.='Duplicate Phone Number: Online Banking']"
    );
    await opt.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(opt);
  }

  async enterCustomerDetails(): Promise<void> {
    const CusId = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await CusId.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(CusId);
    // await CusId.click();
    await this.page.waitForTimeout(300);
    await CusId.pressSequentially('123456711');

    const CusName = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer Name *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await CusName.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(800);
    await CusName.hover();
    await CusName.click();
    await CusName.pressSequentially('Test');

    const PremiumRadioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='Premium']/preceding::flt-semantics[1][@role='radio']"
    );
    await PremiumRadioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(800);
    await PremiumRadioBtn.click();

    const Email_Field = this.page.locator(
      "xpath=//flt-semantics/span[.='Email ID']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await Email_Field.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(800);
    await Email_Field.click();
    await this.page.waitForTimeout(200);
    await Email_Field.pressSequentially('Test@gmail.com');

    const Contact_Field = this.page.locator(
      "xpath=//flt-semantics/span[.='Contact Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await Contact_Field.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(800);
    await Contact_Field.click();
    await Contact_Field.pressSequentially('678976777');
  }

  async nrcIDproof(): Promise<void> {
    const NRCIDproofRdioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC / မှတ်ပုံတင်']/preceding::flt-semantics[1][@role='radio']"
    );
    await NRCIDproofRdioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await NRCIDproofRdioBtn.click();
  }

  async nrcNumberFields(): Promise<void> {
    const districtBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[@aria-label='Districts']"
    );
    await districtBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(districtBtn);

    const fifthoption = this.page.locator("xpath=//flt-semantics/span[.='5']");
    await this.page.waitForTimeout(10);
    await fifthoption.click();

    const TownSHipBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[6][@aria-label='Townships']"
    );
    await TownSHipBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(TownSHipBtn);

    const secondoption = this.page.locator("xpath=//flt-semantics/span[.='BAMANA']");
    await this.page.waitForTimeout(10);
    await secondoption.click();

    const Btn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[10][last()]"
    );
    await Btn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Btn);

    const P_option = this.page.locator("xpath=//flt-semantics/span[.='P']");
    await this.page.waitForTimeout(10);
    await P_option.click();

    const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics/input[@aria-label='Number']");
    await NumberTxtFieldBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(NumberTxtFieldBtn);
    await this.page.waitForTimeout(200);
    await NumberTxtFieldBtn.pressSequentially('33457');
  }

  async uploadNrcFront_PageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload NRC Front Page']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async uploadNRC_Back_PageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload NRC Back Page']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async uploadRequestForm_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload Request Form *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async nrcVerified_YesRadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Verified? *']/following::flt-semantics[1][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await el.click();
  }

  async nrcVerified_NORadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Verified? *']/following::flt-semantics[3][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await el.click();
  }

  async uploadSIMCardOwnerDoc_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='SIM Card Owner Document *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async customerVerifiedPhnNUm_YesRadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer Phone Number Verified? *']/following::flt-semantics[1][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await el.click();
  }

  async customerVerifiedPhnNUm_NORadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer Phone Number Verified? *']/following::flt-semantics[3][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await el.click();
  }

  async im_Banking_usernameField(): Promise<void> {
    const Im_Banking_usernameField = this.page.locator(
      "xpath=//flt-semantics/span[.='I/m Banking Username *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await Im_Banking_usernameField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(300);
    await Im_Banking_usernameField.pressSequentially('Test123');
  }

  async userNameVerified_YesRadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='User Name Verified? *']/following::flt-semantics[1][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await el.click();
  }

  async userNameVerified_NORadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='User Name Verified? *']/following::flt-semantics[3][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await el.click();
  }

  async emailVerified_YesRadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='Email Verified? *']/following::flt-semantics[1][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(50);
    await el.click();
  }

  async emailVerified_NORadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='Email Verified? *']/following::flt-semantics[3][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await el.click();
  }

  async docVerified_YesRadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='Documents Verified? *']/following::flt-semantics[1][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await el.click();
  }

  async docVerified_NORadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='Documents Verified? *']/following::flt-semantics[3][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await el.click();
  }

  async EditIconClick(): Promise<void> {
    const EditBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await EditBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(300);
    await this.forceClick(EditBtn);
    await this.page.waitForTimeout(100);

    const EditTownShipbtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[6]"
    );
    await EditTownShipbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1100);
    await EditTownShipbtn.evaluate((el: HTMLElement) => el.scrollIntoView(true));
    await EditTownShipbtn.evaluate((el: HTMLElement) => el.focus());
    await this.page.waitForTimeout(350);
    await this.forceClick(EditTownShipbtn);

    const editTownshipOptionLoc = this.page.locator("xpath=//flt-semantics/span[.='DAHANA']");
    await this.page.waitForTimeout(10);
    await editTownshipOptionLoc.click();
  }

  async requestforClosurebutton(): Promise<void> {
    const requestforClosureOption = this.page.locator(
      "xpath=//flt-semantics[contains(text(),'Request for closure')]"
    );
    await requestforClosureOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(requestforClosureOption);
  }

  async reOpenbutton(): Promise<void> {
    const ReopenOption = this.page.locator("xpath=//flt-semantics[contains(text(),'Reopen')]");
    await ReopenOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(ReopenOption);
  }
}
