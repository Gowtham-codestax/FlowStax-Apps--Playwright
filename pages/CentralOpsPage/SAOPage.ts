/**
 * Source (Java): org.CentralOpsPages.SAOPage
 * Migrated to: Playwright + TypeScript (Page Object)
 * - Keys.CONTROL+"a" -> press('Control+a'); BACK_SPACE -> press('Backspace').
 * - String.format("%05d", millis%100000) -> Date.now()%100000 padStart(5).
 * - js focus/scrollIntoView -> locator.evaluate(); xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class SAOPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async editIconClick(): Promise<void> {
    const EditBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await EditBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await EditBtn.click();
    await this.page.waitForTimeout(3000);

    // EDITING Passport Number
    const PassNum = this.page.locator(
      "xpath=//flt-semantics/span[.='Passport Number *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await PassNum.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await PassNum.evaluate((el: HTMLElement) => el.focus());
    await this.page.waitForTimeout(200);
    await PassNum.click();

    await PassNum.press('Control+a');
    await this.page.waitForTimeout(200);
    await PassNum.press('Backspace');
    await this.page.waitForTimeout(200);
    await PassNum.click();
    await PassNum.pressSequentially('67' + String(Date.now() % 100000).padStart(5, '0'));
    await this.page.waitForTimeout(1000);

    // Face Photo checkbox
    const Face_Photo_Checkbox = this.page.locator(
      "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Face Photo'][@role='checkbox']"
    );
    await Face_Photo_Checkbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await Face_Photo_Checkbox.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth' })
    );
    await this.page.waitForTimeout(150);
    await Face_Photo_Checkbox.click();

    // Customer Category (Minor) checkbox
    const Customer_Category_Minor__Checkbox = this.page.locator(
      "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Customer Category (Minor)'][@role='checkbox']"
    );
    await Customer_Category_Minor__Checkbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await Customer_Category_Minor__Checkbox.click();
  }

  async applicationCorrectedBtn(): Promise<void> {
    const appcorrectBtn = this.page.locator(
      "xpath=//flt-semantics[contains(.,'Application Corrected')][@role='button']"
    );
    await appcorrectBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(3000);
    await appcorrectBtn.waitFor({ state: 'visible' });
    await appcorrectBtn.click();
  }
}
