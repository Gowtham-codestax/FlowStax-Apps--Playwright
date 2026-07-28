/**
 * Source (Java): org.kbzPayAppPages.Pin_Reset_Req_Device_Change_ReqPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - Robot file-picker sequences -> base.uploadFile() with EXACT input xpath.
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x41, same sleeps (200ms).
 *  - String.format("%05d", millis%100000) -> Date.now()%100000 padStart(5).
 *  - js click/scrollIntoView -> forceClick()/locator.evaluate(). xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class Pin_Reset_Req_Device_Change_ReqPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async Pin_Reset_Req_Device_Change_ReqOption(): Promise<void> {
    const Pin_Reset_Req_Device_Change_ReqOptionLOcBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='Pin Reset Request + Device Change Request']"
    );
    await Pin_Reset_Req_Device_Change_ReqOptionLOcBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(600);
    await this.forceClick(Pin_Reset_Req_Device_Change_ReqOptionLOcBtn);
  }

  async nrcIDproof(): Promise<void> {
    const NRCIDproofRdioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC / မှတ်ပုံတင်']/preceding::flt-semantics[@role='radio']"
    );
    await NRCIDproofRdioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(100);
    await NRCIDproofRdioBtn.click();
  }

  async nrcNumberFields(): Promise<void> {
    // DistrictOption
    const districtBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC number *']/following::flt-semantics[@aria-label='Districts']"
    );
    await districtBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await this.forceClick(districtBtn);

    // Fifth Option
    const fifthoption = this.page.locator("xpath=//flt-semantics/span[.='5']");
    await this.page.waitForTimeout(10);
    await fifthoption.click();

    // Town Selection
    const TownSHipBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC number *']/following::flt-semantics[@aria-label='Townships']"
    );
    await TownSHipBtn.waitFor({ state: 'attached' });
    await this.forceClick(TownSHipBtn);

    const secondoption = this.page.locator("xpath=//flt-semantics/span[.='BAMANA']");
    await this.page.waitForTimeout(10);
    await secondoption.click();

    // button
    const Btn = this.page.locator(
      "xpath=(//flt-semantics/span[.='NRC number *']/following::flt-semantics[10])[last()]"
    );
    await Btn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await this.forceClick(Btn);

    const P_option = this.page.locator("xpath=//flt-semantics/span[.='P']");
    await this.page.waitForTimeout(10);
    await P_option.click();

    // NUMBER FIELD
    const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics/input[@aria-label='Number']");
    await NumberTxtFieldBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(300);
    await this.forceClick(NumberTxtFieldBtn);
    await this.page.waitForTimeout(200);
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
    await Calender.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await Calender.click();

    const CurrentDay = new Date().getDate();
    const today = this.page.locator(
      `xpath=//flt-semantics[contains(text(),'${CurrentDay}') and contains(text(),'Today')]`
    );
    await today.waitFor({ state: 'attached' });
    await this.forceClick(today);

    const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
    await this.forceClick(OkClick);
    await this.page.waitForTimeout(500);
  }

  async addressFiled(): Promise<void> {
    const AddressField = this.page.locator(
      "xpath=//flt-semantics/span[.='Address *']/following::flt-semantics[1]/textarea[@data-semantics-role='text-field']"
    );
    await AddressField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await AddressField.click();
    await this.page.waitForTimeout(200);
    await AddressField.pressSequentially('Test Address');
  }

  async loanStatusField(): Promise<void> {
    const LoanStatusField = this.page.locator(
      "xpath=//flt-semantics/span[.='Loan status *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await LoanStatusField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(300);
    await this.page.waitForTimeout(200);
    await this.forceClick(LoanStatusField);
    await LoanStatusField.pressSequentially('Test@123');
  }

  async errorDetailsField(): Promise<void> {
    const ErrorField = this.page.locator(
      "xpath=//flt-semantics/span[.='Error Details']/following::flt-semantics/textarea[@data-semantics-role='text-field']"
    );
    await ErrorField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.page.waitForTimeout(200);
    await this.forceClick(ErrorField);
    await ErrorField.pressSequentially('Test@123');
  }

  async dateAndTime_IssueOccured(): Promise<void> {
    const CurrentDay = new Date().getDate();

    // calender click
    const IssueDateAndTimePopup = this.page.locator(
      "xpath=//flt-semantics/input[@aria-label='dd-MM-yyyy HH:mm:ss']"
    );
    await IssueDateAndTimePopup.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await IssueDateAndTimePopup.click();

    const today = this.page.locator(
      `xpath=//flt-semantics[contains(text(),'${CurrentDay}') and contains(text(),'Today')]`
    );
    await today.waitFor({ state: 'attached' });
    await this.forceClick(today);

    // First OK
    const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
    await OkClick.click();
    await this.page.waitForTimeout(300);

    // Select PM in time picker
    const pmButton = this.page.locator("xpath=//flt-semantics[@aria-label='PM'][@role='radio']");
    await pmButton.waitFor({ state: 'attached' });
    await this.forceClick(pmButton);
    await this.page.waitForTimeout(100);

    // Second OK (Time popup)
    const secondOk = this.page.locator("xpath=(//flt-semantics[.='OK'])[last()]");
    await secondOk.waitFor({ state: 'attached' });
    await this.forceClick(secondOk);
    await this.page.waitForTimeout(100);
  }

  async alternate_phoneNumField(): Promise<void> {
    const Alt_Phm_NumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Alternate Phone number']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await Alt_Phm_NumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(100);
    await Alt_Phm_NumField.hover();
    await Alt_Phm_NumField.click();
    await Alt_Phm_NumField.pressSequentially('4356789');
  }

  async kbzRegPhnNumField(): Promise<void> {
    const kbzRegPhnNumFieldc = this.page.locator(
      "xpath=//flt-semantics/span[.='KBZPay Registered Phone Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await kbzRegPhnNumFieldc.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await kbzRegPhnNumFieldc.click();
    await this.page.waitForTimeout(100);
    await kbzRegPhnNumFieldc.pressSequentially('678942134');
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(15000);
    for (let i = 0; i < 41; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(200);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(500);
    await this.forceClick(eyeiconbtn);
  }

  async EditIconClick(): Promise<void> {
    // EDITING NRC number field
    const EditBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await EditBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.page.waitForTimeout(300);
    await this.forceClick(EditBtn);
    await this.page.waitForTimeout(100);

    // NRC Town Ship
    const EditTownShipbtn = this.page.locator(
      "xpath=(//flt-semantics/span[.='NRC number *']/following::flt-semantics[@role='button'])[3]"
    );
    await EditTownShipbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(EditTownShipbtn);

    // changing Township Option in Editing Page
    const editTownshipOptionLoc = this.page.locator("xpath=//flt-semantics/span[.='DAHANA']");
    await this.page.waitForTimeout(10);
    await editTownshipOptionLoc.click();

    // NRC NUMBER FIELD
    const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics/input[@aria-label='Number']");
    await NumberTxtFieldBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await NumberTxtFieldBtn.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(800);
    await this.forceClick(NumberTxtFieldBtn);
    await this.page.waitForTimeout(200);

    await NumberTxtFieldBtn.press('Control+a');
    await this.page.waitForTimeout(100);
    await NumberTxtFieldBtn.press('Backspace');
    await this.page.waitForTimeout(100);
    await NumberTxtFieldBtn.pressSequentially(String(Date.now() % 100000).padStart(5, '0'));

    // EDITING CURRENT BALANCE
    const currentBalNumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Current Balance *']/following::flt-semantics[3]/input[@data-semantics-role='text-field']"
    );
    await currentBalNumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(100);
    await this.forceClick(currentBalNumField);
    await this.page.waitForTimeout(100);
    await currentBalNumField.press('Control+a');
    await this.page.waitForTimeout(100);
    await currentBalNumField.press('Backspace');
    await this.page.waitForTimeout(100);
    await currentBalNumField.pressSequentially('2233370.700');

    // Next Button
    const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
    await NxtBtn.waitFor({ state: 'visible' });
    await NxtBtn.click();
  }

  async assignToTSOBtn(): Promise<void> {
    const AssignToTSOBtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Assign to TSO')]"
    );
    await AssignToTSOBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(3000);
    await AssignToTSOBtn.click();
  }
}
