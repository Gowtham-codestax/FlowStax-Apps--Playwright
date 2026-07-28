/**
 * Source (Java): org.nonPoAppPages.PettyCashPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - Robot native file-picker sequence in uploadAttachments_Btn -> base.uploadFile()
 *    (which catches the filechooser) using the EXACT input xpath.
 *  - EyeIconbtnClick / notesBtnClick TAB focus navigation kept: keyboard.press('Tab') x32.
 *  - js click -> forceClick(); js scrollIntoView -> locator.evaluate(same JS);
 *    dispatchEvent(MouseEvent) -> locator.evaluate(same JS).
 *  - Menu/Logout retry loops kept at the SAME attempt count (5).
 *  - Locator xpath strings copied EXACTLY. (A couple of invalid scrollIntoView keys in the
 *    Java source — 'behaviour'/'behevior' typos — are corrected to 'behavior' so TS compiles;
 *    behaviour was a no-op in the browser anyway.)
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class PettyCashPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async nonPoProcess_Option(): Promise<void> {
    const NonPo_option = this.page.locator("xpath=//flt-semantics/span[.='Non PO Process']");
    await NonPo_option.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await NonPo_option.click();
  }

  async selectCategory(): Promise<void> {
    const categoryDD = this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
    await this.page.waitForTimeout(500);
    await categoryDD.click();
  }

  async pettyCashOption(): Promise<void> {
    const PettyCash_option = this.page.locator("xpath=//flt-semantics/span[.='Petty Cash']");
    await PettyCash_option.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await PettyCash_option.click();
  }

  async invoice_NumField(): Promise<void> {
    const InvoiceNum = this.page.locator(
      "xpath=(//flt-semantics/span[.='Invoice Number *']/following::flt-semantics/input[@data-semantics-role='text-field'])[1]"
    );
    await InvoiceNum.waitFor({ state: 'visible' });
    await InvoiceNum.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
    await this.page.waitForTimeout(500);
    const invoiceNumber = 'INV' + Date.now();
    await InvoiceNum.pressSequentially(invoiceNumber);
  }

  async invoiceCreationDate(): Promise<void> {
    const CurrentDay = new Date().getDate();

    const CalenderPopup = this.page.locator("xpath=//input[@aria-label='DD-MM-YYYY']");
    await CalenderPopup.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await CalenderPopup.click();

    const today = this.page.locator(
      `xpath=//flt-semantics[contains(text(),'${CurrentDay}') and contains(text(),'Today')]`
    );
    await today.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(100);
    await this.forceClick(today);

    const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
    await OkClick.click();
  }

  async vendorDetailsType(): Promise<void> {
    const VendorDetails = this.page.locator(
      "xpath=(//flt-semantics/span[.='Vendor Details']/following::flt-semantics[.='Please select'])[1]"
    );
    await VendorDetails.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await VendorDetails.click();
  }

  async vendorID(): Promise<void> {
    const VendorID = this.page.locator("xpath=//flt-semantics[.='Vendor Id']");
    await VendorID.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await VendorID.click();
  }

  async vendorName(): Promise<void> {
    const VendorName = this.page.locator("xpath=//flt-semantics[.='Vendor Name']");
    await this.page.waitForTimeout(500);
    await VendorName.click();
  }

  async searchKeyword(): Promise<void> {
    const seacrhKeyword = this.page.locator("xpath=//flt-semantics[.='search Keyword']");
    await this.page.waitForTimeout(300);
    await seacrhKeyword.click();
  }

  async searchFor_vendorIDField(): Promise<void> {
    const VendorIDField = this.page.locator(
      "xpath=//flt-semantics/span[.='Vendor Details']/following::flt-semantics-container/flt-semantics/input[@aria-label='Search for Vendor Id']"
    );
    await this.page.waitForTimeout(500);
    await this.forceClick(VendorIDField);
    await this.page.waitForTimeout(500);
    await VendorIDField.pressSequentially('10000');
  }

  async MGR_PvtLtdiD(): Promise<void> {
    const MgrPvttd = this.page.locator("xpath=//flt-semantics/span[contains(text(),'A.MGR Co. Pte Ltd')]");
    await MgrPvttd.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await MgrPvttd.click();
  }

  async currencyType(): Promise<void> {
    const Vendor = this.page.locator(
      "xpath=(//flt-semantics/span[.='Currency *']/following::flt-semantics[.='Please select'])[1]"
    );
    await Vendor.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await Vendor.click();
  }

  async usd(): Promise<void> {
    const USD = this.page.locator("xpath=//flt-semantics/span[.='USD']");
    await USD.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await USD.click();
  }

  async mpt(): Promise<void> {
    const MPT = this.page.locator("xpath=//flt-semantics/span[.='MPT']");
    await MPT.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await MPT.click();
  }

  async descriptionTxtField(): Promise<void> {
    const DescriptionTxtField = this.page.locator(
      "xpath=(//flt-semantics/span[contains(text(),'Description')]/following::flt-semantics/textarea[@data-semantics-role='text-field'])[1]"
    );
    await DescriptionTxtField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1500);
    await this.forceClick(DescriptionTxtField);
    await this.page.waitForTimeout(400);
    await DescriptionTxtField.pressSequentially('Testing Petty Cash Flow');
  }

  async commodityType(): Promise<void> {
    const Commodity = this.page.locator(
      "xpath=//flt-semantics/span[contains(text(),'Commodity Code')]/following::flt-semantics[@style='position: absolute; overflow: visible; width: 150px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 371, 68); pointer-events: all; z-index: 17;']"
    );
    await Commodity.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await Commodity.click();
  }

  async dummy_Desc_CodePOPtion(): Promise<void> {
    const DummyDec = this.page.locator("xpath=//flt-semantics/span[contains(text(),'Dummy Desc code ')]");
    await DummyDec.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(300);
    await DummyDec.click();
  }

  async atMCR_CodePOPtion(): Promise<void> {
    const ATMCRComoodity = this.page.locator("xpath=//flt-semantics/span[contains(text(),'ATM - NCR')]");
    await ATMCRComoodity.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(300);
    await ATMCRComoodity.click();
  }

  async QuantityField(): Promise<void> {
    const Quantity = this.page.locator(
      "xpath=(//flt-semantics/span[contains(text(),'Quantity')]/following::flt-semantics/textarea[@data-semantics-role='text-field'])[5]"
    );
    await Quantity.waitFor({ state: 'visible' });
    await Quantity.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(500);
    await this.forceClick(Quantity);
    await Quantity.pressSequentially('1000');
  }

  async eachUnitOPtion_RemoveBtn(): Promise<void> {
    const EachUnitRemoveOption = this.page.locator(
      "xpath=//flt-semantics/flt-semantics-container/flt-semantics[@aria-label='Each']/flt-semantics-container/flt-semantics[@role='button']"
    );
    await EachUnitRemoveOption.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(300);
    await EachUnitRemoveOption.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(300);
    await this.forceClick(EachUnitRemoveOption);
    await EachUnitRemoveOption.click();
  }

  async unitOPtion(): Promise<void> {
    const UnitDD = this.page.locator(
      "xpath=//flt-semantics/span[contains(text(),'Unit')]//following::flt-semantics/span[contains(text(),'The field is required')]"
    );
    await UnitDD.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await UnitDD.click();

    const Unit = this.page.locator("xpath=//flt-semantics/span[.='Unit']");
    await Unit.waitFor({ state: 'attached' });
    await Unit.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(200);
    await this.forceClick(Unit);
  }

  async priceField(): Promise<void> {
    const price = this.page.locator(
      "xpath=(//flt-semantics/span[contains(text(),'Price')]/following::flt-semantics/textarea[@data-semantics-role='text-field'])[6]"
    );
    await price.waitFor({ state: 'visible' });
    await price.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(600);
    await this.forceClick(price);
    await this.page.waitForTimeout(300);
    await price.pressSequentially('2500000');
  }

  async showMenuButton(): Promise<void> {
    const menubtn = this.page.locator("xpath=//flt-semantics/span[.='Show menu']");
    await menubtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(300);
    await menubtn.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1000);
    await this.forceClick(menubtn);
  }

  async duplicateRowButton(): Promise<void> {
    const DuplicateRowbtn = this.page.locator("xpath=//flt-semantics[contains(text(),'Duplicate Row')]");
    await DuplicateRowbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(DuplicateRowbtn);
  }

  async deleteRowButton(): Promise<void> {
    const DeleteRowbtn = this.page.locator("xpath=//flt-semantics[contains(text(),'Delete Row')]");
    await DeleteRowbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(DeleteRowbtn);
  }

  async uploadAttachments_Btn(): Promise<void> {
    // Robot native file-picker sequence -> single uploadFile (exact input xpath)
    await this.page.waitForTimeout(1000);
    await this.uploadFile(
      "xpath=(//flt-semantics/span[contains(text(),'Attachment *')]/following::flt-semantics/input[@data-semantics-role='text-field'])[2]"
    );
  }

  async NextButton(): Promise<void> {
    const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
    await NxtBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(400);
    await NxtBtn.click();
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(8000);
    for (let i = 0; i < 32; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(300);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all; z-index: 2;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await this.forceClick(eyeiconbtn);
  }

  async EditIconbtnClick(): Promise<void> {
    const editbtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await editbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(300);
    await editbtn.click();

    const edit_InvoiceNum = this.page.locator(
      "xpath=(//flt-semantics/span[.='Invoice Number *']/following::flt-semantics/input[@data-semantics-role='text-field'])[1]"
    );
    await edit_InvoiceNum.waitFor({ state: 'visible' });
    await edit_InvoiceNum.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );

    // Editing invoice in Editing Page
    await edit_InvoiceNum.press('Control+a');
    await this.page.waitForTimeout(200);
    await edit_InvoiceNum.press('Backspace');
    await this.page.waitForTimeout(100);
    const invoiceNumber = 'INV' + Date.now();
    await edit_InvoiceNum.pressSequentially(invoiceNumber);
  }

  async lineItems_2ndRowEditing(): Promise<void> {
    // 2nd Row DescriptionTxtField editing
    const SeocondDescriptionTxtField = this.page.locator(
      "xpath=(//flt-semantics/span[contains(text(),'Description')]/following::flt-semantics/textarea[@data-semantics-role='text-field'])[10]"
    );
    await SeocondDescriptionTxtField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(2000);
    await SeocondDescriptionTxtField.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.forceClick(SeocondDescriptionTxtField);
    await this.page.waitForTimeout(400);
    await SeocondDescriptionTxtField.press('Control+a');
    await this.page.waitForTimeout(400);
    await SeocondDescriptionTxtField.press('Backspace');
    await this.page.waitForTimeout(400);
    await this.forceClick(SeocondDescriptionTxtField);
    await this.page.waitForTimeout(400);
    await SeocondDescriptionTxtField.pressSequentially('Edit- Testing Petty Cash Flow');

    // 2nd Row Quantity editing
    const SecondRowQuantityfield = this.page.locator(
      "xpath=(//flt-semantics/span[contains(text(),'Quantity')]/following::flt-semantics/textarea[@data-semantics-role='text-field'])[14]"
    );
    await SecondRowQuantityfield.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(2000);
    await SecondRowQuantityfield.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.forceClick(SecondRowQuantityfield);
    await this.page.waitForTimeout(400);
    await SecondRowQuantityfield.press('Control+a');
    await this.page.waitForTimeout(500);
    await SecondRowQuantityfield.press('Backspace');
    await this.page.waitForTimeout(500);
    await this.forceClick(SecondRowQuantityfield);
    await this.page.waitForTimeout(500);
    await SecondRowQuantityfield.pressSequentially('1999');

    // 2nd Row Unit Editing
    const SecondRowUnitRemoveOption = this.page.locator(
      "xpath=//flt-semantics[@aria-label='Unit']/child::*/flt-semantics[@role='button']"
    );
    await SecondRowUnitRemoveOption.waitFor({ state: 'visible' });
    await SecondRowUnitRemoveOption.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(300);
    await this.forceClick(SecondRowUnitRemoveOption);
    await this.page.waitForTimeout(400);

    // 2nd Row Unit option editing
    const UnitDD = this.page.locator(
      "xpath=//flt-semantics/span[contains(text(),'Unit')]//following::flt-semantics/span[contains(text(),'The field is required')]"
    );
    await UnitDD.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await UnitDD.click();

    const Each = this.page.locator("xpath=//flt-semantics/span[.='Each']");
    await Each.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await Each.evaluate((el: HTMLElement) => el.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    await this.page.waitForTimeout(200);
    await this.forceClick(Each);

    // 2nd Row Price editing
    const SecondRowpriceEditing = this.page.locator(
      "xpath=(//flt-semantics/span[contains(text(),'Price')]/following::flt-semantics/textarea[@data-semantics-role='text-field'])[15]"
    );
    await SecondRowpriceEditing.waitFor({ state: 'visible' });
    await SecondRowpriceEditing.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(600);
    await this.forceClick(SecondRowpriceEditing);
    await this.page.waitForTimeout(300);
    await SecondRowpriceEditing.press('Control+a');
    await this.page.waitForTimeout(300);
    await SecondRowpriceEditing.press('Backspace');
    await this.page.waitForTimeout(400);
    await this.forceClick(SecondRowpriceEditing);
    await this.page.waitForTimeout(400);
    await SecondRowpriceEditing.pressSequentially('2900000');
  }

  async backButton(): Promise<void> {
    const BackBtn = this.page.locator(
      "xpath=(//flt-semantics/span[.='Details List']/preceding::flt-semantics[@role='button'])[4]"
    );
    await BackBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(400);
    await BackBtn.click();
  }

  async submitButton(): Promise<void> {
    const SubmitBtn = this.page.locator("xpath=//flt-semantics[.='Submit']");
    await SubmitBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(400);
    await SubmitBtn.click();
  }

  async UpdateSatgeCMNTbox(): Promise<void> {
    const UpdateSatgeCMNtTextField = this.page.locator(
      "xpath=(//flt-semantics/span/following::flt-semantics/textarea[@data-semantics-role='text-field'])[10]"
    );
    await UpdateSatgeCMNtTextField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await UpdateSatgeCMNtTextField.click();
    await UpdateSatgeCMNtTextField.pressSequentially('Done');
  }

  async notesBtnClick(): Promise<void> {
    await this.page.waitForTimeout(4000);
    for (let i = 0; i < 32; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(300);
    }
    const Notesbtn = this.page.locator(
      "xpath=(//flt-semantics-container/flt-semantics[@style='position: absolute; overflow: visible; width: 33px; height: 33px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 66, 13.5); pointer-events: all; z-index: 1;'])[1]"
    );
    await Notesbtn.waitFor({ state: 'visible' });
    await Notesbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await this.forceClick(Notesbtn);
  }

  async MenuButton(): Promise<void> {
    const menuBtn = this.page.locator("xpath=(//flt-semantics[@role='button'])[2]");
    for (let i = 0; i < 5; i++) {
      try {
        await menuBtn.waitFor({ state: 'visible' });
        await menuBtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
        await this.page.waitForTimeout(2000);
        await menuBtn.evaluate((el: HTMLElement) =>
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

  async LogOut(): Promise<void> {
    const logoutDD = this.page.locator("xpath=(//*[@role='group'])[2]");
    for (let i = 0; i < 5; i++) {
      try {
        await logoutDD.waitFor({ state: 'visible' });
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
        await logoutBtn.waitFor({ state: 'visible' });
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

  async downloadPDFButton(): Promise<void> {
    const downloadPdfbtn = this.page.locator("xpath=(//flt-semantics[@role='button'])[last()]");
    await downloadPdfbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(2000);
    await this.forceClick(downloadPdfbtn);
  }
}
