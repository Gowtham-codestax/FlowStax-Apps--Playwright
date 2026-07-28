/**
 * Source (Java): org.kbzPayAppPages.closingLoopPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - Robot file-picker sequence in additionalDoc_Upload_Btn -> base.uploadFile() (rule 3).
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x40, same sleeps.
 *  - js click -> forceClick(); locator xpath strings copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class closingLoopPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(5000);
    for (let i = 0; i < 40; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(200);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@role='button' and @style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(eyeiconbtn);
  }

  async closebutton(): Promise<void> {
    const Close = this.page.locator("xpath=//flt-semantics[contains(text(),'Close')]");
    await Close.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Close);
  }

  async resolvebutton(): Promise<void> {
    const Resolve = this.page.locator("xpath=//flt-semantics[contains(text(),'Resolve')]");
    await Resolve.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Resolve);
  }

  async ReOpenbutton(): Promise<void> {
    const Reopen = this.page.locator("xpath=//flt-semantics[contains(text(),'Reopen')]");
    await Reopen.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Reopen);
  }

  async markForCorrectionbutton(): Promise<void> {
    const Mark = this.page.locator("xpath=//flt-semantics[contains(text(),'Mark for Correction')]");
    await Mark.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Mark);
  }

  async updatebutton(): Promise<void> {
    const Update = this.page.locator("xpath=//flt-semantics[contains(text(),'Update')]");
    await Update.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Update);
  }

  async needMoreInfobutton(): Promise<void> {
    const NeedInfo = this.page.locator("xpath=//flt-semantics[contains(text(),'Need more info')]");
    await NeedInfo.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(NeedInfo);
  }

  async denyButton(): Promise<void> {
    const Denytbtn = this.page.locator("xpath=//flt-semantics[contains(text(),'Deny')]");
    await Denytbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(Denytbtn);
  }

  async UpdateStage_Commentsection(): Promise<void> {
    const Commentsection = this.page.locator(
      "xpath=//textarea[@data-semantics-role[contains(.,'text-field')]]"
    );
    await Commentsection.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(2000);
    await this.forceClick(Commentsection);
    await this.page.waitForTimeout(500);
    await Commentsection.pressSequentially('Test');
  }

  async additionalDoc_Upload_Btn(): Promise<void> {
    // Robot file-picker sequence -> single uploadFile (exact input xpath)
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Additional Documents']/following::flt-semantics/input[@data-semantics-role='text-field']"
    );
  }

  async downloadPDFButton(): Promise<void> {
    const downloadPdfbtn = this.page.locator("xpath=(//flt-semantics[@role='button'])[last()]");
    await downloadPdfbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.page.waitForTimeout(2000);
    await this.forceClick(downloadPdfbtn);
  }
}
