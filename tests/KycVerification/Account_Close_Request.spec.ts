import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { approvalDelayPage } from '../../pages/KYC Verifcation App Pages/approvalDelayPage';
import { KBZPayCenterChecker1Page } from '../../pages/KYC Verifcation App Pages/KBZPayCenterChecker1Page';
import { KycOfficerPage } from '../../pages/KYC Verifcation App Pages/KycOfficerPage';
import { Account_Close_Request_Page} from '../../pages/KYC Verifcation App Pages/Account_Close_Request_Page';

const { kbzPayCenterSr, kbzPayCenterChecker1, kycOfficer, Maker} = loginData.KYCVerification;

test.describe('Account Close Request ',()=>{

    test.describe.configure({timeout : 15 * 60 *1000});
    let context:BrowserContext;
    let page:Page;

    test.beforeAll(async({browser})=>{

        context = await browser.newContext({ 
            viewport:null,
            recordVideo: {dir : 'test-results/videos'},
        });

      page =await  context.newPage();
      if(loginData.baseUrl){
        await page.goto(loginData.baseUrl);
      }
    });


test('Account Close Request - Branch Flow ',async() =>{

    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const Kyc = new KYCPage(page);
    const approvalDelay = new approvalDelayPage(page);
    const Account_CloseReq= new Account_Close_Request_Page(page);

    await login.login(Maker.username, Maker.password);

    await DashBoard.clickAddNew();

    await approvalDelay.ticketPriorityMedium();

    await approvalDelay.customerOnboardDate();

    await approvalDelay.customerOnboardChannel();

    await approvalDelay.selfOnboarding();

    await approvalDelay.enteringCustomerDetails();

    await approvalDelay.serviceRequestType();

    await Account_CloseReq.Account_Close_RequestOption();

    await approvalDelay.typeOfServiceRequestField();

    await approvalDelay.passportIDProof();

    await approvalDelay.customerPassportNumField();

    await approvalDelay.uploadPassport_FrontPageBtn();

    await approvalDelay.uploadPassport_BackpageBtn();

    await approvalDelay.uploadRequestForm_Btn();

    await Account_CloseReq.customerSegment();

    await approvalDelay.uploadSecondaryIDfrontPage_Btn();

    await approvalDelay.uploadSecondaryIDBackPage_Btn();

    await approvalDelay.uploadAdditionalDocument_Btn();

    await approvalDelay.UploadNRCRecmendationLetter();

    await approvalDelay.UploadSelfPhoto();

    await approvalDelay.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();
   
})

test('Kyc Officer Flow ', async()=>{

    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const KbzPaycentercheck1 = new KBZPayCenterChecker1Page(page);
    const kycOfficerPage = new KycOfficerPage(page);

    await login.login(kycOfficer.username, kycOfficer.password);

    await kycOfficerPage.PullOptionButon();

    await kycOfficerPage.eyeIconBtn();

    await kycOfficerPage.markForCorrectionbtn();

    await kycOfficerPage.UpdateSatgeCMNTbox();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();


});

test('Branch Flow -',async()=>{

    



})

test.afterAll(async()=>{

    await page?.close();
    await context?.close();   
});

});