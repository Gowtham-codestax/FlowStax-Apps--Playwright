/**
 * Source (Java): org.kbzPayAppPages.deviceManagement_DeviceChange
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x37, same sleeps (500ms).
 *  - Actions moveToElement().click().sendKeys() -> hover()+click()+pressSequentially().
 *  - js click/scrollIntoView -> forceClick()/locator.evaluate(). xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class deviceManagement_DeviceChange extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async deviceManagement_Change(): Promise<void> {
    const DeviceChangeoption = this.page.locator(
      "xpath=//flt-semantics/span[.='Device Management  (Device Change)']"
    );
    await DeviceChangeoption.waitFor({ state: 'attached' });
    await DeviceChangeoption.waitFor({ state: 'visible' });
    await DeviceChangeoption.click();
  }

  async oldHandsetModelField(): Promise<void> {
    const OldHandsetModelField = this.page.locator(
      "xpath=//flt-semantics/span[.='Old Handset Model *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await OldHandsetModelField.waitFor({ state: 'visible' });
    await OldHandsetModelField.click();
    await this.page.waitForTimeout(500);
    await OldHandsetModelField.pressSequentially('67897676GH');
  }

  async alternate_phoneNumField(): Promise<void> {
    const Alt_Phm_NumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Alternate Phone number']/following::flt-semantics[2]"
    );
    await Alt_Phm_NumField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await Alt_Phm_NumField.hover();
    await Alt_Phm_NumField.click();
    await Alt_Phm_NumField.pressSequentially('4356789');
  }

  async kbzRegisterdPhnNum(): Promise<void> {
    const kbzRegisterdPhnNumber = this.page.locator(
      "xpath=//flt-semantics/span[.='KBZPay Registered Phone Number *']/following::flt-semantics[2]"
    );
    await kbzRegisterdPhnNumber.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await kbzRegisterdPhnNumber.hover();
    await kbzRegisterdPhnNumber.click();
    await this.page.waitForTimeout(1000);
    await kbzRegisterdPhnNumber.pressSequentially('4356789');
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(4000);
    for (let i = 0; i < 37; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(500);
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
