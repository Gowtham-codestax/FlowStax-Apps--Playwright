/**
 * Source (Java): org.kbzPayAppPages.Phone_Change_ReqAndDevice_Change_ReqPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - Robot file-picker sequences -> base.uploadFile() with EXACT input xpath.
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x41, same sleeps (300ms).
 *  - String.format("%05d", millis%100000) -> Date.now()%100000 padStart(5).
 *  - js click/scrollIntoView -> forceClick()/locator.evaluate(). xpath copied EXACTLY.
 */
import { Page, expect } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class Phone_Change_ReqAndDevice_Change_ReqPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async Phone_Change_ReqAndDevice_Change_ReqOption(): Promise<void> {
    const Phone_Change_ReqAndDevice_Change_ReqOptionBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='Phone Change Request + Device Change Request']"
    );
    await Phone_Change_ReqAndDevice_Change_ReqOptionBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(Phone_Change_ReqAndDevice_Change_ReqOptionBtn);
  }

  async branchPhnnUmberField(): Promise<void> {
    const BranhcPhnnumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Branch Phone Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await BranhcPhnnumField.waitFor({ state: 'visible' });
    await BranhcPhnnumField.click();
    await this.page.waitForTimeout(500);
    await BranhcPhnnumField.pressSequentially('678976777');
  }

  async cusName(): Promise<void> {
    const CusNameField = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer name *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await CusNameField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await CusNameField.click();
    await this.page.waitForTimeout(100);
    await CusNameField.pressSequentially('Test Name');
  }

  async nrcIDproof(): Promise<void> {
    const NRCIDproofRdioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC / မှတ်ပုံတင်']/preceding::flt-semantics[@role='radio']"
    );
    await NRCIDproofRdioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await NRCIDproofRdioBtn.click();
  }

  async nrcNumberFields(): Promise<void> {
    // DistrictOption
    const districtBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC number *']/following::flt-semantics[@aria-label='Districts']"
    );
    await districtBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(districtBtn);

    const fifthoption = this.page.locator("xpath=//flt-semantics/span[.='5']");
    await this.page.waitForTimeout(10);
    await fifthoption.click();

    // Town Selection
    const TownSHipBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC number *']/following::flt-semantics[@aria-label='Townships']"
    );
    await TownSHipBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(TownSHipBtn);

    const secondoption = this.page.locator("xpath=//flt-semantics/span[.='BAMANA']");
    await this.page.waitForTimeout(10);
    await secondoption.click();

    // button
    const Btn = this.page.locator(
      "xpath=(//flt-semantics/span[.='NRC number *']/following::flt-semantics[10])[last()]"
    );
    await Btn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Btn);

    const P_option = this.page.locator("xpath=//flt-semantics/span[.='N']");
    await this.page.waitForTimeout(10);
    await P_option.click();

    // NUMBER FIELD
    const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics/input[@aria-label='Number']");
    await NumberTxtFieldBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
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

  async uploadCustomerFacePhoto(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Customer Face Photo *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async currentBalanceNumFiedl(): Promise<void> {
    const currentBalNumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Current Balance *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await currentBalNumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await currentBalNumField.click(); // focuses the currency field
    await this.page.waitForTimeout(500);
    // keyboard.type into the focused field: pressSequentially/fill re-run input-level
    // actionability on this Flutter currency input and stall (like Selenium sendKeys).
    await this.page.keyboard.type('2000000');
   // await expect(currentBalNumField).toHaveValue('2000000');
  }

  async infoOf3transaction_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Info of 3 latest transactions']/following::flt-semantics[1]"
    );
  }

  async reasonTxtFiled(): Promise<void> {
    const reason = this.page.locator(
      "xpath=//flt-semantics/span[contains(.,'Reason')]/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await reason.waitFor({ state: 'visible' });
    await reason.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await reason.click();
    await this.page.waitForTimeout(200);
    await reason.pressSequentially('Test');
  }

  async bankStaffApprovalformBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Bank Staff Approval Form *']/following::flt-semantics[1]"
    );
  }

  async oldHandsetModelField(): Promise<void> {
    const OldHandsetModelField = this.page.locator(
      "xpath=//flt-semantics/span[.='Old Handset Model *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await OldHandsetModelField.waitFor({ state: 'visible' });
    await OldHandsetModelField.click();
    await this.page.waitForTimeout(500);
    await OldHandsetModelField.pressSequentially('67897676GH');
  }

  async kbzRegPhnNumField(): Promise<void> {
    const kbzRegPhnNumFieldc = this.page.locator(
      "xpath=//flt-semantics/span[.='KBZPay Registered Phone Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await kbzRegPhnNumFieldc.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(600);
    await kbzRegPhnNumFieldc.pressSequentially('678942134');
  }

  async oldPhnNumField(): Promise<void> {
    const OldPhnNumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Old phone number']/following::flt-semantics[3]/input[@data-semantics-role='text-field']"
    );
    await OldPhnNumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(600);
    await OldPhnNumField.pressSequentially('678942334');
  }

  async newPhnNumField(): Promise<void> {
    const newPhnNumField = this.page.locator(
      "xpath=//flt-semantics/span[.='New phone number *']/following::flt-semantics[3]/input[@data-semantics-role='text-field']"
    );
    await newPhnNumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(600);
    await newPhnNumField.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await newPhnNumField.click();
    await this.page.waitForTimeout(100);
    await newPhnNumField.pressSequentially('678942334');
  }

  async uploadDocUrl(): Promise<void> {
    const uploadDocURLField = this.page.locator(
      "xpath=//flt-semantics/span[.='Upload document URL']/following::flt-semantics/input[@data-semantics-role='text-field']"
    );
    await uploadDocURLField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(600);
    await uploadDocURLField.click();
    await this.page.waitForTimeout(10);
    await uploadDocURLField.pressSequentially(
      'https://docs.google.com/spreadsheets/d/1Fc8TtjwdAeo03w65hhYL_l0b0jNVHZ26/edit?gid=1236133278#gid=1236133278'
    );
  }

  async EditIconClick(): Promise<void> {
    // EDITING NRC number field
    const EditBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await EditBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.page.waitForTimeout(300);
    await this.forceClick(EditBtn);
    await this.page.waitForTimeout(100);

    // NUMBER FIELD
    const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics/input[@aria-label='Number']");
    await NumberTxtFieldBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await NumberTxtFieldBtn.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(800);
    await this.forceClick(NumberTxtFieldBtn);
    await this.page.waitForTimeout(300);

    await this.forceClick(NumberTxtFieldBtn);
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

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(15000);
    for (let i = 0; i < 41; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(300);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await this.forceClick(eyeiconbtn);
  }

  async assignToTSOBtn(): Promise<void> {
    const AssignToTSOBtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Assign to TSO')]"
    );
    await AssignToTSOBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(3000);
    await AssignToTSOBtn.click();
  }

  async recommedUploadLeter_YesRadioBtn(): Promise<void> {
    const yes = this.page.locator(
      "xpath=//flt-semantics/span[.='Is Recommendation letter uploaded *']/following::flt-semantics[1][@role='radio']"
    );
    await yes.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(yes);
   // await yes.check();
  }

  async signatureVerfied_YesRadioBtn(): Promise<void> {
    const yes = this.page.locator(
      "xpath=//flt-semantics/span[.='Is signature verified *']/following::flt-semantics[1][@role='radio']"
    );
    await yes.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await this.forceClick(yes);
   // await yes.check();
  }

  async docChecked_YesRadioBtn(): Promise<void> {
    const yes = this.page.locator(
      "xpath=//flt-semantics/span[.='Are documents checked for accuracy *']/following::flt-semantics[@role='radio'][1]"
    );
    await yes.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await this.forceClick(yes);
    //await yes.check();
  }

  async UpdateStage_Commentsection(): Promise<void> {
    const UpdatestageCMNTbox = this.page.locator(
      "xpath=//textarea[@data-semantics-role[contains(.,'text-field')]]"
    );
    await UpdatestageCMNTbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(2000);
    await this.forceClick(UpdatestageCMNTbox);
    await this.page.waitForTimeout(500);
    await UpdatestageCMNTbox.pressSequentially('Test');
  }
}
