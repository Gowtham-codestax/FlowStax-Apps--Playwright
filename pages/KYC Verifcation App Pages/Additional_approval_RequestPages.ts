import { Page } from "@playwright/test";
import { BasePage } from "../../fixtures/BasePage";


export class Additional_approval_RequestPages extends BasePage{
   constructor(page: Page) {
    super(page);
   }

   async additionalApprovalReq_Option(): Promise<void>{
    const loc = this.page.locator("xpath=//flt-semantics/span[.='Additional Approval Request (Unable to include secondary ID at obd stage - at app level)']"
     );
    await loc.waitFor({state: "visible"});
    await loc.click();
    await this.page.waitForTimeout(500);
   }

   async reSubmit():Promise<void>{
    const loc = this.page.locator("xpath=//flt-semantics[contains(.,'Resubmit') and @role='button']");
    await loc.waitFor({state: "attached"});
    await this.page.waitForTimeout(1500);
    await loc.click();
   }
    
   async EditIconbtnClick(): Promise<void> {
    const EditBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await EditBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await EditBtn.click();
    await this.page.waitForTimeout(8000);
   }



   


}
