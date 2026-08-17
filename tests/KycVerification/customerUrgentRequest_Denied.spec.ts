import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/KYC Verifcation App Pages/KYCPage';
import { customerUrgentRequestPages } from '../../pages/KYC Verifcation App Pages/customerUrgentRequestPages';
import { KycOfficerPage } from '../../pages/KYC Verifcation App Pages/KycOfficerPage';
import { KBZPayCenterChecker1Page } from '@pages/KYC Verifcation App Pages/KBZPayCenterChecker1Page';
import { ClustuerManger1Page} from '../../pages/KYC Verifcation App Pages/ClustuerManger1Page';

const { Maker,kbzPayCenterMaker1, kbzPayCenterChecker1, clusterMgr1, kycOfficer, } =loginData.KYCVerification;

test.describe.serial('CustomerUrgentRequestFlow - Denied', () => {
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
  test('CustomerUrgentRequestFlowTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const Kyc = new KYCPage(page);
    const customerUgerntreq = new customerUrgentRequestPages(page);

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

    await customerUgerntreq.SendCheckerButtonClick();

    await customerUgerntreq.KBZcenterCheckerRadioButon();

    await customerUgerntreq.UpdateSatgeCMNTbox();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();
  });

  //2
  test('KBZPay Center Checker1 Login - send to KYC Officer',async()=>{

    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const KBZPayCenterChecker= new KBZPayCenterChecker1Page(page);

    await login.login(kbzPayCenterChecker1.username, kbzPayCenterChecker1.password);

    await KBZPayCenterChecker.eyeIconBtn();

    await KBZPayCenterChecker.sendtoKYCOfficerbtn();

    await KBZPayCenterChecker.UpdateSatgeCMNTbox();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();

  });


  //3
  test('KYC officer Login - Mark for correction', async()=>{
  
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
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

  //4
  test('KBZPay Center Maker - For Correction and Assigned to Cluster Manager', async () => {

    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const KycOfficer1 = new KycOfficerPage(page);
    const customerUgerntreq = new customerUrgentRequestPages(page);

    await login.login(kbzPayCenterMaker1.username, kbzPayCenterMaker1.password);

    await KycOfficer1.eyeIconBtn();

    await customerUgerntreq.reSubmitButtonClick();

    await customerUgerntreq.CluserManagerRadioButtton();

    await customerUgerntreq.UpdateSatgeCMNTbox();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();

  });

  //5
  test('Cluster Manager - To assigned to KYC officer', async()=>{
    
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const clusterManager= new ClustuerManger1Page(page);

    await login.login(clusterMgr1.username, clusterMgr1.password);

    await Kyc.EyeIconbtnClick();

    await clusterManager.sendtoKYCOfficerbtn();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();

  });

   //6
  test('KYC officer Login - Denied ', async()=>{
  
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const kycOfficerPage = new KycOfficerPage(page);
  
    await login.login(kycOfficer.username, kycOfficer.password);
  
    await kycOfficerPage.PullOptionButon();
  
    await kycOfficerPage.eyeIconBtn();
  
    await kycOfficerPage.Denybtn();
  
    await kycOfficerPage.UpdateSatgeCMNTbox();
  
    await Kyc.NextButton();

    await Kyc.EyeIconbtnClick();

    await kycOfficerPage.downloadPDFButton();
  
    await Kyc.MenuButton();
  
    await Kyc.LogOut();
  
  });

  test.afterAll(async () => {
    await page?.close();
    await context?.close();
  });

});
