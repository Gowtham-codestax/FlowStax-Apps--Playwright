/**
 * Source (Java): org.KycVerificationAppPages.KycOfficerPage
 * Migrated to: Playwright + TypeScript (Page Object)
 * - PullOptionButon retry loop kept at 5; eyeIconBtn TAB nav x33, same sleeps.
 * - js click/scrollIntoView -> forceClick()/locator.evaluate(). xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class KycOfficerPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async PullOptionButon(): Promise<void> {
    for (let i = 0; i < 5; i++) {
      try {
        const Pull = this.page.locator(
          "xpath=//flt-semantics[@style[contains(.,'width: 36px') and contains(.,'height: 34px')]]"
        );
        await Pull.waitFor({ state: 'attached' });
        await Pull.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
        await this.forceClick(Pull);
        console.log(i + 1);
        await this.page.waitForTimeout(1000);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async eyeIconBtn(): Promise<void> {
    await this.page.waitForTimeout(7000);
    for (let i = 0; i < 33; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(500);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.click();
  }

  async resolvedbtn(): Promise<void> {
    const Resolvedcbtn = this.page.locator("xpath=//flt-semantics[contains(text(),'Resolved')]");
    await Resolvedcbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await Resolvedcbtn.click();
    await this.page.waitForTimeout(1000);
  }

  async markForCorrectionbtn(): Promise<void> {
    const Markcoreectionbtn = this.page.locator(
      "xpath=//flt-semantics[contains(text(),'Mark for Correction')]"
    );
    await Markcoreectionbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await Markcoreectionbtn.click();
    await this.page.waitForTimeout(1000);
  }

  async Denybtn(): Promise<void> {
    const denybtn = this.page.locator("xpath=//flt-semantics[contains(text(),'Denied')]");
    await denybtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await denybtn.click();
    await this.page.waitForTimeout(1000);
  }

  async ApprovalStatusDropdown(): Promise<void> {
    const approvaloption = this.page.locator(
      "xpath=//flt-semantics/span[.='Approval Status *']/following::flt-semantics/span[.='Please select']"
    );
    await approvaloption.waitFor({ state: 'visible' });
    await approvaloption.click();
  }

  async ApprovedButton(): Promise<void> {
    const approvedButton = this.page.locator(
      "xpath=//flt-semantics/span[.='Approval Status *']/following::flt-semantics/span[.='Approved']"
    );
    await approvedButton.waitFor({ state: 'visible' });
    await approvedButton.click();
  }

  async rejectedButton(): Promise<void> {
    const rejectedButton = this.page.locator(
      "xpath=//flt-semantics/span[.='Approval Status *']/following::flt-semantics/span[.='Rejected']"
    );
    await rejectedButton.waitFor({ state: 'visible' });
    await rejectedButton.click();
  }

  async RemarkCMNTbox(): Promise<void> {
    const remarkTextField = this.page.locator(
      "xpath=//flt-semantics/span[.='Remark']/following::flt-semantics/input[@data-semantics-role='text-field']"
    );
    await remarkTextField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await remarkTextField.click();
    await remarkTextField.pressSequentially('Done');
  }

  async UpdateSatgeCMNTbox(): Promise<void> {
    const UpdateSatgeCMNtTextField = this.page.locator(
      "xpath=//flt-semantics/span/following::flt-semantics/textarea[@data-semantics-role='text-field']"
    );
    await UpdateSatgeCMNtTextField.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await UpdateSatgeCMNtTextField.click();
    await UpdateSatgeCMNtTextField.pressSequentially('Done');
  }

  async downloadPDFButton(): Promise<void> {
    const downloadPdfbtn = this.page.locator("xpath=(//flt-semantics[@role='button'])[last()]");
    await downloadPdfbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(2000);
    await this.forceClick(downloadPdfbtn);
  }
}
