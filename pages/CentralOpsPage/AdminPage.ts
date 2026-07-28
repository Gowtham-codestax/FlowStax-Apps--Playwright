/**
 * Source (Java): org.CentralOpsPages.AdminPage
 * Migrated to: Playwright + TypeScript (Page Object)
 * - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x40, same sleeps.
 * - js click/scrollIntoView -> forceClick()/locator.evaluate(). xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class AdminPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async selectDropDownFilter(): Promise<void> {
    const SelectDD = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(.,'Select Filter')]"
    );
    await SelectDD.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await SelectDD.click();
  }

  async duplicatePhnAndNoWorkOption(): Promise<void> {
    const DuplicatePhnAndNoWorkOption = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(.,'Duplicate Phone No. Work')]"
    );
    await DuplicatePhnAndNoWorkOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(2500);
    await this.page.waitForTimeout(1100);
    await this.forceClick(DuplicatePhnAndNoWorkOption);
  }

  async cifWork_Option(): Promise<void> {
    const CIFWorkOption = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(.,'CIF Work')]"
    );
    await CIFWorkOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(2500);
    await this.page.waitForTimeout(1100);
    await this.forceClick(CIFWorkOption);
  }

  async switchRadioBtn(): Promise<void> {
    const switchBtn = this.page.locator("xpath=//flt-semantics[@role='switch']");
    await switchBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await switchBtn.click();
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(6000);
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

  async closeApplicationOption(): Promise<void> {
    const closeOPtionOption = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(.,'Close Application')]"
    );
    await closeOPtionOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(3000);
    await closeOPtionOption.click();
  }

  async denyOption(): Promise<void> {
    const DenyOption = this.page.locator("xpath=//flt-semantics[@role='button' and contains(.,'Deny')]");
    await DenyOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(3000);
    await DenyOption.click();
  }
}
