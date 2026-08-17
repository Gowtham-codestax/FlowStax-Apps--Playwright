/**
 * Source (Java): org.kbzPayAppPages.tsoLoginPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - PullOptionButon try/catch retry loop kept at SAME attempt count (5).
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x40, same sleeps.
 *  - js click -> forceClick(); locator xpath strings copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class tsoLoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async selectKYCUpdate(): Promise<void> {
    const KYCSelect = this.page.locator("xpath=//flt-semantics/span[.='Select']");
    await KYCSelect.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(2000);
    await KYCSelect.click();
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

  async accountClose_Option(): Promise<void> {
    // Flutter duplicates semantic nodes, so this matches several; Selenium's findElement
    // took the first, so .first() is the faithful (and strict-mode-safe) equivalent.
    const AccClose = this.page
      .locator("xpath=//flt-semantics/span[contains(text(),'Account Close')]")
      .first();
    await AccClose.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1100);
    await this.forceClick(AccClose);
    await this.page.waitForTimeout(600);

    const Pull = this.page.locator("xpath=//flt-semantics[@role='button' and .='Pull']");
    await Pull.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Pull);
  }

  async agentMerchantandRedApp_Option(): Promise<void> {
    const Agent_Redapp = this.page
      .locator("xpath=//flt-semantics/span[contains(text(),'Agent Merchant and Red App SM KYC Change')]")
      .first();
    await Agent_Redapp.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(Agent_Redapp);

    const Pull = this.page.locator("xpath=//flt-semantics[@role='button' and .='Pull']");
    await Pull.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Pull);
  }

  async cutomerKYC_Change_Option(): Promise<void> {
    const CustKYCChange = this.page
      .locator("xpath=//flt-semantics/span[contains(text(),'Customer KYC Change Request')]")
      .first();
    await CustKYCChange.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(CustKYCChange);

    const Pull = this.page.locator("xpath=//flt-semantics[@role='button' and .='Pull']");
    await Pull.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Pull);
  }

  async MABR_KYC_Change_Option(): Promise<void> {
    const MABRKYCChange = this.page
      .locator("xpath=//flt-semantics/span[contains(text(),'MABR KYC Change')]")
      .first();
    await MABRKYCChange.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(MABRKYCChange);

    const Pull = this.page.locator("xpath=//flt-semantics[@role='button' and .='Pull']");
    await Pull.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Pull);
  }

  async MABT_BR_BA_PinResetAndLockReq_Option(): Promise<void> {
    const MABT_BR_BA_PinResetAndLockReqBtn = this.page
      .locator("xpath=//flt-semantics/span[contains(text(),'MABT / BR / BA Pin Reset and Pin Lock Request')]")
      .first();
    await MABT_BR_BA_PinResetAndLockReqBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(MABT_BR_BA_PinResetAndLockReqBtn);

    const Pull = this.page.locator("xpath=//flt-semantics[@role='button' and .='Pull']");
    await Pull.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Pull);
  }

  async phoneAndDevice_Change_Option(): Promise<void> {
    const PhoneAndDeviceChangeReqBtn = this.page
      .locator("xpath=//flt-semantics/span[contains(text(),'Phone Change Request + Device Change Request')]")
      .first();
    await PhoneAndDeviceChangeReqBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(PhoneAndDeviceChangeReqBtn);

    const Pull = this.page.locator("xpath=//flt-semantics[@role='button' and .='Pull']");
    await Pull.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Pull);
  }

  async Phone_Change_Request_Option(): Promise<void> {
    const PhoneDeviceReqBtn = this.page
      .locator("xpath=//flt-semantics/span[contains(text(),'Phone Change Request')]")
      .first();
    await PhoneDeviceReqBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(PhoneDeviceReqBtn);

    const Pull = this.page.locator("xpath=//flt-semantics[@role='button' and .='Pull']");
    await Pull.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Pull);
  }

  async pinResetAndDevice_Change_Option(): Promise<void> {
    const PINResetandDeviceChangeReqBtn = this.page
      .locator("xpath=//flt-semantics/span[contains(text(),'Pin Reset Request + Device Change Request')]")
      .first();
    await PINResetandDeviceChangeReqBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await this.forceClick(PINResetandDeviceChangeReqBtn);

    const Pull = this.page.locator("xpath=//flt-semantics[@role='button' and .='Pull']");
    await Pull.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Pull);
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

  async resolvebutton(): Promise<void> {
    const Resolve = this.page.locator("xpath=//flt-semantics[contains(text(),'Resolve')]");
    await Resolve.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(2500);
    await this.forceClick(Resolve);
  }

  async makeForcorrectionbutton(): Promise<void> {
    const Make = this.page.locator("xpath=//flt-semantics[contains(text(),'Marked for Correction')]");
    await Make.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(2500);
    await this.forceClick(Make);
  }

  async needMoreInfobutton(): Promise<void> {
    const NeedInfo = this.page.locator("xpath=//flt-semantics[contains(text(),'Need more info')]");
    await NeedInfo.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(2500);
    await this.forceClick(NeedInfo);
  }

  async denyButton(): Promise<void> {
    const Denytbtn = this.page.locator("xpath=//flt-semantics[contains(text(),'Deny')]");
    await Denytbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(2500);
    await this.forceClick(Denytbtn);
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
}
