/**
 * Source (Java): testsScriptKBZPayService.Pin_Reset_Req_Device_Change_Req_Denied_FlowTest
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial() in priority order.
 * - Shared page (BaseClass) in beforeAll; per-describe timeout. Creds from loginData.json.
 * - All 7 methods active @Test.
 */
import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { accountClosePage } from '../../pages/KBZPayServiceOpsPage/accountClosePage';
import { Pin_Reset_Req_Device_Change_ReqPage } from '../../pages/KBZPayServiceOpsPage/Pin_Reset_Req_Device_Change_ReqPage';
import { MABR_KYC_ChangePage } from '../../pages/KBZPayServiceOpsPage/MABR_KYC_ChangePage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { tsoLoginPage } from '../../pages/KBZPayServiceOpsPage/tsoLoginPage';

const { branchTeam, tso: tsoAcc, closeLoop } = loginData.KBZPay;

test.describe.serial('Pin_Reset_Req_Device_Change_Req_Denied', () => {
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
  test('Pin_Reset_Req_Device_Change_ReqPage_DeniedFlowTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const accClose = new accountClosePage(page);
    const PinReset_DeviceChange = new Pin_Reset_Req_Device_Change_ReqPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    await accClose.kbzPayServiceOPtion();
    await DashBoard.clickAddNew();
    await accClose.selectType();
    await PinReset_DeviceChange.Pin_Reset_Req_Device_Change_ReqOption();
    await accClose.branchPhnnUmberField();
    await accClose.cusName();
    await PinReset_DeviceChange.nrcIDproof();
    await PinReset_DeviceChange.nrcNumberFields();
    await PinReset_DeviceChange.uploadNrcFront_PageBtn();
    await PinReset_DeviceChange.uploadNRC_Back_PageBtn();
    await PinReset_DeviceChange.DateOfBirth();
    await PinReset_DeviceChange.addressFiled();
    await accClose.UploadCustomerFace();
    await accClose.currentBalanceNumFiedl();
    await accClose.fathersNameField();
    await accClose.infoOf3transaction_Btn();
    await accClose.reasonTxtFiled();
    await PinReset_DeviceChange.alternate_phoneNumField();
    await PinReset_DeviceChange.loanStatusField();
    await PinReset_DeviceChange.errorDetailsField();
    await PinReset_DeviceChange.dateAndTime_IssueOccured();
    await accClose.bankStaffApprovalformBtn();
    await accClose.oldHandsetModelField();
    await PinReset_DeviceChange.kbzRegPhnNumField();
    await accClose.NextButton();
    await PinReset_DeviceChange.EyeIconbtnClick();
    await PinReset_DeviceChange.EditIconClick();
    await accClose.assignToTSOBtn();
    await accClose.UpdateStage_Commentsection();
    await accClose.NextButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 2 - dependsOnMethods = Pin_Reset_Req_Device_Change_ReqPage_DeniedFlowTest
  test('tsoLoginFlow', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);
    await tso.selectKYCUpdate();
    await tso.pinResetAndDevice_Change_Option();
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
    await closingLoop.denyButton();
    await closingLoop.UpdateStage_Commentsection();
    await accClose.NextButton();
    await closingLoop.EyeIconbtnClick();
    await MABRKYC.downloadPDFButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });
});
