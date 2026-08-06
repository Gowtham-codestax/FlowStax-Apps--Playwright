/**
 * Source (Java): org.CentralOpsPages.CompanyKYCUpdatePage
 * Migrated to: Playwright + TypeScript (Page Object)
 * - sendKeys -> pressSequentially; xpath copied EXACTLY.
 */
import { Page, expect } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class CompanyKYCUpdatePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }



  async companyKYCUpdateOption(): Promise<void> {
    const companyKYC = this.page.locator("xpath=//flt-semantics/span[.='Company KYC Update']");
    await companyKYC.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await companyKYC.click();
  }

  async customerDetails(): Promise<void> {

  // Email Id
  const email= this.page.locator("xpath=//flt-semantics/span[.='Email ID']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await email.waitFor({state: 'attached'});
        await this.page.waitForTimeout(500);
        await this.forceClick(email);
        await this.page.waitForTimeout(500);
        await email.pressSequentially("test@example.com");



  const contactnnumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Contact Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await contactnnumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await contactnnumField.click();
    await this.page.waitForTimeout(200);
    await contactnnumField.pressSequentially('678976777');



 // Company name field
  const CompanyNameField = this.page.locator(
       "xpath=//flt-semantics/span[.='Company Name']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
   );

  //  await Alt_Phm_NumField.evaluate((el: HTMLElement) => el.scrollIntoView(true));
   await CompanyNameField.waitFor({ state: 'attached' });
   await this.page.waitForTimeout(200);
   await CompanyNameField.evaluate((e1: HTMLElement) => e1.scrollIntoView(true));
   await this.forceClick(CompanyNameField);
   await this.page.waitForTimeout(100);
   await CompanyNameField.pressSequentially('Test Name');

  }

  async Foreign_CompanyRadio(): Promise<void> {
    const ForeignCompanyRadio = this.page.locator(
      "xpath=//flt-semantics/span[.='Choose your company type *']/following::flt-semantics[@role='radio'][5]"
    );
    await ForeignCompanyRadio.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await ForeignCompanyRadio.click();
  }

  async companyTypeRadio(): Promise<void> {
    const UrgentRadio = this.page.locator(
      "xpath=//flt-semantics/span[.='Urgent']/preceding::flt-semantics[@role='radio'][1]"
    );
    await UrgentRadio.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await UrgentRadio.click();
  }

  async TypesOfCompanyKYCReqCheckboxes():Promise<void> {
    const checkboxes= this.page.locator("xpath=//flt-semantics/span[.='Type Of Company KYC Request *']/following::flt-semantics[@role='checkbox']"
    );

   // const count = await checkboxes.count();
   
   /*
    for (let i=0; i<10; i++){

      const cb=checkboxes.nth(i);
      await cb.waitFor({state: 'visible'});
      await this.scrollTo(cb);
      await cb.check();
     // await this.page.waitForTimeout(300);
    }
    */

    const index :number[]= [ 0,1,5,7,8];
    for(const i of index){
      const cb = checkboxes.nth(i);
      await cb.check();
      await expect(cb).toBeChecked();
    }
  }
  
  async attachCoverLetter():Promise<void> {
     await this.uploadFile("xpath=//flt-semantics/span[.='Attach Cover Letter']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
     );
      await this.page.waitForTimeout(300);

  }

  async attachMeetingMinutues():Promise<void> {

    await this.uploadFile("xpath=//flt-semantics/span[.='Attach Meeting Minutes']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
     await this.page.waitForTimeout(300);
  }

  async companyLicenceUpload():Promise<void> {

    await this.uploadFile("xpath=//flt-semantics/span[.='Company License']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await this.page.waitForTimeout(300);
  }

  async companyOpeningFormUplaod():Promise<void> {

    await this.uploadFile("xpath=//flt-semantics/span[.='Company Opening Form']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
     await this.page.waitForTimeout(300);
  }

  async oranizationChartUplaod():Promise<void> {

    await this.uploadFile("xpath=//flt-semantics/span[.='Organization Chart']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
     await this.page.waitForTimeout(300);
  }

  async MOU_Uplaod():Promise<void> {
    await this.uploadFile("xpath=//flt-semantics/span[.='MOU']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
     await this.page.waitForTimeout(300);
  }

  async companyKYCUpdateUpload():Promise<void> {

    await this.uploadFile("xpath=//flt-semantics/span[.='Company KYC Update Form (for individual authorized person)']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await this.page.waitForTimeout(300);
  }

  async NRCCopy_Upload():Promise<void> {

    await this.uploadFile("xpath=//flt-semantics/span[contains(.,'NRC Copy')]/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await this.page.waitForTimeout(300);
  }
 
  async EditIconbtnClick(): Promise<void> {
    const editbtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await editbtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000);
    await editbtn.click();

    const checkboxes= this.page.locator("xpath=//flt-semantics/span[.='Type Of Company KYC Request *']/following::flt-semantics[@role='checkbox']"
    );
    const index :number[]= [2,9,10];
    for(const i of index){
      const cb = checkboxes.nth(i);
      await cb.check();
      await expect(cb).toBeChecked();
    } 

    const companyIDField= this.page.locator("xpath=//flt-semantics/span[.='Company ID']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
    );
    await companyIDField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(200);
    await companyIDField.evaluate((e1: HTMLElement)=> e1.scrollIntoView(true));
    await this.forceClick(companyIDField);
    await this.page.waitForTimeout(100);
    await companyIDField.pressSequentially('Test@123#$5'); 
  }


  async applicationCorrectedButton(): Promise<void> {

    const applicationCorrectedBtn = this.page.locator("xpath=//flt-semantics[@role='button' and contains(.,'Application Corrected')]");
    await applicationCorrectedBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(2000);
    await this.forceClick(applicationCorrectedBtn);
  }

  async requestCloserButton(): Promise<void> {

    const reqclosebtn = this.page.locator("xpath=//flt-semantics[@role='button' and contains(.,'Request for closure')]");
    await reqclosebtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(2000);
    await this.forceClick(reqclosebtn);
  }
  



}
