/**
 * Source (Java): org.KycVerificationAppPages.KBZPayCenterMaker1Page
 * Migrated to: Playwright + TypeScript (Page Object)
 * - eyeIconBtn TAB focus navigation kept: keyboard.press('Tab') x30, same sleeps.
 * - xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class KBZPayCenterMaker1Page extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async eyeIconBtn(): Promise<void> {
    await this.page.waitForTimeout(4000);
    for (let i = 0; i < 30; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(500);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.click();
  }

  async reSubmitBtn(): Promise<void> {
    const ReSubmitBtn = this.page.locator("xpath=//flt-semantics[.='Resubmit']");
    await ReSubmitBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await ReSubmitBtn.click();
  }
}
