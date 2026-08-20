import { Page } from "playwright";
import { BasePage } from "@fixtures/BasePage";

export class PremiumBanking_interestPages extends BasePage{

    constructor(page:Page){
        super(page);
    }

    async induvidual_RadioBtn():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Record Type *']/following::flt-semantics[1][@role='radio']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(1000);
        await loc.check();
    }

    async bulkFile_RadioBtn():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Record Type *']/following::flt-semantics[@role='radio'][2]"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(1000);
        await loc.check();
    }

    async accoutNumberField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Account No. *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(1000);
        await loc.click();
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('12345678900987654');
    }

    async rateCodeField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Rate Code *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(800);
        await loc.click();
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('Test');
    }

    async currentInterstRate_Field():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Current Interest Rate *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(400);
        await loc.click();
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('10.999');
    }
    
    async newInterstRate_Field():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='New interest rate *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await this.page.waitForTimeout(1000);
        await loc.evaluate((e1:HTMLElement)=> e1.scrollIntoView({block:'center'}));
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(800);
        await loc.click();
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('12.90');
    }

    async interestStart_Date(): Promise<void> {

       const CurrentDay = new Date().getDate();

       const Calender = this.page.locator("xpath=//flt-semantics/span[.='Interest Start Date *']/following::flt-semantics[1]/input[@aria-label='YYYY-MM-DD']");
    //    await this.page.waitForTimeout(1000);
    //    await Calender.evaluate((e1:HTMLElement) => e1.scrollIntoView({block: 'center'}));
       await this.page.waitForTimeout(1000);
       await Calender.waitFor({ state: 'visible' });
       await this.page.waitForTimeout(1000);
       await Calender.click();

       const today = this.page.locator(
        `xpath=//flt-semantics[contains(text(),'${CurrentDay}') and contains(text(),'Today')]`);
       await today.waitFor({ state: 'visible' });
       await this.forceClick(today);

       const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
       await OkClick.click();
       await this.page.waitForTimeout(200);
    }

    async maturity_Date(): Promise<void> {
        
       const NextDate = new Date();
       NextDate.setDate(NextDate.getDate()+ 1);
       const nextDay=NextDate.getDate();

       const Calender = this.page.locator("xpath=//flt-semantics/span[.='Maturity Date *']/following::flt-semantics[1]/input[@aria-label='YYYY-MM-DD']");
       await Calender.waitFor({ state: 'visible' });
       await this.page.waitForTimeout(1000);
       await Calender.click();

       const next = this.page.getByRole('button', { name: new RegExp(`^${nextDay},`) });
       await next.waitFor({ state: 'visible' });
       await this.page.waitForTimeout(1000);
       await this.forceClick(next);

       const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
       await this.page.waitForTimeout(200);
       await OkClick.click();
       await this.page.waitForTimeout(200);
    }

    async tenorField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Tenor *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(1000);
        await loc.click();
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('123787');
    }

    async uploadDetails():Promise<void>{

       await this.MultiUploadFile("xpath=//flt-semantics/span[.='Details *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
    }

   async editAction_MutliFilesUpload(): Promise<void> {
       await this.Edit_MultiUploadFile(
        "xpath=//flt-semantics/span[.='Details *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
       );

       await this.page.waitForTimeout(5000);
    }

    
    async next_maturity_Date(): Promise<void> {
       
       const NextDate = new Date();
       NextDate.setDate(NextDate.getDate()+ 2);
       const nextDay=NextDate.getDate();

       const Calender = this.page.locator("xpath=//flt-semantics/span[.='Next Maturity Date']/following::flt-semantics[1]/input[@aria-label='YYYY-MM-DD']");
       await Calender.waitFor({ state: 'visible' });
       await this.page.waitForTimeout(1000);
       await Calender.click();

       const dayAfter = this.page.getByRole('button', { name: new RegExp(`^${nextDay},`) });

       await dayAfter.waitFor({ state: 'visible' });
       await this.page.waitForTimeout(1000);
       await this.forceClick(dayAfter);

       const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
       await this.page.waitForTimeout(200);
       await OkClick.click();
       await this.page.waitForTimeout(200);
    }

    async ProductField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Product *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.evaluate((e1:HTMLElement)=> e1.scrollIntoView({block:'center'}));
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(1300);
        await this.forceClick(loc);
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('Test');
    }

    
    async initialDeposit_NumField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Initial Deposit *']/following::input[@data-semantics-role='text-field'][1]");
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(1000);
        await loc.click();
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('900000');
    }

    async CustomerIdField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Customer ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']");
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(1000);
        await this.forceClick(loc);
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('122333445');
    }

    
    async customerName():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Customer Name *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(800);
        await this.forceClick(loc);
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('Test');
    }

    async segmentField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Segment']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.evaluate((e1:HTMLElement)=> e1.scrollIntoView({block: "center"}));
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(800);
        await this.forceClick(loc);
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('Test');
    }


    async rmField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='RM']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(800);
        await loc.click();
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('Test');
    }


    async acTypeField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='A/C Type']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(800);
        await loc.click();
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('Current');
    }

    async ac_CategoryField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='A/C Category']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(800);
        await loc.click();
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('Test');
    }


    async remarkField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Remark']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(800);
        await loc.click();
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('Test');
    }

    async EditIconbtnClick(): Promise<void> {
       
        const EditBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
        await EditBtn.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(1000);
        await EditBtn.click();
        await this.page.waitForTimeout(4000);
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


    async confirmButton(): Promise<void> {
         const loc = this.page.locator(
           "xpath=//flt-semantics[@role='button' and contains(text(),'Confirm')]"
         );
         await loc.waitFor({ state: 'visible' });
         await this.page.waitForTimeout(500);
         await loc.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
         await this.page.waitForTimeout(3000);
         await loc.evaluate((el: HTMLElement) =>
           el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
         );
    }

    
    async bulkRecord_CustomerIdField():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Customer ID']/following::flt-semantics[1]/input[@data-semantics-role='text-field'][1]");
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(1000);
        await this.forceClick(loc);
        await this.page.waitForTimeout(300);
        await loc.pressSequentially('122333445');
    }

    
    async bulkRecord_customerName():Promise<void>{

        const loc = this.page.locator("xpath=//flt-semantics/span[.='Customer Name']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
        );
        await loc.waitFor({state:"visible"});
        await this.page.waitForTimeout(800);
        await this.forceClick(loc);
        await this.page.waitForTimeout(200);
        await loc.pressSequentially('Test');
    }

    
    















    












    
}