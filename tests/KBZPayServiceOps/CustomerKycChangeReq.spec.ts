/**
 * Source (Java): testsScriptKBZPayService.CustomerKycChangeReqTest
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial() in priority order.
 * - Shared page (BaseClass) in beforeAll; per-describe timeout for long flows.
 * - Credentials from test-data/loginData.json. All 7 methods active @Test.
 */
import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { accountClosePage } from '../../pages/KBZPayServiceOpsPage/accountClosePage';
import { AgentMerchant_and_RedAppSM_KYC_ChangePage } from '../../pages/KBZPayServiceOpsPage/AgentMerchant_and_RedAppSM_KYC_ChangePage';
import { Customer_Kyc_ChangeReqPage } from '../../pages/KBZPayServiceOpsPage/Customer_Kyc_ChangeReqPage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { tsoLoginPage } from '../../pages/KBZPayServiceOpsPage/tsoLoginPage';

const { branchTeam, tso: tsoAcc, closeLoop } = loginData.KBZPay;

test.describe.serial('CustomerKycChangeReq', () => {
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

  test.afterAll(async () => {
    await page?.close();
    await context?.close();
  });

  // priority 1
  test('Customer_KYC_ChangeReqFlowTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const accClose = new accountClosePage(page);
    const agent_RedApp = new AgentMerchant_and_RedAppSM_KYC_ChangePage(page);
    const CusKYC = new Customer_Kyc_ChangeReqPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    await accClose.kbzPayServiceOPtion();
    await DashBoard.clickAddNew();
    await agent_RedApp.selectType();
    await CusKYC.customer_KYC_ChangeOption();
    await CusKYC.branchPhnnUmberField();
    await CusKYC.cusName();
    await CusKYC.passportIDproof();
    await CusKYC.passportNumField();
    await CusKYC.uploadNewPassport_PageBtn();
    await CusKYC.uploadOldPassport_PageBtn();
    await CusKYC.phoneNumField();
    await CusKYC.kycChangeFormUpload_Btn();
    await CusKYC.reasonTxtFiled();
    await CusKYC.DateOfBirth();
    await CusKYC.address_TxtField();
    await CusKYC.UploadCustomerFace();
    await CusKYC.additionalDoc_Upload_Btn();
    await CusKYC.fatherNameTXTField();
    await CusKYC.cusKYC_changeType();
    await CusKYC.SelectAllCheckBox_KYC_changeType_Agent();
    await CusKYC.oldKycDataTxtField();
    await CusKYC.newycDataTxtField();
    await CusKYC.infoOf3transaction_Btn();
    await CusKYC.NextButton();
    await CusKYC.EyeIconbtnClick();
    await CusKYC.EditIconbtnClick();
    await CusKYC.NextButton();
    await CusKYC.assignToTSOBtn();
    await CusKYC.recommedUploadLeter_YesRadioBtn();
    await CusKYC.signatureVerfied_YesRadioBtn();
    await CusKYC.docChecked_YesRadioBtn();
    await CusKYC.UpdateStage_Commentsection();
    await CusKYC.NextButton();
    // await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 2 - dependsOnMethods = Customer_KYC_ChangeReqFlowTest
  test('tsoLoginFlow', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);
    await tso.selectKYCUpdate();
    await tso.cutomerKYC_Change_Option();
    await tso.PullOptionButon();
    await tso.EyeIconbtnClick();
    await tso.makeForcorrectionbutton();
    await accClose.UpdateStage_Commentsection();
    await accClose.NextButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 3 - dependsOnMethods = tsoLoginFlow
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

  // priority 4 - dependsOnMethods = branchLoginFlow
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

  // priority 5 - dependsOnMethods = TsoLoginFlow2
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

  // priority 6 - dependsOnMethods = closingLoopLogin
  test('TsoLoginFlow3', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);
    await tso.EyeIconbtnClick();
    await tso.resolvebutton();
    await tso.UpdateStage_Commentsection();
    await accClose.NextButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 7 - dependsOnMethods = TsoLoginFlow3
  test('closingLoopLogin2', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);
    const CusKYC = new Customer_Kyc_ChangeReqPage(page);

    await login.login(closeLoop.username, closeLoop.password);
    await closingLoop.EyeIconbtnClick();
    await closingLoop.closebutton();
    await closingLoop.UpdateStage_Commentsection();
    await accClose.NextButton();
    await closingLoop.EyeIconbtnClick();
    await CusKYC.downloadPDFButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });
});
