import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { approvalDelayPage } from '../../pages/KYC Verifcation App Pages/approvalDelayPage';
import { KBZPayCenterChecker1Page } from '../../pages/KYC Verifcation App Pages/KBZPayCenterChecker1Page';
import { KycOfficerPage } from '../../pages/KYC Verifcation App Pages/KycOfficerPage';
import { ClustuerManger1Page} from '../../pages/KYC Verifcation App Pages/ClustuerManger1Page';

const { kbzPayCenterMaker1, kbzPayCenterChecker1, kycOfficer, clusterMgr1 } = loginData.KYCVerification;

test.describe.serial('ApprovalDelay - Denied', () => {
  test.describe.configure({ timeout: 15 * 60 * 1000 });

  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async ({ browser }) => {

    context = await browser.newContext({
      viewport: null,
      recordVideo: { dir: 'test-results/videos' },
    });

    page = await context.newPage();
    if (loginData.baseUrl) await page.goto(loginData.baseUrl);
  });


  // priority 1
  test('approvalDelayFlow - Branch Flow', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const Kyc = new KYCPage(page);
    const approvalDelay = new approvalDelayPage(page);

    await login.login(kbzPayCenterMaker1.username, kbzPayCenterMaker1.password);

    await DashBoard.clickAddNew();

    await approvalDelay.ticketPriorityMedium();

    await approvalDelay.customerOnboardDate();

    await approvalDelay.customerOnboardChannel();

    await approvalDelay.selfOnboarding();

    await approvalDelay.enteringCustomerDetails();

    await approvalDelay.serviceRequestType();

    await approvalDelay.approvalDelayOption();

    await approvalDelay.typeOfServiceRequestField();

    await approvalDelay.passportIDProof();

    await approvalDelay.customerPassportNumField();

    await approvalDelay.uploadPassport_FrontPageBtn();

    await approvalDelay.uploadPassport_BackpageBtn();

    await approvalDelay.uploadRequestForm_Btn();

    await approvalDelay.customerSegmentType();

    await approvalDelay.uploadSecondaryIDfrontPage_Btn();

    await approvalDelay.uploadSecondaryIDBackPage_Btn();

    await approvalDelay.uploadAdditionalDocument_Btn();

    await approvalDelay.UploadNRCRecmendationLetter();

    await approvalDelay.UploadSelfPhoto();

    await approvalDelay.NextButton();

    await approvalDelay.EyeIconbtnClick();

    await approvalDelay.sendToCheckerBtn();

    await approvalDelay.kbzcenterChecker_RadioBtn();

    await approvalDelay.UpdateSatgeCMNTbox();

    await approvalDelay.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();
  });

  // priority 2 - dependsOnMethods = approvalDelayFlow
  test('KBZPayCenterChecker  - Mark For correction', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const KbzPaycentercheck1 = new KBZPayCenterChecker1Page(page);

    await login.login(kbzPayCenterChecker1.username, kbzPayCenterChecker1.password);

    // await KbzPaycentercheck1.KYCserviceReqOPtion();

    await KbzPaycentercheck1.eyeIconBtn();

    await KbzPaycentercheck1.MakeForCorectionbtn();

    await KbzPaycentercheck1.UpdateSatgeCMNTbox();

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
  

   //5
  test('kycOfficerFlow', async () => {
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

    await KycOfficer1.eyeIconBtn();

    await KycOfficer1.downloadPDFButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();
  });


  test.afterAll(async () => {

    await page?.close();
    await context?.close();
  });
});
