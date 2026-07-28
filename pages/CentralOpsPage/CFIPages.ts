/**
 * Source (Java): org.CentralOpsPages.CFIPages
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x40, same sleeps.
 * - PullOptionButon retry loop kept at 5. js click -> forceClick(); xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class CFIPages extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async selectKYCUpdate(): Promise<void> {
    const KYCSelect = this.page.locator(
      "xpath=//flt-semantics[@style[contains(.,'width: 36px') and contains(.,'height: 34px')]]"
    );
    await KYCSelect.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1500);
    await KYCSelect.click();
  }

  async Duplicate_Phone_Number_Online_BankingOption(): Promise<void> {
    const opt = this.page.locator(
      "xpath=//flt-semantics/span[contains(.,'Duplicate Phone Number: Online Banking')]"
    );
    await opt.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(opt);
    await this.page.waitForTimeout(600);

    const Pull = this.page.locator("xpath=//flt-semantics[@role='button' and .='Pull']");
    await Pull.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Pull);
  }

  async im_BankingOption(): Promise<void> {
    const opt = this.page.locator("xpath=//flt-semantics/span[contains(.,'i/m Banking (CIF)')]");
    await opt.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(opt);
    await this.page.waitForTimeout(600);

    const Pull = this.page.locator("xpath=//flt-semantics[@role='button' and .='Pull']");
    await Pull.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Pull);
  }

  async PullOptionButon(): Promise<void> {
    for (let i = 0; i < 5; i++) {
      try {
        const Pull = this.page.locator(
          "xpath=//flt-semantics[@style[contains(.,'width: 36px') and contains(.,'height: 34px')]]"
        );
        await Pull.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(1000);
        await this.forceClick(Pull);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(6100);
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

  async startActionebutton(): Promise<void> {
    const StartActionOption = this.page.locator("xpath=//flt-semantics[contains(text(),'Start Action')]");
    await StartActionOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(3000);
    await this.forceClick(StartActionOption);
  }

  async UpdateStage_Commentsection(): Promise<void> {
    const UpdatestageCMNTbox = this.page.locator(
      "xpath=//flt-semantics/span[.='Comments']/following::flt-semantics/textarea[@data-semantics-role='text-field']"
    );
    await UpdatestageCMNTbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(2000);
    await this.forceClick(UpdatestageCMNTbox);
    await this.page.waitForTimeout(500);
    await UpdatestageCMNTbox.pressSequentially('Test@123');
  }

  async verifyAndActivebutton(): Promise<void> {
    const VerifiyandActiveOption = this.page.locator(
      "xpath=//flt-semantics[contains(text(),'Verify and Activate')]"
    );
    await VerifiyandActiveOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(3000);
    await this.forceClick(VerifiyandActiveOption);
  }

  async makeForcorrectionbutton(): Promise<void> {
    const Make = this.page.locator("xpath=//flt-semantics[contains(text(),'Mark for Correction')]");
    await Make.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(3000);
    await this.forceClick(Make);
  }

  async verifedandUserActivated_YES_Radiobtn(): Promise<void> {
    const yesbtn = this.page.locator(
      "xpath=//flt-semantics/span[.='All the Documents Verified and User Activated? *']/following::flt-semantics[1][@role='radio']"
    );
    await yesbtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await yesbtn.click();
  }

  async verifedandUserActivated_NO_Radiobtn(): Promise<void> {
    const Nobtn = this.page.locator(
      "xpath=//flt-semantics/span[.='All the Documents Verified and User Activated? *']/following::flt-semantics[3][@role='radio']"
    );
    await Nobtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await Nobtn.click();
  }

  async authorizebutton(): Promise<void> {
    const AuthorizeOption = this.page.locator("xpath=//flt-semantics[contains(text(),'Authorize')]");
    await AuthorizeOption.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(AuthorizeOption);
  }
}
