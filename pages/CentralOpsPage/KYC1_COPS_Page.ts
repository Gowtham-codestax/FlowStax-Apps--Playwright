/**
 * Source (Java): org.CentralOpsPages.KYC1_COPS_Page
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - StatusActionClick / eyeIconBtn TAB focus navigation kept: keyboard.press('Tab') with
 *    the same counts (29 / 36) and sleeps.
 *  - PullOptionButon / PullButton try/catch retry loops kept at same attempt counts.
 *  - findElements(...) presence checks -> locator.count(); js click -> forceClick();
 *    js scrollIntoView -> locator.evaluate(); dispatchEvent(MouseEvent) -> locator.evaluate().
 *  - Locator xpath strings copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class KYC1_COPS_Page extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async StatusActionClick(): Promise<void> {
    for (let i = 0; i < 29; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(300);
    }
    const actionbtn = this.page.locator("xpath=(//flt-semantics[.='Start Action'])[1]");
    await actionbtn.waitFor({ state: 'visible' });
    await actionbtn.evaluate((el: HTMLElement) => el.scrollIntoView(true));
    await this.forceClick(actionbtn);
  }
  

  async PullOptionButon(): Promise<void> {
    for (let i = 0; i < 5; i++) {
      try {
        const Pull = this.page.locator(
          "xpath=//flt-semantics[@style[contains(.,'width: 36px') and contains(.,'height: 34px')]]"
        );
        await Pull.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(800);
        await this.forceClick(Pull);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async selectKYCUpdate(): Promise<void> {
    const KYCSelect = this.page.locator(
      "xpath=//flt-semantics[@style[contains(.,'width: 36px') and contains(.,'height: 34px')]]"
    );
    await KYCSelect.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1500);
    await KYCSelect.click();
  }

  async MakerRadioButton(): Promise<void> {
    const MakerRadiobtn = this.page.locator("xpath=(//flt-semantics[@role='radio'])[1]");
    await MakerRadiobtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(MakerRadiobtn);
  }

  async checkerRadioButton(): Promise<void> {
    const checkerRadiobtn = this.page.locator("xpath=(//flt-semantics[@role='radio'])[2]");
    await checkerRadiobtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(checkerRadiobtn);
  }

  async KYC_UpdateWorkflow_Option(): Promise<void> {
    const KYC_Update_workflow_Btn = this.page.locator(
      "xpath=//span[@style[contains(.,'display: inline-block; white-space: nowrap; transform-origin: 0px 0px 0px; transform: scale(1.3587, 3.11111);')]]"
    );
    await KYC_Update_workflow_Btn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(300);
    await this.forceClick(KYC_Update_workflow_Btn);
  }

  async companyKycUpdateOption(): Promise<void> {

    const companyKycUpdateOption = this.page.locator("xpath=//flt-semantics/span[contains(.,'Company KYC Update')]"
    );

    await companyKycUpdateOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(300);
    await this.forceClick(companyKycUpdateOption);

  }

  async PullButton(): Promise<void> {
    const pullButton = this.page.locator(
      "xpath=//flt-semantics[@style[contains(.,'position: absolute; overflow: visible; width: 234px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 8, 302); pointer-events: all; z-index: 5;')]]"
    );

    if ((await pullButton.count()) === 0) {
      console.log('No Pull Record Found');
      return;
    }

    for (let i = 0; i < 1; i++) {
      try {
        await pullButton.waitFor({ state: 'attached' });
        await pullButton.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
        await this.forceClick(pullButton);

        const Pulls = this.page.locator(
          "xpath=//flt-semantics[@style[contains(.,'position: absolute; overflow: visible; width: 36px; height: 34px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 493.504, 214.5); pointer-events: all; z-index: 8;')]]"
        );
        if ((await Pulls.count()) > 0) {
          await this.forceClick(Pulls.first());
          break;
        }
        await this.page.waitForTimeout(1000);
      } catch (e) {
        console.log('Stale element. Continuing...');
      }
    }
  }

  async eyeIconBtn(): Promise<void> {
    await this.page.waitForTimeout(4000);
    for (let i = 0; i < 36; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(300);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(500);
    await this.forceClick(eyeiconbtn);
  }

  async startActionButton(): Promise<void> {
    const actionbtn = this.page.locator("xpath=(//flt-semantics[contains(text(),'Start Action')])[1]");
    await actionbtn.waitFor({ state: 'visible' });
    await actionbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await actionbtn.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }

  async updateButton(): Promise<void> {
    const Updatebtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Update')]"
    );
    await Updatebtn.waitFor({ state: 'visible' });
    await Updatebtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await Updatebtn.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }

  async completeButton(): Promise<void> {
    const Completebtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Complete')]"
    );
    await Completebtn.waitFor({ state: 'visible' });
    await Completebtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await Completebtn.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }

  async reWorkcompleteButton(): Promise<void> {
    const ReCompleteButton = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Rework completed')]"
    );
    await ReCompleteButton.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await ReCompleteButton.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(3000);
    await ReCompleteButton.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }

  async reWorkButton(): Promise<void> {
    const reworkbtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Rework')]"
    );
    await reworkbtn.waitFor({ state: 'visible' });
    await reworkbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await reworkbtn.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }

  async reWorkCompletedButton(): Promise<void> {
    const reworkbtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(.,'Rework Completed')]"
    );
    await reworkbtn.waitFor({ state: 'visible' });
    await reworkbtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await reworkbtn.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }

  async escalateButton(): Promise<void> {
    const EscalateBtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Escalate')]"
    );
    await EscalateBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await EscalateBtn.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
    await this.page.waitForTimeout(1000);
    await EscalateBtn.evaluate((el: HTMLElement) =>
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    );
  }

  async update_Commentsection(): Promise<void> {
    const UpdatestageCMNTbox = this.page.locator(
      "xpath=//textarea[@data-semantics-role[contains(.,'text-field')]]"
    );
    await UpdatestageCMNTbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await UpdatestageCMNTbox.click();
    await UpdatestageCMNTbox.pressSequentially('Test');
  }

  async backButton(): Promise<void> {
    const Back = this.page.locator(
      "xpath=(//flt-semantics/span[.='Details List']/preceding::flt-semantics[@role='button'])[4]"
    );
    await Back.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(3000);
    await Back.click();
  }

  async branchAu_YesRadiobtn(): Promise<void> {
    const YesRadiobtn = this.page.locator(
      "xpath=//flt-semantics/span[.='yes/ပြီး']/preceding::flt-semantics[@role='radio']"
    );
    await YesRadiobtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(YesRadiobtn);
  }

  async branchAu_NORadiobtn(): Promise<void> {
    const NoRadiobtn = this.page.locator(
      "xpath=(//flt-semantics/span[.='no/မပြီး']/preceding::flt-semantics[@role='radio'])[2]"
    );
    await NoRadiobtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(NoRadiobtn);
  }
}
