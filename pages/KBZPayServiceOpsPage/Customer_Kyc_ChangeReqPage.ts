/**
 * Source (Java): org.kbzPayAppPages.Customer_Kyc_ChangeReqPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - All Robot native file-picker sequences -> base.uploadFile() with EXACT input xpath.
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x40, same sleeps.
 *  - js scrollIntoView -> locator.evaluate(same JS); js click -> forceClick().
 *  - Locator xpath strings copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class Customer_Kyc_ChangeReqPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async customer_KYC_ChangeOption(): Promise<void> {
    const customerKycChangeOPtion = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer KYC Change Request']"
    );
    await customerKycChangeOPtion.waitFor({ state: 'visible' });
    await customerKycChangeOPtion.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(500);
    await this.forceClick(customerKycChangeOPtion);
  }

  async fatherNameTXTField(): Promise<void> {
    const FatherNametXT = this.page.locator(
      "xpath=(//flt-semantics/input[@data-semantics-role='text-field'])[12]"
    );
    await FatherNametXT.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await FatherNametXT.click();
    await this.page.waitForTimeout(300);
    await FatherNametXT.pressSequentially('Test');
  }

  async cusKYC_changeType(): Promise<void> {
    const Select = this.page.locator("xpath=//flt-semantics/span[.='Select']");
    await Select.waitFor({ state: 'visible' });
    await Select.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(500);
    await this.forceClick(Select);
  }

  async SelectAllCheckBox_KYC_changeType_Agent(): Promise<void> {
    const SelectallCheckBox = this.page.locator(
      "xpath=//flt-semantics/span[.='Select All']/preceding::flt-semantics[@role='checkbox']"
    );
    await SelectallCheckBox.waitFor({ state: 'visible' });
    await SelectallCheckBox.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1000);
    await this.forceClick(SelectallCheckBox);

    const CloseSelect = this.page.locator(
      "xpath=//flt-semantics/span[.='KYC Change Type *']/following::flt-semantics[@role='group']"
    );
    await CloseSelect.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1300);
    await this.forceClick(CloseSelect);
  }

  async kycChangeFormUpload_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='KYC Change Form *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async LastinfoTransactionFormUpload_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Info of 3 latest transactions']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
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
    await CusNameField.waitFor({ state: 'visible' });
    await CusNameField.click();
    await this.page.waitForTimeout(500);
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
    await this.page.waitForTimeout(500);
  }

  async address_TxtField(): Promise<void> {
    const Addrestxtfeild = this.page.locator(
      "xpath=//flt-semantics/span[.='Address *']/following::flt-semantics[1]/textarea[@data-semantics-role='text-field']"
    );
    await Addrestxtfeild.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1200);
    await Addrestxtfeild.click();
    await this.page.waitForTimeout(300);
    await Addrestxtfeild.pressSequentially('Test');
  }

  async UploadCustomerFace(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Customer Face Photo *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async additionalDoc_Upload_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Additional Document']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async passportIDproof(): Promise<void> {
    const passportIDproofRdioBtn = this.page.locator("xpath=(//flt-semantics[@role='radio'])[2]");
    await passportIDproofRdioBtn.waitFor({ state: 'visible' });
    await passportIDproofRdioBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async passportNumField(): Promise<void> {
    const Passport_NumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Passport number *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await Passport_NumField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    const PassNum = '67' + String(Date.now() % 10000000).padStart(7, '0');
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
    await AddressField.waitFor({ state: 'visible' });
    await AddressField.click();
    await this.page.waitForTimeout(500);
    await AddressField.pressSequentially('12 Dummy Address');
  }

  async fathersNameFiedl(): Promise<void> {
    const FathernameField = this.page.locator(
      "xpath=//flt-semantics/span[.='Address *']/following::flt-semantics[3]/input[@data-semantics-role='text-field']"
    );
    await FathernameField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(FathernameField);
    await this.page.waitForTimeout(500);
    await FathernameField.pressSequentially('Test');
  }

  async currentBalanceNumFiedl(): Promise<void> {
    const currentBalNumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Current Balance *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await currentBalNumField.waitFor({ state: 'visible' });
    await currentBalNumField.click();
    await this.page.waitForTimeout(500);
    await currentBalNumField.pressSequentially('2000000');
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

  async sparrowTicker_DateandTime(): Promise<void> {
    const CurrentDay = new Date().getDate();

    const SparrrowDateandTime_Popup = this.page.locator(
      "xpath=//flt-semantics/span[.='Date and Time (For Sparrow Ticket)']/following::flt-semantics[1]"
    );
    await SparrrowDateandTime_Popup.waitFor({ state: 'visible' });
    await SparrrowDateandTime_Popup.click();

    const today = this.page.locator(
      `xpath=//flt-semantics[contains(text(),'${CurrentDay}') and contains(text(),'Today')]`
    );
    await today.waitFor({ state: 'visible' });
    await this.forceClick(today);

    const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
    await OkClick.click();
    await this.page.waitForTimeout(1000);

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
    await reason.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await reason.click();
    await this.page.waitForTimeout(500);
    await reason.pressSequentially('Test');
  }

  async oldKycDataTxtField(): Promise<void> {
    const oldKYCTxtField = this.page.locator(
      "xpath=//flt-semantics/span[.='Old KYC Data']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await oldKYCTxtField.waitFor({ state: 'visible' });
    await oldKYCTxtField.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await oldKYCTxtField.click();
    await this.page.waitForTimeout(300);
    await oldKYCTxtField.pressSequentially('Test');
  }

  async newycDataTxtField(): Promise<void> {
    const NewTxtField = this.page.locator(
      "xpath=//flt-semantics/span[.='New KYC Data *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await NewTxtField.waitFor({ state: 'visible' });
    await NewTxtField.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1000);
    await NewTxtField.click();
    await this.page.waitForTimeout(300);
    await NewTxtField.pressSequentially('Test');
  }

  async NextButton(): Promise<void> {
    const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
    await NxtBtn.waitFor({ state: 'visible' });
    await NxtBtn.click();
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(15000);
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

  async EditIconbtnClick(): Promise<void> {
    const editbtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await editbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await editbtn.click();

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
    await this.page.waitForTimeout(1500);
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
    await this.page.waitForTimeout(2000);
    await this.forceClick(UpdatestageCMNTbox);
    await this.page.waitForTimeout(500);
    await UpdatestageCMNTbox.pressSequentially('Okay');
  }

  async downloadPDFButton(): Promise<void> {
    const downloadPdfbtn = this.page.locator("xpath=(//flt-semantics[@role='button'])[last()]");
    await downloadPdfbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(2000);
    await this.forceClick(downloadPdfbtn);
  }
}
