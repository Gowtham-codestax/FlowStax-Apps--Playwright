/**
 * Source (Java): org.CentralOpsPages.KYC2_COPS_Page
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Note: the Java source had a typo `arguments[0]dispatchEvent(...)` (missing dot) which
 * would have thrown at runtime; migrated to the intended dispatchEvent click.
 * js scrollIntoView -> locator.evaluate(); xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class KYC2_COPS_Page extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async updateButton(): Promise<void> {
    const UpdateButon = this.page.locator(
      "xpath=(//flt-semantics[@style[contains(.,'position: absolute; overflow: visible; width: 140px; height: 28px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 15, 13.5); pointer-events: all; z-index: 1;')]])[1]"
    );
    await UpdateButon.waitFor({ state: 'visible' });
    await UpdateButon.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await UpdateButon.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }

  async completeButton(): Promise<void> {
    const complaetButon = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(.,'Complete')]"
    );
    await complaetButon.waitFor({ state: 'visible' });
    await complaetButon.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await complaetButon.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }

 async reworkButton(): Promise<void> {
    const reworkButon = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(.,'Rework')]"
    );
    await reworkButon.waitFor({ state: 'visible' });
    await reworkButon.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await reworkButon.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }

  
  async markForCorrection(): Promise<void> {
    const MakecorrectionButon = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(.,'Mark for Correction')]"
    );
    await MakecorrectionButon.waitFor({ state: 'visible' });
    await MakecorrectionButon.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await MakecorrectionButon.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }
}
