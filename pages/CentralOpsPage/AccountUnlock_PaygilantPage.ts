import { expect, Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class AccountUnlock_PaygilantPage extends BasePage
{

    constructor(page:Page){
        super(page);
    }

    async categoryDD(): Promise<void> {
        const CategorySelection =this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
        await CategorySelection.waitFor({state: 'attached'});
        await this.page.waitForTimeout(1000);
        await CategorySelection.click();
    }

    async accountUnlock_PaygilantOption(): Promise<void>{

        const accountUnlock_PaygilantOptionBtn= this.page.locator("xpath=//span[contains(text(),'Account Unlock - Suspicious Activity Detected Case')]");
        await accountUnlock_PaygilantOptionBtn.waitFor({state: 'attached'});
        await this.page.waitForTimeout(500);
        await this.forceClick(accountUnlock_PaygilantOptionBtn);
    }


    async customerDetails(): Promise<void>{

        // cus ID field
       const CusNameID = this.page.locator(
        "xpath=//flt-semantics/span[.='Customer ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
         );
       await CusNameID.waitFor({ state: 'attached' });
       await this.page.waitForTimeout(200);
       await this.forceClick(CusNameID);
       await this.page.waitForTimeout(100);
       await CusNameID.pressSequentially('123456789');

       // Cus name field
       const CusNameField = this.page.locator(
        "xpath=//flt-semantics/span[.='Customer Name *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
         );

         //  await Alt_Phm_NumField.evaluate((el: HTMLElement) => el.scrollIntoView(true));
       await CusNameField.waitFor({ state: 'attached' });
       await this.page.waitForTimeout(200);
       await CusNameField.evaluate((e1: HTMLElement) => e1.scrollIntoView(true));
       await this.forceClick(CusNameField);
       await this.page.waitForTimeout(100);
       await CusNameField.pressSequentially('Test Name');


       // login username field
        const login_usenamefield=this.page.locator("xpath=//flt-semantics/span[.='Login Username *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']");
        await login_usenamefield.waitFor({state: 'attached'});
        await this.page.waitForTimeout(500);
        await this.forceClick(login_usenamefield);
        await login_usenamefield.pressSequentially("TestUser");
    
        // Customer Type Radio Btn
        const premiumRadioBtn= this.page.locator("xpath=//flt-semantics/span[.='Premium']/preceding::flt-semantics[@role='radio'][1]"
        );
        await premiumRadioBtn.waitFor({state: 'attached'});
        await this.page.waitForTimeout(500);
        await premiumRadioBtn.check();
    
        // Email Id
        const email= this.page.locator("xpath=//flt-semantics/span[.='Email ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await email.waitFor({state: 'attached'});
        await this.page.waitForTimeout(500);
        await this.forceClick(email);
        await this.page.waitForTimeout(500);
        await email.pressSequentially("test@example.com");


        //Contact Number
        const contactNumber= this.page.locator("xpath=//flt-semantics/span[.='Contact Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
        );
        await contactNumber.waitFor({state: 'attached'});
        await this.page.waitForTimeout(500);
        await this.forceClick(contactNumber);
        await this.page.waitForTimeout(500);
        await contactNumber.pressSequentially("678976777");
    }


    async nrcIDproof(): Promise<void> {

        // NRC Radio Btn — [1] on the preceding:: axis = the NEAREST preceding radio
        // (the NRC one), avoiding a strict-mode match on the customer-type radios.
         const NRCIDproofRdioBtn = this.page.locator(
        "xpath=//flt-semantics/span[.='NRC / မှတ်ပုံတင်']/preceding::flt-semantics[@role='radio'][1]");
         await NRCIDproofRdioBtn.waitFor({ state: 'visible' });
         await this.page.waitForTimeout(200);
         await NRCIDproofRdioBtn.click();
    }


    async nrcNumberFields(): Promise<void> {
        
        // DistrictOption
         const districtBtn = this.page.locator(
         "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[@aria-label='Districts']"
        );
         await districtBtn.waitFor({ state: 'attached' });
         await this.page.waitForTimeout(1000);
         await this.forceClick(districtBtn);
         await this.page.waitForTimeout(500);

        const fifthoption = this.page.locator("xpath=//flt-semantics/span[.='5']");
        await this.page.waitForTimeout(10);
        await fifthoption.click();

        // Town Selection
        const TownSHipBtn = this.page.locator(
        "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[@aria-label='Townships']");
        await TownSHipBtn.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(500);
        await this.forceClick(TownSHipBtn);

        const secondoption = this.page.locator("xpath=//flt-semantics/span[.='BAMANA']");
        await this.page.waitForTimeout(10);
        await secondoption.click();

        // button
        const Btn = this.page.locator("xpath=(//flt-semantics/span[.='NRC Number *']/following::flt-semantics[10])[last()]");
        await Btn.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(500);
        await this.forceClick(Btn);

        const P_option = this.page.locator("xpath=//flt-semantics/span[.='N']");
        await this.page.waitForTimeout(10);
        await P_option.click();

        // NUMBER FIELD
        const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics/input[@aria-label='Number']");
        await NumberTxtFieldBtn.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(500);
        await this.forceClick(NumberTxtFieldBtn);
        await this.page.waitForTimeout(200);
        await NumberTxtFieldBtn.pressSequentially('33457');
    }

    
    async uploadNRC_FrontPageBtn(): Promise<void> {
         await this.uploadFile(
          "xpath=//flt-semantics/span[.='Upload NRC Front Page']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
         );
    }

    async uploadNRC_BackPageBtn(): Promise<void> {
        await this.uploadFile(
           "xpath=//flt-semantics/span[.='Upload NRC Back Page']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
         );
    }

    async uploadRequest_FormBtn(): Promise<void> {
        await this.uploadFile(
           "xpath=//flt-semantics/span[.='Upload Request Form *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
         );
    }

    
    async account_Lockedreason_RadioBtn() : Promise<void >{

        // ock Reason Radio btn
        const Lockedreason_yesRadioBtn= this.page.locator("xpath=//flt-semantics/span[.='Lock Reason: “Account Locked due to Suspicious Activity Detected”? *']/following::flt-semantics[@role='radio'][1]");
        await Lockedreason_yesRadioBtn.waitFor({ state: 'attached'});
        await this.page.waitForTimeout(200);
        await Lockedreason_yesRadioBtn.check();

        // Login lock Radio Btn
        const LoginLocked_yesRadioBtn= this.page.locator("xpath=//flt-semantics/span[.='Login Locked? *']/following::flt-semantics[@role='radio'][1]").first();
        await LoginLocked_yesRadioBtn.waitFor({state: 'attached'});
        await this.page.waitForTimeout(200);
        await LoginLocked_yesRadioBtn.check();

        // NRC Verifed Radio Btn
        const NRCVerified_yesRadioBtn= this.page.locator("xpath=//flt-semantics/span[.='NRC Verified? *']/following::flt-semantics[@role='radio'][1]");
        await NRCVerified_yesRadioBtn.waitFor({state: 'attached'}); 
        await this.page.waitForTimeout(200);
        await NRCVerified_yesRadioBtn.check();
        

        // Mobile verifed Radio Btn
        const MobileVerified_yesRadioBtn= this.page.locator("xpath=//flt-semantics/span[.='Mobile Verified? *']/following::flt-semantics[@role='radio'][1]");
        await MobileVerified_yesRadioBtn.waitFor({state: 'attached'});
        await this.page.waitForTimeout(200);
        await MobileVerified_yesRadioBtn.check();
        

        // Signature Verified Radio Btn
        const SignatureVerified_yesRadioBtn= this.page.locator("xpath=//flt-semantics/span[.='Signature Verified? *']/following::flt-semantics[@role='radio'][1]");
        await SignatureVerified_yesRadioBtn.waitFor({state: 'attached'});
        await this.page.waitForTimeout(200);
        await SignatureVerified_yesRadioBtn.check();

        // Maker checker completed Radio Btn
        const MakerCheckerCompleted_yesRadioBtn= this.page.locator("xpath=//flt-semantics/span[.='Maker Checker completed? *']/following::flt-semantics[@role='radio'][1]");
        await MakerCheckerCompleted_yesRadioBtn.waitFor({state: 'attached'});
        await this.page.waitForTimeout(200);
        await MakerCheckerCompleted_yesRadioBtn.check();        

    }  

    async simCardOwnerDOC(): Promise<void>{

        await this.uploadFile("xpath=//flt-semantics/span[.='SIM Card Owner Document *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
    }

    async deviceTypeTxtField(): Promise<void>{
        const deviceTypeField = this.page.locator("xpath=//flt-semantics/span[.='Device Type']/following::flt-semantics[1]/input[@data-semantics-role='text-field']");
        await deviceTypeField.waitFor({state: 'attached'});
        await this.page.waitForTimeout(500);
        await deviceTypeField.fill("Test");
    }

    async remarksTxtField(): Promise<void>{
        const remarksField = this.page.locator("xpath=//flt-semantics/span[.='Remark']/following::flt-semantics[1]/input[@data-semantics-role='text-field']");
        await remarksField.waitFor({state: 'attached'});
        await this.page.waitForTimeout(500);
        await remarksField.fill("Test Remark");
    }

    async nextBtn():Promise<void>{
        // Next Button
        const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
        await NxtBtn.waitFor({ state: 'visible' });
        await this.forceClick(NxtBtn);
       // await NxtBtn.click();
        this.page.waitForTimeout(3500);
    }

    async startActionBtn(): Promise<void>{

        const StartAction=this.page.locator("xpath=//flt-semantics[.='Start Action']");
        await StartAction.waitFor({state: 'visible'});
        await StartAction.click();
    }


    async escalatebtn():Promise<void>{

        const esacalte= this.page.locator("xpath=//flt-semantics[@role='button' and contains(text(),'Escalate')]");
        await esacalte.waitFor({state: 'visible'});
        await esacalte.click();
    }

    async MakeForCorrectionBtn(): Promise<void>{

      const MakeForCorrection= this.page.locator("xpath=//flt-semantics[@role='button'  and contains(text(),'Mark for Correction')]");
      await MakeForCorrection.waitFor({state: 'visible'});
      await expect(MakeForCorrection).toBeEnabled();
      await MakeForCorrection.click();
    }

    async reSubmitBtn():Promise<void>{

        const Resubmit= this.page.locator("xpath=//flt-semantics[.='Resubmit']");
        await Resubmit.waitFor({state: 'visible'});
        await expect(Resubmit).toBeEnabled();
        await Resubmit.click();

    }

    


}
