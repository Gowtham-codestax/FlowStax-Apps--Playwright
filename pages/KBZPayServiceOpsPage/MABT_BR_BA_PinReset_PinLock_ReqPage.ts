/**
 * Source (Java): org.kbzPayAppPages.MABT_BR_BA_PinReset_PinLock_ReqPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - Robot file-picker sequences -> base.uploadFile() with EXACT input xpath
 *    (UploadStafFaceBtn, Upload_PinRest_Pinlock_FormBtn).
 *  - EditIconbtnClick "fetch fresh element after scroll" preserved as re-resolved locator.
 *  - js click/scrollIntoView -> forceClick()/locator.evaluate(). xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class MABT_BR_BA_PinReset_PinLock_ReqPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async MABT_BR_BA_PinReset_PinLock_ReqOption(): Promise<void> {
    const MABTBRBAPIN = this.page.locator(
      "xpath=//flt-semantics/span[.='MABT / BR / BA Pin Reset and Pin Lock Request']"
    );
    await MABTBRBAPIN.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(MABTBRBAPIN);
  }

  async accType(): Promise<void> {
    const AccTypeBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='Account Type *']/following::flt-semantics[1]/span[.='Please select']"
    );
    await AccTypeBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(AccTypeBtn);
  }

  async mABT(): Promise<void> {
    const MABTbtn = this.page.locator("xpath=//flt-semantics/span[.='MABT']");
    await MABTbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(MABTbtn);
  }

  async mABR(): Promise<void> {
    const MABRbtn = this.page.locator("xpath=//flt-semantics/span[.='MABR']");
    await MABRbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(MABRbtn);
  }

  async BA(): Promise<void> {
    const BAbtn = this.page.locator("xpath=//flt-semantics/span[.='BA']");
    await BAbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(BAbtn);
  }

  async staffIDNum_Field(): Promise<void> {
    const staffid = this.page.locator(
      "xpath=//flt-semantics/span[.='Staff ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await staffid.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await staffid.click();
    await this.page.waitForTimeout(500);
    await staffid.pressSequentially('7007');
  }

  async UploadStafFaceBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[contains(text(),'Staff Face Photo *')]/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async actionOnPIN_DD(): Promise<void> {
    const actiononPinbtn = this.page.locator(
      "xpath=//flt-semantics/span[contains(text(),'Action on Pin *')]/following::flt-semantics/span[.='Please select']"
    );
    await actiononPinbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(actiononPinbtn);
  }

  async pinResetOption(): Promise<void> {
    const PinResetBtn = this.page.locator("xpath=//flt-semantics/span[.='Pin Reset']");
    await PinResetBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(PinResetBtn);
  }

  async pinLockOption(): Promise<void> {
    const PinLockBtn = this.page.locator("xpath=//flt-semantics/span[.='Pin Lock']");
    await PinLockBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(PinLockBtn);
  }

  async Upload_PinRest_Pinlock_FormBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload Pin Reset and Pin Lock Form *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async EditIconbtnClick(): Promise<void> {
    const editbtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await editbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await editbtn.click();

    // ACTION PIN editing
    const Remove_PinReset = this.page.locator(
      "xpath=//flt-semantics[@role='group' and @aria-label='Pin Reset' ]"
    );
    await Remove_PinReset.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);

    // Scroll first
    await Remove_PinReset.evaluate((el: HTMLElement) =>
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
    await this.page.waitForTimeout(1200);

    // CRITICAL: fetch fresh element after scroll (re-resolve the locator, then click)
    await this.forceClick(Remove_PinReset);

    // Selecting PIN LOCK option in Editing Page
    const PinLockBtn = this.page.locator("xpath=//flt-semantics/span[.='Pin Lock']");
    await PinLockBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(PinLockBtn);
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
