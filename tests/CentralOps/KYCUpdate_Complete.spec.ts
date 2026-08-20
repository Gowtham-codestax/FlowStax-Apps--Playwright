import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { KYC1_COPS_Page } from '../../pages/CentralOpsPage/KYC1_COPS_Page';

const { branchTeam, kyc1Cops, kyc2Cops } = loginData.CentralOps;


test.describe.serial('KYC Update - Complete Flow', () => {
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
  test('branchTeam  - Application Corrected', async () => {
    
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);

    await login.login(branchTeam.username, branchTeam.password);

    await Kyc.EyeIconbtnClick();
    
    await Kyc.applicationCorrectedBtn();
  
    await Kyc.NextButton();
    
    await Kyc.MenuButton();
    
    await Kyc.LogOut();
  
  }); 

  // 4
  test('kyc1Cops Login - For Update', async () => {

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
    
    await Kyc1.updateButton();
    
    await Kyc1.update_Commentsection();
    
    await Kyc.NextButton();
    
    await Kyc.MenuButton();
    
    await Kyc.LogOut();
  
  });

  // 5
  test('Kyc2Flow Login - For Complete Button', async () => {

    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const Kyc1 = new KYC1_COPS_Page(page);

    await login.login(kyc2Cops.username, kyc2Cops.password);
    
    await Kyc1.selectKYCUpdate();
    
    await Kyc1.checkerRadioButton();
    
    await Kyc1.KYC_UpdateWorkflow_Option();
    
    await Kyc1.PullButton();
    
    await Kyc1.PullOptionButon();
    
    await Kyc1.eyeIconBtn();
    
    await Kyc1.completeButton();
    
    await Kyc1.branchAu_YesRadiobtn();
    
    await Kyc1.update_Commentsection();
    
    await Kyc.NextButton();
    
    await Kyc.MenuButton();
    
    await Kyc.LogOut();
  
  });

  // 6
  test('branchFlow', async () => {
    
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    
    await Kyc.EyeIconbtnClick();
    
    await Kyc.MenuButton();
    
    await Kyc.LogOut();
  
  });

  test.afterAll(async () => {
    await page?.close();
    await context?.close();
  });

});
