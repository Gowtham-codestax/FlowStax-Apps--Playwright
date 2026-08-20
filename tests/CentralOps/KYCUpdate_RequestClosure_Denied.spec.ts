import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { KYC1_COPS_Page } from '../../pages/CentralOpsPage/KYC1_COPS_Page';
import { AdminPage } from '@pages/CentralOpsPage/AdminPage';

const { branchTeam, kyc1Cops, kyc2Cops, adminCops } = loginData.CentralOps;


test.describe.serial('KYC Update - (Denied) Request Closure (Customer confused)', () => {
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

  // 1
  test('KYC Update Flow - Branch Login', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const Kyc = new KYCPage(page);

    await login.login(branchTeam.username, branchTeam.password);

    await DashBoard.clickAddNew();

    await Kyc.selectKYCupdate();

    await Kyc.enterCustomerDetails();

    await Kyc.uploadPassport_BackpageBtn();

    await Kyc.uploadPassport_FrontPageBtn();
    
    await Kyc.passPortNumField();
    
    await Kyc.uploadRequestForm_Btn();
    
    await Kyc.Regular_KYC_RequestBtn();
    
    await Kyc.typesOf_KYC_ChangeReq_Checkboxes();
    
    await Kyc.RemarkTextField();
    
    await Kyc.NextButton();
    
    await Kyc.EyeIconbtnClick();
    
    await Kyc.EditIconbtnClick();
  
    await Kyc.NextButton();
    
    await Kyc.MenuButton();
    
    await Kyc.LogOut();
  
  });

  // 2
  test('kyc1Cops Login - Mark For Correction', async () => {

    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const Kyc1 = new KYC1_COPS_Page(page);

    await login.login(kyc1Cops.username, kyc1Cops.password);
    
    await Kyc1.selectKYCUpdate();
    
    await Kyc1.MakerRadioButton();
    
    await Kyc1.KYC_UpdateWorkflow_Option();
    
    await Kyc1.PullButton();
    
    await Kyc1.PullOptionButon();
    
    await Kyc1.eyeIconBtn();
    
    await Kyc1.startActionButton();
    
    await Kyc1.update_Commentsection();
    
    await Kyc.NextButton();
    
    await Kyc1.eyeIconBtn();
    
    await Kyc.markForCorrectionbtn();
    
    await Kyc1.update_Commentsection();
    
    await Kyc.NextButton();
    
    await Kyc.MenuButton();
    
    await Kyc.LogOut();
  
  });

   // 3
  test('branchTeam  - Request For Closure - Customer Confused', async () => {
    
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);

    await login.login(branchTeam.username, branchTeam.password);

    await Kyc.EyeIconbtnClick();
    
    await Kyc.requestForClosure_Btn();

    await Kyc.ReasonForClosure_Reason();

    await Kyc.cutomerRefused_Option();

    await Kyc.update_Commentsection();
  
    await Kyc.NextButton();
    
    await Kyc.MenuButton();
    
    await Kyc.LogOut();
  
  }); 


  // 4
  test('Admin Login - Denied ', async () => {
    
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const Admin= new AdminPage(page);

    await login.login(adminCops.username, adminCops.password);
    
    await Kyc.EyeIconbtnClick();

    await Admin.denyOption();

    await Kyc.update_Commentsection();

    await Kyc.NextButton();
    
    await Kyc.MenuButton();
    
    await Kyc.LogOut();
  
  });

  test.afterAll(async () => {
    await page?.close();
    await context?.close();
  });

});
