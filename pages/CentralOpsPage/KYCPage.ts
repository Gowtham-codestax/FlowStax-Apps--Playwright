/**
 * Source (Java): org.CentralOpsPages.KYCPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - Robot native file-picker sequences (uploadPassport_FrontPageBtn / _BackpageBtn /
 *    uploadRequestForm_Btn) -> base.uploadFile() with the EXACT input xpath (rule 3).
 *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x46, same sleeps.
 *  - Actions moveToElement().click().sendKeys() -> hover()+click()+pressSequentially().
 *  - js click -> forceClick(); js scrollIntoView -> locator.evaluate(same JS);
 *    dispatchEvent(MouseEvent) -> locator.evaluate(same JS).
 *  - Menu/Logout retry loops kept at the SAME attempt count (5). xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class KYCPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async categoryDD(): Promise<void> {
        const CategorySelection =this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
        await CategorySelection.waitFor({state: 'attached'});
        await this.page.waitForTimeout(1000);
        await CategorySelection.click();
  }

  async selectKYCupdate(): Promise<void> {
    const categoryDD = this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
    await categoryDD.click();
    await this.page.waitForTimeout(1000);

    const KYC_updateoption = this.page.locator("xpath=//flt-semantics[.='KYC Update']");
    await KYC_updateoption.waitFor({ state: 'visible' });
    await KYC_updateoption.click();
  }

  async enterCustomerDetails(): Promise<void> {
    // CUS ID
    const CusId = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    ).first();
    await CusId.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(CusId);
    // await CusId.click();
    await this.page.waitForTimeout(300);
    await CusId.pressSequentially('123456711');

    // CUS Name
    const CusName = this.page.locator(
      "xpath=//flt-semantics/span[.='Customer Name *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    ).first();
    await CusName.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(800);
    await this.page.waitForTimeout(200);
    await CusName.hover();
    await CusName.click();
    await CusName.pressSequentially('Test');

    // Premium Radio button
    const PremiumRadioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='Premium']/preceding::flt-semantics[1][@role='radio']"
    );
    await PremiumRadioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await PremiumRadioBtn.click();

    // Customer Email
    const Email_Field = this.page.locator(
      "xpath=//flt-semantics/span[.='Email ID']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    ).first();
    await Email_Field.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(500);
    await Email_Field.click();
    await this.page.waitForTimeout(200);
    await Email_Field.pressSequentially('Test@gmail.com');

    // Customer Phone Number
    const Contact_Field = this.page.locator(
      "xpath=//flt-semantics/span[.='Contact Number']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    ).first();
    await Contact_Field.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await this.forceClick(Contact_Field);
    // await Contact_Field.click();
    await Contact_Field.pressSequentially('678976777');

    // Customer Passport Type
    const Passport_TDType = this.page.locator(
      "xpath=//flt-semantics/span[.='Passport / နိုင်ငံကူးလက်မှတ်']/preceding::flt-semantics[1][@role='radio']"
    );
    await Passport_TDType.waitFor({ state: 'visible' });
    await Passport_TDType.click();
  }

  async uploadPassport_FrontPageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload Passport Front Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async uploadPassport_BackpageBtn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload Passport Back Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async passPortNumField(): Promise<void> {
    const PassportNumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Passport Number *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    ).first();
    await PassportNumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await PassportNumField.click();
    await this.page.waitForTimeout(300);
    await PassportNumField.pressSequentially('3478279921');
  }

  async uploadRequestForm_Btn(): Promise<void> {
    await this.uploadFile(
      "xpath=//flt-semantics/span[.='Upload Request Form *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
  }

  async Regular_KYC_RequestBtn(): Promise<void> {
    const RegularKYCRadioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='Regular Request']/preceding::flt-semantics[1][@role='radio']"
    ).first();
    await RegularKYCRadioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await RegularKYCRadioBtn.click();
  }

  async idClose_IdOpenRadioBtn(): Promise<void> {
    const RegularKYCRadioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='999 ID Closed / 999 ID Reopen']/preceding::flt-semantics[1][@role='radio']"
    ).first();
    await RegularKYCRadioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await RegularKYCRadioBtn.click();
  }

  async dormant_ACReleasenRadioBtn(): Promise<void> {
    const Dormant_ACReleasen_RadioBtn = this.page.locator(
      "xpath=//flt-semantics/span[.='999 dormant A/C release']/preceding::flt-semantics[1][@role='radio']"
    );
    await Dormant_ACReleasen_RadioBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await Dormant_ACReleasen_RadioBtn.click();
  }

  async typesOf_KYC_ChangeReq_Checkboxes(): Promise<void> {
    const PhnNumberChange_KYC_Checkbox = this.page.locator(
      "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Phone Number Change'][@role='checkbox']"
    );
    await PhnNumberChange_KYC_Checkbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await PhnNumberChange_KYC_Checkbox.click();

    const emailChange_Checkbox = this.page.locator(
      "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Email Change'][@role='checkbox']"
    );
    await emailChange_Checkbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await emailChange_Checkbox.click();
  }

  async RemarkTextField(): Promise<void> {
    const remarkField = this.page.locator(
      "xpath=//flt-semantics/span[.='Remark']/following::flt-semantics/input[@data-semantics-role='text-field']"
    );
    await remarkField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await remarkField.pressSequentially('Test@123');
  }

  async NextButton(): Promise<void> {
    const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']").first();
    await NxtBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(50);
    await NxtBtn.click();
  }

  async EyeIconbtnClick(): Promise<void> {
    await this.page.waitForTimeout(7500);
    for (let i = 0; i < 46; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(200);
    }
    const eyeiconbtn = this.page.locator(
      "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
    );
    await eyeiconbtn.waitFor({ state: 'visible' });
    await eyeiconbtn.click();
  }

  async EditIconbtnClick(): Promise<void> {
    const EditBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await EditBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await EditBtn.click();
    await this.page.waitForTimeout(8000);

    const DOB_Checkbox = this.page.locator(
      "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='DOB Change'][@role='checkbox']"
    ).filter();
    await DOB_Checkbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await DOB_Checkbox.evaluate((el: HTMLElement) => el.scrollIntoView({ behavior: 'smooth' }));
    await this.page.waitForTimeout(180);
    await this.forceClick(DOB_Checkbox);

    const Signature_Change_Checkbox = this.page.locator(
      "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Signature Change'][@role='checkbox']"
    );
    await Signature_Change_Checkbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await this.page.waitForTimeout(180);
    await this.forceClick(Signature_Change_Checkbox);

    const Occupatione_Checkbox = this.page.locator(
      "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Occupation'][@role='checkbox']"
    );
    await Occupatione_Checkbox.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(400);
    await this.page.waitForTimeout(180);
    await this.forceClick(Occupatione_Checkbox);
  }

  async historyBtn():Promise<void>{

      await this.page.waitForTimeout(2500);
      const historyBtn = this.page.locator("xpath=//flt-semantics/span[.='History']");
      await historyBtn.waitFor({state:'attached'});
      await this.page.waitForTimeout(2000);
      await historyBtn.click();
      await this.page.waitForTimeout(2000);
  }

  async MenuButton(): Promise<void> {
    const menu = this.page.locator("xpath=(//flt-semantics[@role='button'])[2]");
    for (let i = 0; i < 5; i++) {
      try {
        await menu.waitFor({ state: 'attached' });
        await menu.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
        await this.page.waitForTimeout(7000);
        await menu.evaluate((el: HTMLElement) =>
          el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        );
        console.log('Menu clicked');
        break;
      } catch (e) {
        console.log('Retrying menu click : ' + i);
        await this.page.waitForTimeout(5000);
      }
    }
  }

  async LogOut(): Promise<void> {
    const dropdown = this.page.locator("xpath=(//*[@role='group'])[2]");
    for (let i = 0; i < 5; i++) {
      try {
        await dropdown.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(2000);
        await dropdown.evaluate((el: HTMLElement) =>
          el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        );
        break;
      } catch (e) {
        console.log('Retry logout dropdown : ' + i);
      }
    }

    const logout = this.page.locator("xpath=//*[text()='Logout']");
    for (let i = 0; i < 5; i++) {
      try {
        await logout.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(3000);
        await logout.evaluate((el: HTMLElement) =>
          el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        );
        console.log('Logout success');
        break;
      } catch (e) {
        console.log('Retry logout button : ' + i);
        await this.page.waitForTimeout(2000);
      }
    }
  }
}
