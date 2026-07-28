/**
 * Source (Java): testsScriptKBZPayService.MABR_KYC_ChangeTest
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial() in priority order.
 * - In priority 1 the NRC block + a couple of trailing calls were COMMENTED OUT in the
 *   Java source; preserved as comments for fidelity.
 * - Shared page (BaseClass) in beforeAll; per-describe timeout. Creds from loginData.json.
 */
import { test, Page } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { accountClosePage } from '../../pages/KBZPayServiceOpsPage/accountClosePage';
import { AgentMerchant_and_RedAppSM_KYC_ChangePage } from '../../pages/KBZPayServiceOpsPage/AgentMerchant_and_RedAppSM_KYC_ChangePage';
import { Customer_Kyc_ChangeReqPage } from '../../pages/KBZPayServiceOpsPage/Customer_Kyc_ChangeReqPage';
import { MABR_KYC_ChangePage } from '../../pages/KBZPayServiceOpsPage/MABR_KYC_ChangePage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { tsoLoginPage } from '../../pages/KBZPayServiceOpsPage/tsoLoginPage';

const { branchTeam, tso: tsoAcc, closeLoop } = loginData.KBZPay;

test.describe.serial('MABR_KYC_Change', () => {
  test.describe.configure({ timeout: 15 * 60 * 1000 });

  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    if (loginData.baseUrl) await page.goto(loginData.baseUrl);
  });

  test.afterAll(async () => {
    await page?.close();
  });

  // priority 1
  test('MABR_KYC_ChangeFlowTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const accClose = new accountClosePage(page);
    const agent_RedApp = new AgentMerchant_and_RedAppSM_KYC_ChangePage(page);
    const CusKYC = new Customer_Kyc_ChangeReqPage(page);
    const MABRKYC = new MABR_KYC_ChangePage(page);

    await login.login(branchTeam.username, branchTeam.password);
    await accClose.kbzPayServiceOPtion();
    await DashBoard.clickAddNew();
    await agent_RedApp.selectType();
    await MABRKYC.mabr_KYC_ChangeOption();
    await accClose.branchPhnnUmberField();
    await accClose.cusName();

    /* Commented out in Java source:
      await MABRKYC.nrcIDproof();
      await MABRKYC.nrcNumberFields();
      await MABRKYC.uploadNrcFront_PageBtn();
      await MABRKYC.uploadNRC_Back_PageBtn();
    */

    await CusKYC.passportIDproof();
    await CusKYC.passportNumField();
    await CusKYC.uploadNewPassport_PageBtn();
    await CusKYC.uploadOldPassport_PageBtn();
    await accClose.phoneNumField();
    await MABRKYC.DateOfBirth();
    await agent_RedApp.kycChangeFormUpload_Btn();
    await MABRKYC.UploadNewUserFace();
    await accClose.reasonTxtFiled();
    await agent_RedApp.NextButton();
    await MABRKYC.EyeIconbtnClick();
    // await CusKYC.EditIconbtnClick();
    // await accClose.NextButton();
    await accClose.assignToTSOBtn();
    await accClose.recommedUploadLeter_YesRadioBtn();
    await accClose.signatureVerfied_YesRadioBtn();
    await accClose.docChecked_YesRadioBtn();
    await accClose.UpdateStage_Commentsection();
    await accClose.NextButton();
    // await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 2 - dependsOnMethods = MABR_KYC_ChangeFlowTest
  test('tsoLoginFlow', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);
    await tso.selectKYCUpdate();
    await tso.MABR_KYC_Change_Option();
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
    const MABRKYC = new MABR_KYC_ChangePage(page);

    await login.login(closeLoop.username, closeLoop.password);
    await closingLoop.EyeIconbtnClick();
    await closingLoop.closebutton();
    await closingLoop.UpdateStage_Commentsection();
    await accClose.NextButton();
    await closingLoop.EyeIconbtnClick();
    await MABRKYC.downloadPDFButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });
});
