/**
 * Source (Java): testsScriptKBZPayService.AgentMerchant_and_RedAppSM_KYC_Change_DeniedTest
 * Migrated to: Playwright + TypeScript
 *
 * - TestNG @Test(priority, dependsOnMethods) -> test.describe.serial() in priority order.
 * - Shared page (BaseClass) in beforeAll; per-describe timeout for long flows.
 * - Credentials from test-data/loginData.json.
 * - All 7 methods are active @Test in this Java (denied variant) -> all run.
 */
import { test, Page } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { accountClosePage } from '../../pages/KBZPayServiceOpsPage/accountClosePage';
import { AgentMerchant_and_RedAppSM_KYC_ChangePage } from '../../pages/KBZPayServiceOpsPage/AgentMerchant_and_RedAppSM_KYC_ChangePage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { tsoLoginPage } from '../../pages/KBZPayServiceOpsPage/tsoLoginPage';

const { branchTeam, tso: tsoAcc, closeLoop } = loginData.KBZPay;

test.describe.serial('AgentMerchant_and_RedAppSM_KYC_Change_Denied', () => {
  test.describe.configure({ timeout: 15 * 60 * 1000 });

  let page: Page;

  test.beforeAll(async ({ browser }) => {
   
    page = await browser.newPage();
     if (loginData.baseUrl) await page.goto(loginData.baseUrl);
  
    });
    
  
  test('AgemtMerchantand_RedAppFlowTest', async () => {
    
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const accClose = new accountClosePage(page);
    const agent_RedApp = new AgentMerchant_and_RedAppSM_KYC_ChangePage(page);

    await login.login(branchTeam.username, branchTeam.password);
    
    await accClose.kbzPayServiceOPtion();
    
    await DashBoard.clickAddNew();
    
    await agent_RedApp.selectType();
    
    await agent_RedApp.AgentMerchant_RedAppSM_KYC_ChangeOption();
    
    await accClose.branchPhnnUmberField();
    
    await accClose.cusName();
    
    await accClose.passportIDproof();
    
    await accClose.passportNumField();
    
    await accClose.uploadNewPassport_PageBtn();
    
    await accClose.uploadOldPassport_PageBtn();
    
    await accClose.phoneNumField();
    
    await accClose.reasonTxtFiled();
    
    await accClose.DateOfBirth();
    
    await agent_RedApp.accountType();
    
    await agent_RedApp.agentAccType();
    
    await agent_RedApp.agentKYC_changeType();
    
    await agent_RedApp.SelectAllCheckBox_KYC_changeType_Agent();
    
    await agent_RedApp.kycChangeFormUpload_Btn();
    
    await agent_RedApp.oldKycDataTxtField();
    
    await agent_RedApp.newycDataTxtField();
    
    await agent_RedApp.shopFrontAndBack_Upload_Btn();
    
    await agent_RedApp.businnesLicence_Upload_Btn();
    
    await agent_RedApp.shortCodeTxtField();
    
    await agent_RedApp.shopName_TxtField();
    
    await agent_RedApp.address_TxtField();
    
    await agent_RedApp.customerFace_Upload_Btn();
    
    await agent_RedApp.currentBalanceTXTField();
    
    await agent_RedApp.qalStatusDD();
    
    await agent_RedApp.yesOption();
    
    await agent_RedApp.additionalDoc_Upload_Btn();
    
    await agent_RedApp.NextButton();
    
    await agent_RedApp.EyeIconbtnClick();
    
    await agent_RedApp.EditIconbtnClick();
    
    await accClose.NextButton();
    
    await accClose.assignToTSOBtn();
    
    await accClose.recommedUploadLeter_YesRadioBtn();
    
    await accClose.signatureVerfied_YesRadioBtn();
    
    await accClose.docChecked_YesRadioBtn();
    
    await accClose.UpdateStage_Commentsection();
    
    await accClose.NextButton();
 
    // await accClose.MenuButton();
   
    await accClose.LogOut();
 
  });

  
  test('TSOLoginFlow', async () => {
   
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);
   
    await tso.selectKYCUpdate();
   
    await tso.agentMerchantandRedApp_Option();
   
    await tso.PullOptionButon();
   
    await tso.EyeIconbtnClick();
   
    await tso.makeForcorrectionbutton();
   
    await accClose.UpdateStage_Commentsection();
   
    await accClose.NextButton();
   
    await accClose.MenuButton();
   
    await accClose.LogOut();
  
  });

  
  test('branchLoginFlow', async () => {
    
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    
    // await accClose.kbzPayServiceOPtion();
    
    await tso.EyeIconbtnClick();
    
    await accClose.applicationCorrectedButton();

    await accClose.NextButton();
    
    await accClose.MenuButton();
    
    await accClose.LogOut();
  
  });

  
  test('TsoLoginFlow2', async () => {
    
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

  
    await login.login(tsoAcc.username, tsoAcc.password);
    
    await tso.EyeIconbtnClick();
    
    await tso.needMoreInfobutton();
    
    await tso.UpdateStage_Commentsection();
    
    await accClose.NextButton();
    
    await accClose.MenuButton();
   
    await accClose.LogOut();
  
  });


  test('closingLoopLogin', async () => {

    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);

    await login.login(closeLoop.username, closeLoop.password);

    await closingLoop.EyeIconbtnClick();
    
    await closingLoop.updatebutton();
    
    await closingLoop.additionalDoc_Upload_Btn();
    
    await closingLoop.UpdateStage_Commentsection();
    
    await accClose.NextButton();
    
    await accClose.MenuButton();
    
    await accClose.LogOut();
 
  });

 
  test('TsoLoginFlow3', async () => {

    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);

    await tso.EyeIconbtnClick();

    await tso.denyButton();

    await tso.UpdateStage_Commentsection();

    await accClose.NextButton();

    await accClose.MenuButton();

    await accClose.LogOut();
  
  });

  
  test('closingLoopLogin2', async () => {

    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);

    await login.login(closeLoop.username, closeLoop.password);

    await closingLoop.EyeIconbtnClick();

    await closingLoop.downloadPDFButton();

    await accClose.MenuButton();

    await accClose.LogOut();

  });

    test.afterAll(async () => {

    await page?.close();
  });
});
