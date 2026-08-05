import { Page } from "playwright";
import { BasePage } from "@fixtures/BasePage";
import { promises } from "dns";

export class Account_Close_Request_Page extends BasePage{
 
    constructor(page: Page){
    super(page);
    }

async Account_Close_RequestOption():Promise<void>{
       
    const Account_Close_Request= this.page.locator("xpath=//flt-semantics/span[.='Account Close Request (Due to system issue - Unverify Level Only)']"    
    ).first();
    await Account_Close_Request.waitFor({state: 'attached'});
    await this.page.waitForTimeout(300);
    await this.forceClick(Account_Close_Request);
    
}

async Type_of_Service_Request():Promise<void>{

    const Type_of_Service_RequestFiled= this.page.locator("xpath= //flt-semantics/span[.='Type of Service Request (In Detail) *']/following::flt-semantics[1]/textarea[@data-semantics-role='text-field']"
    ).first();
    await Type_of_Service_RequestFiled.waitFor({state: 'attached'});
    await this.page.waitForTimeout(300);
    await this.forceClick(Type_of_Service_RequestFiled);
    await this.page.waitForTimeout(300);
    await Type_of_Service_RequestFiled.pressSequentially("Test");
}

async customerSegment():Promise<void>{

    const loc=this.page.locator("xpath=//flt-semantics/span[.='Customer Segment']/following::flt-semantics/span[.='Please select']"
    ).first();
    await loc.waitFor({state: 'attached'});
    await this.page.waitForTimeout(500);
    await this.forceClick(loc);

    // NON HNI
    const NON_HNI= this.page.locator("xpath=//flt-semantics/span[.='Non HNI']").first();
    await this.forceClick(NON_HNI);

    /*
    // HNI 
    const HNI= this.page.locator("xpath=//flt-semantics/span[.='HNI']").first();
    await this.forceClick(HNI);
    */  
}

async resubmitBtn():Promise<void>{

    const loc= this.page.locator("xpath=//flt-semantics[.='Resubmit']").first();
    await loc.waitFor({state: 'visible'});
    await this.page.waitForTimeout(300);
    await this.forceClick(loc);
}
}