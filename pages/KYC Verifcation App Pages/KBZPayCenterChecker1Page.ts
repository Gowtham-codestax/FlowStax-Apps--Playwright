/**
 * Source (Java): org.KycVerificationAppPages.KBZPayCenterChecker1Page
 * Migrated to: Playwright + TypeScript (Page Object)
 * - eyeIconBtn TAB focus navigation kept: keyboard.press('Tab') x30, same sleeps.
 * - xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class KBZPayCenterChecker1Page extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async KYCserviceReqOPtion(): Promise<void> {
    const KYCserviceReqOPtionBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='KYC Verification Service Request Application']"
    );
    await KYCserviceReqOPtionBtn.waitFor({ state: 'visible' });
    await KYCserviceReqOPtionBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async eyeIconBtn(): Promise<void> {
    await this.page.waitForTimeout(4000);
    for (let i = 0; i < 30; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(200);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.click();
  }

  async sendtoKYCOfficerbtn(): Promise<void> {
    const sendToKycbtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Send to KYC Officer')]"
    );
    await sendToKycbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await sendToKycbtn.click();
    await this.page.waitForTimeout(1000);
  }

  async MakeForCorectionbtn(): Promise<void> {
    const Makecrtionbtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Mark for Correction')]"
    );
    await Makecrtionbtn.waitFor({ state: 'visible' });
    await Makecrtionbtn.click();
    await this.page.waitForTimeout(1000);
  }

  async Denybtn(): Promise<void> {
    const denybtn = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(text(),'Deny')]"
    );
    await denybtn.waitFor({ state: 'visible' });
    await denybtn.click();
    await this.page.waitForTimeout(1000);
  }

  async Resubmitbtn(): Promise<void> {
    const loc = this.page.locator(
      "xpath=//flt-semantics[@role='button' and contains(.,'Resubmit')]"
    );
    await loc.waitFor({ state: 'visible' });
    await loc.click();
    await this.page.waitForTimeout(1000);
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

  async KbzPayCenterChecker_Radiontn(){
    const loc = this.page.locator("xpath=//flt-semantics/span[.='KBZPay Center Checker']/preceding::flt-semantics[1][@role='radio']");
    await loc.waitFor({state:'visible'})
    await this.page.waitForTimeout(1000);
    await loc.check();
  }

  async ClusterManager_RadioBtn(){
    const loc= this.page.locator("xpath=//flt-semantics/span[.='Cluster Manager']/preceding::flt-semantics[1][@role='radio']");
    await loc.waitFor({state:'visible'});
    await this.page.waitForTimeout(1000);
    await loc.check();
  }

  
}
