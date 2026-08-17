import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/KYC Verifcation App Pages/KYCPage';
import { approvalDelayPage } from '../../pages/KYC Verifcation App Pages/approvalDelayPage';
import { KBZPayCenterChecker1Page } from '../../pages/KYC Verifcation App Pages/KBZPayCenterChecker1Page';
import { customerUrgentRequestPages } from '../../pages/KYC Verifcation App Pages/customerUrgentRequestPages';
import { KycOfficerPage } from '../../pages/KYC Verifcation App Pages/KycOfficerPage';
import { ClustuerManger1Page} from '../../pages/KYC Verifcation App Pages/ClustuerManger1Page';


const {  kbzPayCenterMaker1, kbzPayCenterChecker1, kycOfficer, Maker, clusterMgr1 } =loginData.KYCVerification;

test.describe.serial('CustomerUrgentRequestFlow - Resolved -Status (ReSubmitted)', () => {
  test.describe.configure({ timeout: 15 * 60 * 1000 });

  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async ({ browser }) => {

    context = await browser.newContext({
      viewport: null,
      recordVideo: { dir: 'videos' },
    });

    page = await context.newPage();
    if (loginData.baseUrl) await page.goto(loginData.baseUrl);
  });

  // priority 1
  test('CustomerUrgentRequestFlowTest - Branch Login', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const Kyc = new KYCPage(page);
    const customerUgerntreq = new customerUrgentRequestPages(page);
     const approvalDelay = new approvalDelayPage(page);

    await login.login(kbzPayCenterMaker1.username, kbzPayCenterMaker1.password);

    await DashBoard.clickAddNew();

    await customerUgerntreq.ticketpriority();

    await customerUgerntreq.customerOnboardDate();

    await customerUgerntreq.customerOnboardChannel();

    await customerUgerntreq.selfOnboarding();

    await customerUgerntreq.enteringCustomerDetails();

    await customerUgerntreq.serviceRequestType();

    await customerUgerntreq.customerUrgentRequestOption();

    await customerUgerntreq.typesofserviceReqTextFiedl();

    await customerUgerntreq.passportIDproofRadiobtn();

    await customerUgerntreq.passportnumField();

    await customerUgerntreq.uploadPassport_FrontPageBtn();

    await customerUgerntreq.uploadPassport_BackpageBtn();

    await customerUgerntreq.uploadRequestForm_Btn();

    await customerUgerntreq.customerSegmentType();

    await customerUgerntreq.uploadSecondaryIDfrontPage_Btn();

    await customerUgerntreq.uploadSecondaryIDBackPage_Btn();

    await customerUgerntreq.uploadAdditionalDocument_Btn();

    await customerUgerntreq.UploadSelfPhoto();

    await Kyc.NextButton();

    await Kyc.EyeIconbtnClick();

    await approvalDelay.sendToCheckerBtn();

    await approvalDelay.kbzcenterChecker_RadioBtn()

    await approvalDelay.UpdateSatgeCMNTbox();

    await approvalDelay.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();
  });

 //2
 
  test(' KBZCenter Checker 1 - For Mark For Correction', async()=>{
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const kycOfficerPage = new KycOfficerPage(page);

    await login.login(kbzPayCenterChecker1.username, kbzPayCenterChecker1.password);
  
    await Kyc.EyeIconbtnClick();
  
    await kycOfficerPage.markForCorrectionbtn();
  
    await Kyc.NextButton();
  
    await Kyc.MenuButton();
  
    await Kyc.LogOut();
 }); 

  // 3
  test('KBZCenterMaker 1 - For Correction', async()=>{
   
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const KBZPayCenterChecker1 = new KBZPayCenterChecker1Page(page);
       
    await login.login(kbzPayCenterMaker1.username, kbzPayCenterMaker1.password);
   
    await Kyc.EyeIconbtnClick();
   
    await KBZPayCenterChecker1.Resubmitbtn();
   
    await KBZPayCenterChecker1.ClusterManager_RadioBtn();
   
    await KBZPayCenterChecker1.UpdateSatgeCMNTbox();
   
    await Kyc.NextButton();
   
    await Kyc.MenuButton();
   
    await Kyc.LogOut();
  });

 // 4
  test(' Cluster Manager  - Send To KYC Officer ', async()=>{
    
   const login = new LoginPage(page);
   const Kyc = new KYCPage(page);
   const KBZCenterChecker= new KBZPayCenterChecker1Page(page);
   const ClusterManager= new ClustuerManger1Page(page);
    
   await login.login(clusterMgr1.username, clusterMgr1.password);
    
   await Kyc.EyeIconbtnClick();
    
   await ClusterManager.sendtoKYCOfficerbtn();
    
   await KBZCenterChecker.UpdateSatgeCMNTbox();
    
   await Kyc.NextButton();
    
   await Kyc.MenuButton();
    
   await Kyc.LogOut();
  
  }); 

  // 5
 test('KycOfficerFlow - resolved = Status (ReSubmitted)', async () => {
  
   const login = new LoginPage(page);
   const Kyc = new KYCPage(page);
   const KycOfficer1 = new KycOfficerPage(page);

   await login.login(kycOfficer.username, kycOfficer.password);

   await KycOfficer1.PullOptionButon();

   await KycOfficer1.eyeIconBtn();

   await KycOfficer1.resolvedbtn();

   await KycOfficer1.ApprovalStatusDropdown();

   await KycOfficer1.reSubmitButton();

   await KycOfficer1.RemarkCMNTbox();

   await KycOfficer1.UpdateSatgeCMNTbox();

   await Kyc.NextButton();

   await Kyc.MenuButton();

   await Kyc.LogOut();
  

  });

  
  test.afterAll(async () => {
    await page?.close();
    await context?.close();
  });

});
