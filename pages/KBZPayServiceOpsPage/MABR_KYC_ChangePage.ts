/**
 * Source (Java): org.kbzPayAppPages.MABR_KYC_ChangePage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - Robot file-picker sequences -> base.uploadFile() with EXACT input xpath.
 *  - new_UserDateOfBirth while-loop (month navigation) preserved; getText() -> textContent().
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x40, same sleeps.
 *  - js click/scrollIntoView -> forceClick()/locator.evaluate(). xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class MABR_KYC_ChangePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async mabr_KYC_ChangeOption(): Promise<void> {
    const MABR_KYC_ChangeOPtion = this.page.locator("xpath=//flt-semantics/span[.='MABR KYC Change']");
    await MABR_KYC_ChangeOPtion.waitFor({ state: 'visible' });
    await MABR_KYC_ChangeOPtion.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(500);
    await this.forceClick(MABR_KYC_ChangeOPtion);
  }

  async nrcIDproof(): Promise<void> {
    const NRCIDproofRdioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC / မှတ်ပုံတင်']/preceding::flt-semantics[@role='radio']"
    );
    await NRCIDproofRdioBtn.waitFor({ state: 'visible' });
    await NRCIDproofRdioBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async nrcNumberFields(): Promise<void> {
    // DistrictOption
    const districtBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC number *']/following::flt-semantics[@aria-label='Districts']"
    );
    await districtBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1100);
    await this.page.waitForTimeout(1000);
    await this.forceClick(districtBtn);

    const fifthoption = this.page.locator("xpath=//flt-semantics/span[.='5']");
    await this.page.waitForTimeout(1100);
    await fifthoption.click();

    // Town Selection
    const TownSHipBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC number *']/following::flt-semantics[@aria-label='Townships']"
    );
    await TownSHipBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.page.waitForTimeout(1000);
    await this.forceClick(TownSHipBtn);

    const secondoption = this.page.locator("xpath=//flt-semantics/span[.='BAMANA']");
    await this.page.waitForTimeout(1100);
    await secondoption.click();

    // button
    const Btn = this.page.locator(
      "xpath=//flt-semantics[ @style[contains(.,'position: absolute; overflow: visible; width: 150px; height: 54.4px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 235.29, 451.85); pointer-events: none; z-index: 26;')]]"
    );
    await Btn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.page.waitForTimeout(1000);
    await this.forceClick(Btn);

    const P_option = this.page.locator("xpath=//flt-semantics/span[.='P']");
    await this.page.waitForTimeout(1100);
    await P_option.click();

    // NUMBER FIELD
    const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics/input[@aria-label='Number']");
    await NumberTxtFieldBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.page.waitForTimeout(1000);
    await this.forceClick(NumberTxtFieldBtn);
    await this.page.waitForTimeout(600);
    await NumberTxtFieldBtn.pressSequentially('33457');
  }

  async uploadNrcFront_PageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload NRC front page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async uploadNRC_Back_PageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload NRC back page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async DateOfBirth(): Promise<void> {
    const Calender = this.page.locator("xpath=//input[@aria-label='YYYY-MM-DD']");
    await Calender.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await Calender.click();
    await this.page.waitForTimeout(1500);

    const CurrentDay = new Date().getDate();
    const today = this.page.locator(
      `xpath=//flt-semantics[contains(text(),'${CurrentDay}') and contains(text(),'Today')]`
    );
    await today.waitFor({ state: 'visible' });
    await this.forceClick(today);
    await this.page.waitForTimeout(300);

    const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
    await this.forceClick(OkClick);
    await this.page.waitForTimeout(500);
  }

  async new_UserDateOfBirth(): Promise<void> {
    const Calender = this.page.locator("xpath=//input[@aria-label='YYYY-MM-DD']");
    await Calender.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await Calender.click();
    await this.page.waitForTimeout(500);

    // Target date
    const targetDay = 22;

    // Navigate to correct month/year using while loop
    while (true) {
      const monthYear =
        (await this.page.locator("xpath=//flt-semantics[.='Select year']").textContent()) ?? '';

      if (monthYear.includes('September') && monthYear.includes('2003')) {
        break;
      }

      const prevBtn = this.page.locator(
        "xpath=//flt-semantics[@role='button' and contains(text(),'Previous month')]"
      );
      await this.page.waitForTimeout(100);
      await this.forceClick(prevBtn);
    }

    // Select day 22
    const dayElement = this.page.locator(
      `xpath=//flt-semantics[contains(text(),'${targetDay}') and not(contains(text(),'Today'))]`
    );
    await dayElement.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(100);
    await this.forceClick(dayElement);
    await this.page.waitForTimeout(300);

    // OK
    const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
    await this.forceClick(OkClick);
    await this.page.waitForTimeout(500);
  }

  async reasonTxtFiled(): Promise<void> {
    const reason = this.page.locator(
      "xpath=//flt-semantics/span[contains(.,'Reason')]/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await reason.waitFor({ state: 'visible' });
    await reason.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await reason.click();
    await this.page.waitForTimeout(500);
    await reason.pressSequentially('Test');
  }

  async kycChangeFormUpload_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='KYC Change Form *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async UploadNewUserFace(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='New User Face Photo *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async additionalDoc_Upload_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Additional Document']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(13000);
    for (let i = 0; i < 40; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(200);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await this.forceClick(eyeiconbtn);
  }

  async EditIconClick(): Promise<void> {
    const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await NumberTxtFieldBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.page.waitForTimeout(1000);
    await this.forceClick(NumberTxtFieldBtn);
    await this.page.waitForTimeout(600);
    await NumberTxtFieldBtn.pressSequentially('33457');

    await NumberTxtFieldBtn.press('Control+a');
    await this.page.waitForTimeout(300);
    await NumberTxtFieldBtn.press('Backspace');
    await this.page.waitForTimeout(200);
    await NumberTxtFieldBtn.click();
    await NumberTxtFieldBtn.pressSequentially('67' + (Date.now() % 1000));
  }

  async downloadPDFButton(): Promise<void> {
    const downloadPdfbtn = this.page.locator("xpath=(//flt-semantics[@role='button'])[last()]");
    await downloadPdfbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(2000);
    await this.forceClick(downloadPdfbtn);
  }
}
