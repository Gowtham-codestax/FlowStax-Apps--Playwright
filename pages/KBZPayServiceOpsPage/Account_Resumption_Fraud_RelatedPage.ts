/**
 * Source (Java): org.kbzPayAppPages.Account_Resumption_Fraud_RelatedPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - js scrollIntoView / scrollIntoView(true) -> locator.evaluate(same JS).
 *  - js click -> forceClick(); Keys.CONTROL+"a" / BACK_SPACE -> keyboard press.
 *  - String.format("%05d", millis % 100000) -> Date.now()%100000 padStart(5).
 *  - Locator xpath strings copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class Account_Resumption_Fraud_RelatedPage extends BasePage {
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

  async Account_Resumption_Fraud_RelatedOption(): Promise<void> {
    const Account_Resumption_Fraud_RelatedOptionBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='Account Resumption_Fraud Related']"
    );
    await Account_Resumption_Fraud_RelatedOptionBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(Account_Resumption_Fraud_RelatedOptionBtn);
  }

  async alternate_phoneNumField(): Promise<void> {
    const Alt_Phm_NumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Alternate Phone number']/following::flt-semantics[2]"
    );
    await Alt_Phm_NumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await Alt_Phm_NumField.evaluate((el: HTMLElement) => el.scrollIntoView(true));
    await this.page.waitForTimeout(1000);
    await this.forceClick(Alt_Phm_NumField);
    await this.page.waitForTimeout(1000);
    await Alt_Phm_NumField.pressSequentially('678942234');
  }

  async kbzRegPhnNumField(): Promise<void> {
    const kbzRegPhnNumFieldc = this.page.locator(
      "xpath=//flt-semantics/span[.='KBZPay Registered Phone Number']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await kbzRegPhnNumFieldc.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await kbzRegPhnNumFieldc.click();
    await this.page.waitForTimeout(100);
    await kbzRegPhnNumFieldc.pressSequentially('678942134');
  }

  async reasonForContactingBackField(): Promise<void> {
    const ReasonforContactingField = this.page.locator(
      "xpath=//flt-semantics/span[.='Reason For Contacting Back *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await ReasonforContactingField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await ReasonforContactingField.click();
    await this.page.waitForTimeout(100);
    await ReasonforContactingField.pressSequentially('Test@123#$5');
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

    // Next Button
    const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
    await NxtBtn.waitFor({ state: 'visible' });
    await NxtBtn.click();
  }

  async escalateBtn(): Promise<void> {
    const EscalateBtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Escalate')]"
    );
    await EscalateBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(3000);
    await EscalateBtn.click();
  }
}
