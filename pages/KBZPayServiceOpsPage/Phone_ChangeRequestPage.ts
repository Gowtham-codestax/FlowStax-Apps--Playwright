import { Page, expect } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class Phone_ChangeRequestPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async Phone_Change_ReqOption(): Promise<void> {
    const Phone_Change_ReqOptionBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='Phone Change Request']"
    );
    await Phone_Change_ReqOptionBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(Phone_Change_ReqOptionBtn);
  }

   async BalanceNumField(): Promise<void> {
    const currentBalNumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Balance']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
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

  
  async phoneChangeReqUpload_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Phone change request form *']/following::flt-semantics[1]"
    );
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
    await this.scrollTo(newPhnNumField);
    await this.page.waitForTimeout(600);
    await newPhnNumField.click();
    await this.page.waitForTimeout(100);
    await newPhnNumField.pressSequentially('678942334');
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
    const BalNumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Balance']/following::flt-semantics[3]/input[@data-semantics-role='text-field']"
    );
    await BalNumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(100);
    await this.forceClick(BalNumField);
    await this.page.waitForTimeout(100);
    await BalNumField.press('Control+a');
    await this.page.waitForTimeout(100);
    await BalNumField.press('Backspace');
    await this.page.waitForTimeout(100);
    await BalNumField.pressSequentially('2233370.700');

    // Next Button
    const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
    await NxtBtn.waitFor({ state: 'visible' });
    await NxtBtn.click();
  }



  
}