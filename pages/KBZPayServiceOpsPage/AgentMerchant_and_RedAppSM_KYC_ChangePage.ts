/**
 * Source (Java): org.kbzPayAppPages.AgentMerchant_and_RedAppSM_KYC_ChangePage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - All Robot native file-picker sequences -> base.uploadFile() with the EXACT input
 *    xpath (rule 3): kycChangeFormUpload_Btn, shopFrontAndBack_Upload_Btn,
 *    businnesLicence_Upload_Btn, customerFace_Upload_Btn, additionalDoc_Upload_Btn.
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x40, same sleeps.
 *  - js scrollIntoView({...}) -> locator.evaluate(same JS); js click -> forceClick().
 *  - Locator xpath strings copied EXACTLY (incl. any original whitespace).
 */
import { Page, expect } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class AgentMerchant_and_RedAppSM_KYC_ChangePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async selectType(): Promise<void> {
    const TypeDD = this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
    await TypeDD.click();
    await this.page.waitForTimeout(1000);
  }

  async AgentMerchant_RedAppSM_KYC_ChangeOption(): Promise<void> {
    const AgentandRedAppOPtion = this.page.locator(
      "xpath=//flt-semantics/span[.='Agent Merchant and Red App SM KYC Change']"
    );
    await AgentandRedAppOPtion.waitFor({ state: 'visible' });
    await AgentandRedAppOPtion.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(500);
    await this.forceClick(AgentandRedAppOPtion);
  }

  async accountType(): Promise<void> {
    const AccType = this.page.locator(
      "xpath=//flt-semantics/span[.='Account Type *']/following::flt-semantics[1]/span[.='Please select']"
    );
    await AccType.waitFor({ state: 'visible' });
    await AccType.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1500);
    await this.forceClick(AccType);
  }

  async agentAccType(): Promise<void> {
    const AgentAccType = this.page.locator("xpath=//flt-semantics/span[.='Agent']");
    await AgentAccType.waitFor({ state: 'visible' });
    await AgentAccType.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(500);
    await this.forceClick(AgentAccType);
  }

  async merchantAccType(): Promise<void> {
    const MetchantAccType = this.page.locator("xpath=//flt-semantics/span[.='Merchant']");
    await MetchantAccType.waitFor({ state: 'visible' });
    await MetchantAccType.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(500);
    await this.forceClick(MetchantAccType);
  }

  async redAppSimtAccType(): Promise<void> {
    const RedappSIMtAccType = this.page.locator("xpath=//flt-semantics/span[.='Red App SM']");
    await RedappSIMtAccType.waitFor({ state: 'visible' });
    await RedappSIMtAccType.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(500);
    await this.forceClick(RedappSIMtAccType);
  }

  async agentKYC_changeType(): Promise<void> {
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

    // Close option
    const CloseSelect = this.page.locator(
      "xpath=//flt-semantics/span[.='KYC Change Type (Agent) *']/following::flt-semantics[@role='group']"
    );
    await CloseSelect.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(CloseSelect);
  }

  async kycChangeFormUpload_Btn(): Promise<void> {
    // Robot file-picker sequence -> single uploadFile (exact input xpath)
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='KYC Change Form *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async oldKycDataTxtField(): Promise<void> {
    const oldKYCTxtField = this.page.locator(
      "xpath=//flt-semantics/span[.='Old KYC Data']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await oldKYCTxtField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1500);
    await oldKYCTxtField.click();
    await this.page.waitForTimeout(300);
    await oldKYCTxtField.pressSequentially('Test');
  }

  async newycDataTxtField(): Promise<void> {
    const NewTxtField = this.page.locator(
      "xpath=//flt-semantics/span[.='New KYC Data *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await NewTxtField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1500);
    await NewTxtField.click();
    await this.page.waitForTimeout(300);
    await NewTxtField.pressSequentially('Test');
  }

  async shopFrontAndBack_Upload_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Shop Photo (Front & Back) *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async businnesLicence_Upload_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Business Licence *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async shortCodeTxtField(): Promise<void> {
    const SHORTCODETxtField = this.page.locator(
      "xpath=//flt-semantics/span[.='Short Code *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await SHORTCODETxtField.waitFor({ state: 'visible' });
    await SHORTCODETxtField.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1200);
    await SHORTCODETxtField.click();
    await this.page.waitForTimeout(300);
    await SHORTCODETxtField.pressSequentially('1007');
  }

  async shopName_TxtField(): Promise<void> {
    const SHOPNAMETxtField = this.page.locator(
      "xpath=//flt-semantics/span[.='Shop Name *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await SHOPNAMETxtField.waitFor({ state: 'visible' });
    await SHOPNAMETxtField.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1200);
    await SHOPNAMETxtField.click();
    await this.page.waitForTimeout(300);
    await SHOPNAMETxtField.pressSequentially('Test');
  }

  async address_TxtField(): Promise<void> {
    const Addrestxtfeild = this.page.locator(
      "xpath=//flt-semantics/span[.='Address *']/following::flt-semantics[1]/textarea[@data-semantics-role='text-field']"
    );
    await Addrestxtfeild.waitFor({ state: 'visible' });
    await Addrestxtfeild.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1200);
    await Addrestxtfeild.click();
    await this.page.waitForTimeout(300);
    await Addrestxtfeild.pressSequentially('Test');
  }

  async customerFace_Upload_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Customer Face Photo *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async currentBalanceDD(): Promise<void> {
    const Curentbal = this.page.locator(
      "xpath=//flt-semantics/span[.='Current Balance *']/following::flt-semantics[contains(text(),'MMK')]"
    );
    await Curentbal.waitFor({ state: 'visible' });
    await Curentbal.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1200);
    await this.forceClick(Curentbal);
  }

  async usdOption(): Promise<void> {
    const USD = this.page.locator("xpath=//flt-semantics[contains(text(),'USD')]");
    await USD.waitFor({ state: 'visible' });
    await USD.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(600);
    await this.forceClick(USD);
  }

  async inrOption(): Promise<void> {
    const INR = this.page.locator("xpath=//flt-semantics[contains(text(),'INR')]");
    await INR.waitFor({ state: 'visible' });
    await INR.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(600);
    await this.forceClick(INR);
  }

  async currentBalanceTXTField(): Promise<void> {
    const CurentbalTXT = this.page.locator(
      "xpath=//flt-semantics/span[.='Current Balance *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await CurentbalTXT.waitFor({ state: 'visible' });
    await CurentbalTXT.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1200);
    await CurentbalTXT.click(); // focuses the field (snapshot shows it becomes [active])
    await this.page.waitForTimeout(300);
    // Type via the keyboard into the focused field. pressSequentially/fill re-run
    // input-level actionability on this Flutter currency input and stall; keyboard.type
    // sends keystrokes to whatever is focused (like Selenium sendKeys).
    await this.page.keyboard.type('222222');
   // await expect(CurentbalTXT).toHaveValue('222222'); // retries until Flutter commits it
  }

  async qalStatusDD(): Promise<void> {
    const QALStatus = this.page.locator(
      "xpath=//flt-semantics/span[.='QAL Status *']/following::flt-semantics/span[.='Please select']"
    );
    await QALStatus.waitFor({ state: 'visible' });
    await QALStatus.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1500);
    await this.forceClick(QALStatus);
  }

  async yesOption(): Promise<void> {
    const YES = this.page.locator("xpath=//flt-semantics/span[.='Yes']");
    await YES.waitFor({ state: 'visible' });
    await YES.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(600);
    await this.forceClick(YES);
  }

  async NoOption(): Promise<void> {
    const NO = this.page.locator("xpath=//flt-semantics/span[.='No']");
    await NO.waitFor({ state: 'visible' });
    await NO.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(600);
    await this.forceClick(NO);
  }

  async additionalDoc_Upload_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Additional Document']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async NextButton(): Promise<void> {
    const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
    await NxtBtn.waitFor({ state: 'visible' });
    await NxtBtn.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1200);
    await this.forceClick(NxtBtn);
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
    await editbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1300);
    await this.forceClick(editbtn);

    const currentBalNumField = this.page.locator(
      "xpath= //flt-semantics/span[.='Current Balance *']/following::flt-semantics[3]/input[@data-semantics-role='text-field']"
    );
    await currentBalNumField.waitFor({ state: 'visible' });
    await currentBalNumField.press('Control+a');
    await this.page.waitForTimeout(300);
    await currentBalNumField.press('Backspace');
    await this.page.waitForTimeout(200);
    await currentBalNumField.click();
    await currentBalNumField.pressSequentially('67' + String(Date.now() % 10000000).padStart(7, '0'));
  }

  async assignToTSOBtn(): Promise<void> {
    const AssignToTSOBtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Assign to TSO')]"
    );
    await AssignToTSOBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1500);
    await AssignToTSOBtn.click();
  }
}
