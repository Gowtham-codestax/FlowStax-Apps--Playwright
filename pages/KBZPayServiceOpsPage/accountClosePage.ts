/**
 * Source (Java): org.kbzPayAppPages.accountClosePage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - Single injected Playwright `page` replaces WebDriver/WebDriverWait/Actions/JS/Robot.
 *  - Native file-picker Robot TAB/DOWN/ENTER sequences replaced by base.uploadFile()
 *    using the EXACT input xpath from the Java locator (migration rule 3). The preceding
 *    click + Thread.sleep that only existed to open the OS dialog are dropped, since
 *    setInputFiles needs no dialog.
 *  - EyeIconbtnClick TAB *focus navigation* kept as keyboard.press('Tab') with the SAME
 *    count (41) and same inter-press sleeps.
 *  - js.executeScript click -> forceClick(); scrollIntoView -> locator.evaluate(same JS);
 *    dispatchEvent(MouseEvent) -> locator.evaluate(same JS).
 *  - Menu/Logout retry loops kept at the SAME attempt count (5).
 *  - Locator xpath strings copied EXACTLY.
 */
import { Page, expect } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class accountClosePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async kbzPayServiceOPtion(): Promise<void> {
    const KBZBtn = this.page.locator("xpath=//flt-semantics/span[.='KBZPay Service Operations']");
    await KBZBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(200);
    await KBZBtn.click();
  }

  async selectType(): Promise<void> {
    const TypeDD = this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
    await TypeDD.click();
    await this.page.waitForTimeout(1000);
  }

  async accCloseOption(): Promise<void> {
    const Accountcloseoption = this.page.locator("xpath=//flt-semantics/span[.='Account Close']");
    await Accountcloseoption.waitFor({ state: 'attached' });
    await Accountcloseoption.waitFor({ state: 'visible' });
    await Accountcloseoption.click();
  }

  async branchPhnnUmberField(): Promise<void> {
    const BranhcPhnnumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Branch Phone Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await BranhcPhnnumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await BranhcPhnnumField.click();
    await this.page.waitForTimeout(200);
    await BranhcPhnnumField.pressSequentially('678976777');
  }

  async cusName(): Promise<void> {
    const CusNameField = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer name *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await CusNameField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await CusNameField.click();
    await this.page.waitForTimeout(100);
    await CusNameField.pressSequentially('Test Name');
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
    await this.page.waitForTimeout(200);
  }

  async UploadCustomerFace(): Promise<void> {
    // Robot native file-picker sequence -> single uploadFile (exact input xpath)
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Customer Face Photo *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async nrcIDproof(): Promise<void> {
    const NRCIDproofRdioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='NRC / မှတ်ပုံတင်']/preceding::flt-semantics[@role='radio']"
    );
    await NRCIDproofRdioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await NRCIDproofRdioBtn.click();
  }

  async passportIDproof(): Promise<void> {
    const passportIDproofRdioBtn = this.page.locator("xpath=(//flt-semantics[@role='radio'])[2]");
    await passportIDproofRdioBtn.waitFor({ state: 'visible' });
    await passportIDproofRdioBtn.click();
    await this.page.waitForTimeout(200);
  }

  async passportNumField(): Promise<void> {
    const Passport_NumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Passport number *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await Passport_NumField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    const PassNum = '67' + String(Date.now() % 10000000).padStart(7, '0');
    // Actions.moveToElement().click().sendKeys().perform()
    await Passport_NumField.hover();
    await Passport_NumField.click();
    await Passport_NumField.pressSequentially(PassNum);
  }

  async uploadNewPassport_PageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload new passport *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async uploadOldPassport_PageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload old passport']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async addressFiled(): Promise<void> {
    const AddressField = this.page.locator(
      "xpath=//flt-semantics/span[.='Address *']/following::flt-semantics[1]/textarea[@data-semantics-role='text-field']"
    );
    await AddressField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(100);
    await AddressField.click();
    await this.page.waitForTimeout(100);
    await AddressField.pressSequentially('Test Address');
  }

  async fathersNameField(): Promise<void> {
    const FathernameField = this.page.locator(
      "xpath=//flt-semantics/span[contains(.,'Fathe')]/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await FathernameField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(100);
    await FathernameField.click();
    await this.page.waitForTimeout(100);
    await FathernameField.pressSequentially('Test');
  }

  async currentBalanceNumFiedl(): Promise<void> {
    const currentBalNumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Current Balance *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await currentBalNumField.waitFor({ state: 'visible' });
    await currentBalNumField.click(); // focuses the currency field 
    await this.page.waitForTimeout(1000);
    // keyboard.type into the focused field: pressSequentially/fill re-run input-level
    // actionability on this Flutter currency input and stall (like Selenium sendKeys).
    await this.page.keyboard.type('2000000');
   // await expect(currentBalNumField).toHaveValue('2000000');
  }

  async phoneNumField(): Promise<void> {
    const Phm_NumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Phone number *']/following::flt-semantics[3]"
    );
    await Phm_NumField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await Phm_NumField.hover();
    await Phm_NumField.click();
    await Phm_NumField.pressSequentially('678976877');
  }

  async bankStaffApprovalformBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Bank Staff Approval Form *']/following::flt-semantics[1]"
    );
  }

  async infoOf3transaction_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Info of 3 latest transactions']/following::flt-semantics[1]"
    );
  }

  async sparrowTicketNumField(): Promise<void> {
    const sparrowTicketField = this.page.locator(
      "xpath=//flt-semantics/span[contains(.,'Complaint Ticket Number from Sparrow')]/following::input[@data-semantics-role='text-field'][1]"
    );
    await sparrowTicketField.waitFor({ state: 'visible' });
    await sparrowTicketField.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await this.forceClick(sparrowTicketField);
    await this.page.waitForTimeout(500);
    await sparrowTicketField.pressSequentially('3456789876');
  }

  async oldNRC_NumField(): Promise<void> {
    const oldNRCNumField = this.page.locator(
      "xpath=//flt-semantics/span[contains(.,'Old NRC Number')]/following::input[@data-semantics-role='text-field'][1]"
    );
    await oldNRCNumField.waitFor({ state: 'visible' });
    await oldNRCNumField.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await oldNRCNumField.evaluate((el: HTMLElement) => el.focus());
    await oldNRCNumField.pressSequentially('3457776');
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

  async sparrowTicker_DateandTime(): Promise<void> {
    const CurrentDay = new Date().getDate();

    const sparrrowDateandTime_Popup = this.page.locator(
      "xpath=//flt-semantics/span[.='Date and Time (For Sparrow Ticket)']/following::flt-semantics[1]"
    );
    await sparrrowDateandTime_Popup.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await sparrrowDateandTime_Popup.waitFor({ state: 'visible' });
    await sparrrowDateandTime_Popup.click();

    const today = this.page.locator(
      `xpath=//flt-semantics[contains(text(),'${CurrentDay}') and contains(text(),'Today')]`
    );
    await today.waitFor({ state: 'visible' });
    await this.forceClick(today);

    const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
    await OkClick.click();
    await this.page.waitForTimeout(500);

    const secondOk = this.page.locator("xpath=(//flt-semantics[.='OK'])[last()]");
    await secondOk.waitFor({ state: 'visible' });
    await this.forceClick(secondOk);
    await this.page.waitForTimeout(1000);
  }

  async alternate_phoneNumField(): Promise<void> {
    const Alt_Phm_NumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Alternate Phone number']/following::flt-semantics[3]"
    );
    await Alt_Phm_NumField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await Alt_Phm_NumField.hover();
    await Alt_Phm_NumField.click();
    await Alt_Phm_NumField.pressSequentially('4356789');
  }

  async reasonTxtFiled(): Promise<void> {
    const reason = this.page.locator(
      "xpath=//flt-semantics/span[contains(.,'Reason')]/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await reason.waitFor({ state: 'visible' });
    await reason.click();
    await this.page.waitForTimeout(100);
    await reason.pressSequentially('Test');
  }

  async NextButton(): Promise<void> {
    const NextBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
    await NextBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(50);
    await NextBtn.click();
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

  async EditIconbtnClick(): Promise<void> {
    const editbtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await editbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await editbtn.click();

    // Editing in Editing Page
    const BranhcPhnnumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Branch Phone Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await BranhcPhnnumField.waitFor({ state: 'visible' });

    await BranhcPhnnumField.press('Control+a');
    await this.page.waitForTimeout(300);
    await BranhcPhnnumField.press('Backspace');
    await this.page.waitForTimeout(200);
    await BranhcPhnnumField.click();
    await BranhcPhnnumField.pressSequentially('67' + String(Date.now() % 10000000).padStart(7, '0'));
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
    await this.page.waitForTimeout(500);
    await this.forceClick(yes);
  }

  async signatureVerfied_YesRadioBtn(): Promise<void> {
    const yes = this.page.locator(
      "xpath=//flt-semantics/span[.='Is signature verified *']/following::flt-semantics[1][@role='radio']"
    );
    await yes.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await this.forceClick(yes);
  }

  async docChecked_YesRadioBtn(): Promise<void> {
    const yes = this.page.locator(
      "xpath=//flt-semantics/span[.='Are documents checked for accuracy *']/following::flt-semantics[@role='radio'][1]"
    );
    await yes.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await this.forceClick(yes);
  }

  async UpdateStage_Commentsection(): Promise<void> {
    const UpdatestageCMNTbox = this.page.locator(
      "xpath=//textarea[@data-semantics-role[contains(.,'text-field')]]"
    );
    await UpdatestageCMNTbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1200);
    await this.forceClick(UpdatestageCMNTbox);
    await this.page.waitForTimeout(100);
    await UpdatestageCMNTbox.pressSequentially('Test');
  }

  async MenuButton(): Promise<void> {
    const menuBtn = this.page.locator("xpath=(//flt-semantics[@role='button'])[2]");
    for (let i = 0; i < 5; i++) {
      try {
        await menuBtn.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(3000);
        await this.forceClick(menuBtn);
        console.log('Menu clicked');
        break;
      } catch (e) {
        console.log('Retrying menu click : ' + i);
        await this.page.waitForTimeout(5000);
      }
    }
  }

  async LogOut(): Promise<void> {
    const logoutDD = this.page.locator("xpath=(//*[@role='group'])[2]");
    for (let i = 0; i < 5; i++) {
      try {
        await logoutDD.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(2000);
        await logoutDD.evaluate((el: HTMLElement) =>
          el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        );
        break;
      } catch (e) {
        console.log('Retry logout dropdown : ' + i);
      }
    }

    const logoutBtn = this.page.locator("xpath=//*[text()='Logout']");
    for (let i = 0; i < 5; i++) {
      try {
        await logoutBtn.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(3000);
        await logoutBtn.evaluate((el: HTMLElement) =>
          el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        );
        console.log('Logout success');
        break;
      } catch (e) {
        console.log('Retry logout button : ' + i);
        await this.page.waitForTimeout(2000);
      }
    }
  }

  async applicationCorrectedButton(): Promise<void> {
    const applicationcrtbtn = this.page.locator(
      "xpath=//flt-semantics[contains(text(),'Application Corrected')]"
    );
    await applicationcrtbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(applicationcrtbtn);
  }

  async downloadPDFButton(): Promise<void> {
    const downloadPdfbtn = this.page.locator("xpath=(//flt-semantics[@role='button'])[last()]");
    await downloadPdfbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(2000);
    await this.forceClick(downloadPdfbtn);
  }
}
