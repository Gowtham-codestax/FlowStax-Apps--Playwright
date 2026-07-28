/**
 * Source (Java): org.kbzPayAppPages.deviceChangeRedApp
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x40, same sleeps (300ms).
 *  - Actions moveToElement().click().sendKeys() -> hover()+click()+pressSequentially().
 *  - js click/scrollIntoView -> forceClick()/locator.evaluate(). xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class deviceChangeRedApp extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async deviceManagement_Change_RedApp(): Promise<void> {
    const RedApp_DeviceChangeoption = this.page.locator(
      "xpath=//flt-semantics/span[.='Device Management (Device Change) Red App']"
    );
    await RedApp_DeviceChangeoption.waitFor({ state: 'attached' });
    await RedApp_DeviceChangeoption.waitFor({ state: 'visible' });
    await RedApp_DeviceChangeoption.click();
  }

  async agentOrMerchantPhnNumField(): Promise<void> {
    const MechantPhnNum = this.page.locator(
      "xpath=//flt-semantics/span[.='Agent / Merchant Phone Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await MechantPhnNum.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await MechantPhnNum.hover();
    await MechantPhnNum.click();
    await MechantPhnNum.pressSequentially('678976877');
  }

  async agentOrMerchantCodeField(): Promise<void> {
    const MechanCodeField = this.page.locator(
      "xpath=//flt-semantics/span[.='Agent / Merchant(Organization Short Code) *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await MechanCodeField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await MechanCodeField.hover();
    await MechanCodeField.click();
    await MechanCodeField.pressSequentially('678976877');
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(5000);
    for (let i = 0; i < 40; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(300);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await this.forceClick(eyeiconbtn);
  }

  async escalateBtn(): Promise<void> {
    const EscalateBtn = this.page.locator("xpath=//flt-semantics[.='Escalate']");
    await EscalateBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1500);
    await EscalateBtn.click();
  }
}
