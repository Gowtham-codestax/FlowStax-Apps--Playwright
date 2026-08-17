import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/KYC Verifcation App Pages/KYCPage';
import { customerUrgentRequestPages } from '../../pages/KYC Verifcation App Pages/customerUrgentRequestPages';
import { KycOfficerPage } from '../../pages/KYC Verifcation App Pages/KycOfficerPage';

const { Maker,  kycOfficer, } =loginData.KYCVerification;

test.describe.serial('CustomerUrgentRequestFlow - Resolved Status(KYC Updated)', () => {
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

    await login.login(Maker.username, Maker.password);

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

    await Kyc.MenuButton();

    await Kyc.LogOut();
  });

  //2
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

  // priority 3 - dependsOnMethods = CustomerUrgentRequestFlowTest
  test('KycOfficerFlow - resolved = Status(KYC Updated)', async () => {

    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const KycOfficer1 = new KycOfficerPage(page);

    await login.login(kycOfficer.username, kycOfficer.password);

    await KycOfficer1.PullOptionButon();

    await KycOfficer1.eyeIconBtn();

    await KycOfficer1.resolvedbtn();

    await KycOfficer1.ApprovalStatusDropdown();

    await KycOfficer1.kycUpdatedButton();

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
