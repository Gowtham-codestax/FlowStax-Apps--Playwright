/**
 * Source (Java): org.CentralOpsPages.Im_Banking_CIFPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * - Robot file-picker sequences -> base.uploadFile() with EXACT input xpath.
 * - typeOfCIFReCheckBoxes findElements loop -> locator.nth(i), same count (5).
 * - Menu retry loop kept at 5. js click/scrollIntoView/focus/dispatchEvent -> forceClick/evaluate.
 * - Actions moveToElement().click().sendKeys() -> hover()+click()+pressSequentially().
 * - xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class Im_Banking_CIFPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async im_Banking_CIfOPtion(): Promise<void> {
    const categoryDD = this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
    await categoryDD.click();
    await this.page.waitForTimeout(1000);

    const Im_Banking_CIFPage = this.page.locator("xpath=//flt-semantics/span[.='i/m Banking (CIF)']");
    await Im_Banking_CIFPage.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Im_Banking_CIFPage);
  }

  async enterCustomerDetails(): Promise<void> {
    // CUS ID
    const CusId = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    ).first();
    await CusId.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(800);
    await this.forceClick(CusId);
    // await CusId.click();
    await this.page.waitForTimeout(200);
    await CusId.pressSequentially('123456711');

    // CUS Name
    const CusName = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer Name *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await CusName.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(800);
    await this.page.waitForTimeout(200);
    await CusName.hover();
    await CusName.click();
    await CusName.pressSequentially('Test');

    // Premium radio
    const PremiumRadioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='Premium']/preceding::flt-semantics[1][@role='radio']"
    );
    await PremiumRadioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(800);
    await PremiumRadioBtn.click();

    // Email
    const Email_Field = this.page.locator(
      "xpath=//flt-semantics/span[.='Email ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await Email_Field.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(800);
    await Email_Field.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await Email_Field.click();
    await this.page.waitForTimeout(100);
    await Email_Field.pressSequentially('Test@gmail.com');

    // Contact number
    const Contact_Field = this.page.locator(
      "xpath=//flt-semantics/span[.='Contact Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await Contact_Field.waitFor({ state: 'attached' });
   // await this.page.waitForTimeout(500);
    await Contact_Field.click();
    await Contact_Field.pressSequentially('678976777');
  }

  async nrcIDproof(): Promise<void> {
    const NRCIDproofRdioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC / မှတ်ပုံတင်']/preceding::flt-semantics[1][@role='radio']"
    );
    await NRCIDproofRdioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await NRCIDproofRdioBtn.click();
  }

  async nrcNumberFields(): Promise<void> {
    const districtBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[@aria-label='Districts']"
    );
    await districtBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await this.forceClick(districtBtn);

    const fifthoption = this.page.locator("xpath=//flt-semantics/span[.='5']");
    await this.page.waitForTimeout(10);
    await fifthoption.click();

    const TownSHipBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[@aria-label='Townships']"
    );
    await TownSHipBtn.waitFor({ state: 'attached' });
    await this.forceClick(TownSHipBtn);

    const secondoption = this.page.locator("xpath=//flt-semantics/span[.='BAMANA']");
    await this.page.waitForTimeout(10);
    await secondoption.click();

    const Btn = this.page.locator(
      "xpath=(//flt-semantics/span[.='NRC Number *']/following::flt-semantics[10])[last()]"
    );
    await Btn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await this.forceClick(Btn);

    const P_option = this.page.locator("xpath=//flt-semantics/span[.='P']");
    await this.page.waitForTimeout(10);
    await P_option.click();

    const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics/input[@aria-label='Number']");
    await NumberTxtFieldBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(300);
    await this.forceClick(NumberTxtFieldBtn);
    await this.page.waitForTimeout(200);
    await NumberTxtFieldBtn.pressSequentially('33457');
  }

  async uploadNrcFront_PageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload NRC Front Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async uploadNRC_Back_PageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload NRC Back Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async uploadReqForm_PageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload Request Form *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async mobileVerifed_YesRadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='Mobile Verified? *']//following::flt-semantics[1][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await el.click();
  }

  async signatureVerifed_YesRadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='Signature Verified? *']//following::flt-semantics[1][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await el.click();
  }

  async makerCheckerCompleted_YesRadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='Maker Checker completed? *']//following::flt-semantics[1][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await el.click();
  }

  async cifAndMakerAccCreated_inIbanking_YesRadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='CIF Verified + Maker account created in iBanking? *']//following::flt-semantics[1][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await el.click();
  }

  async nrcVerifed_YesRadioBtn(): Promise<void> {
    const el = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Verified? *']//following::flt-semantics[1][@role='radio']"
    );
    await el.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await el.click();
  }

  async typeOfCIFReCheckBoxes(): Promise<void> {
    const boxes = this.page.locator(
      "xpath=//flt-semantics/span[.='Select type of CIF request *']/following::flt-semantics[@role='checkbox']"
    );
    await boxes.first().waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    for (let i = 0; i < 5; i++) {
     // await this.page.waitForTimeout(700);
      await this.forceClick(boxes.nth(i));
    }
  }

  async NextButton(): Promise<void> {
    const NextBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
    await NextBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(250);
    await NextBtn.click();
  }

  async EditIconClick(): Promise<void> {
    const EditBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await EditBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(300);
    await this.forceClick(EditBtn);
    await this.page.waitForTimeout(100);

    // NRC Language button EN -> MM
    const emBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[.='en']"
    );
    await emBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1100);
    await emBtn.evaluate((el: HTMLElement) => el.scrollIntoView(true));
    await this.page.waitForTimeout(350);
    await this.forceClick(emBtn);

    const mmBtn = this.page.locator("xpath=//flt-semantics[.='mm']");
    await mmBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1100);
    await mmBtn.evaluate((el: HTMLElement) => el.focus());
    await this.page.waitForTimeout(350);
    await this.forceClick(mmBtn);

    // District
    const EditDistrict = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[@aria-label='Districts']"
    );
    await EditDistrict.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1100);
    await EditDistrict.evaluate((el: HTMLElement) => el.focus());
    await this.page.waitForTimeout(350);
    await this.forceClick(EditDistrict);

    const EditDistrict_1StOption = this.page.locator("xpath=//flt-semantics/span[.='၁']");
    await this.page.waitForTimeout(10);
    await EditDistrict_1StOption.click();

    // Township
    const EditTownShipbtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[@aria-label='Townships']"
    );
    await EditTownShipbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1100);
    await EditTownShipbtn.evaluate((el: HTMLElement) => el.focus());
    await this.page.waitForTimeout(350);
    await this.forceClick(EditTownShipbtn);

    const editTownship_OptionLoc = this.page.locator("xpath=//flt-semantics/span[.='မညန']");
    await this.page.waitForTimeout(10);
    await editTownship_OptionLoc.click();

    // button
    const Btn = this.page.locator(
      "xpath=(//flt-semantics/span[.='NRC Number *']/following::flt-semantics[10])[last()]"
    );
    await Btn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await this.forceClick(Btn);

    const option = this.page.locator("xpath=//flt-semantics/span[.='သာသနာ']");
    await this.page.waitForTimeout(10);
    await option.click();

    // NRC Number field
    const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics/input[@aria-label='Number']");
    await NumberTxtFieldBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.page.waitForTimeout(800);
    await this.forceClick(NumberTxtFieldBtn);
    await this.page.waitForTimeout(200);
    await NumberTxtFieldBtn.pressSequentially('565677');
  }

  async MenuButton(): Promise<void> {
    const menu = this.page.locator("xpath=(//flt-semantics[@role='button'])[2]");
    for (let i = 0; i < 5; i++) {
      try {
        await menu.waitFor({ state: 'visible' });
        await menu.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
        await this.page.waitForTimeout(2000);
        await menu.evaluate((el: HTMLElement) =>
          el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        );
        console.log('Menu clicked');
        break;
      } catch (e) {
        console.log('Retrying menu click : ' + i);
        await this.page.waitForTimeout(5000);
      }
    }
  }

  async requestforClosurebutton(): Promise<void> {
    const requestforClosureOption = this.page.locator(
      "xpath=//flt-semantics[contains(text(),'Request for closure')]"
    );
    await requestforClosureOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(requestforClosureOption);
  }

  async reasonForClosure(): Promise<void> {
    const categoryDD = this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
    await categoryDD.click();
    await this.page.waitForTimeout(1000);
  }

  async customerRefusedButton(): Promise<void> {
    const CustomerRefues_Btn = this.page.locator("xpath=//flt-semantics/span[.='Customer refused']");
    await CustomerRefues_Btn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(CustomerRefues_Btn);
  }

  async wrongApplicationButton(): Promise<void> {
    const wrongApplication_Btn = this.page.locator("xpath=//flt-semantics/span[.='Wrong application']");
    await wrongApplication_Btn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(wrongApplication_Btn);
  }
}
