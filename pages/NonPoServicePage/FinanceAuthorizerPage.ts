/**
 * Source (Java): org.nonPoAppPages.FinanceAuthorizerPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x32, same sleeps.
 *  - js click -> forceClick where used; locator xpath strings copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class FinanceAuthorizerPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async nonPoProcess_Option(): Promise<void> {
    const NonPo_option = this.page.locator("xpath=//flt-semantics/span[.='Non PO Process']");
    await NonPo_option.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(200);
    await NonPo_option.click();
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(4000);
    for (let i = 0; i < 32; i++) {
      await this.page.keyboard.press('Tab');
    //  await this.page.waitForTimeout(300);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all; z-index: 2;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await this.forceClick(eyeiconbtn);
  }

  async approveButton(): Promise<void> {
    const ApproveBtn = this.page.locator("xpath=//flt-semantics[.='Approve']");
    await ApproveBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(400);
    await ApproveBtn.click();
  }

  async denyButton(): Promise<void> {
    const DenyBtn = this.page.locator("xpath=//flt-semantics[.='Deny']");
    await DenyBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(400);
    await DenyBtn.click();
  }

  async reconileButton(): Promise<void> {
    const ReconileBtn = this.page.locator("xpath=//flt-semantics[.='Reconcile']");
    await ReconileBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(400);
    await ReconileBtn.click();
  }

  async rejectButton(): Promise<void> {
    const RejectBtn = this.page.locator("xpath=//flt-semantics[.='Reject']");
    await RejectBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(400);
    await RejectBtn.click();
  }

  async UpdateSatgeCMNTbox(): Promise<void> {
    const UpdateSatgeCMNtTextField = this.page.locator(
      "xpath=//flt-semantics/span[.='Comments']/following::flt-semantics/textarea[@data-semantics-role='text-field']"
    );
    await UpdateSatgeCMNtTextField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await UpdateSatgeCMNtTextField.click();
    await UpdateSatgeCMNtTextField.pressSequentially('Done');
  }
}
