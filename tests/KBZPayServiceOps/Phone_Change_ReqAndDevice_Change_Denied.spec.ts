/**
 * Source (Java): testsScriptKBZPayService.Phone_Change_ReqAndDevice_Change_DeniedTest
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
import { Phone_Change_ReqAndDevice_Change_ReqPage } from '../../pages/KBZPayServiceOpsPage/Phone_Change_ReqAndDevice_Change_ReqPage';
import { MABR_KYC_ChangePage } from '../../pages/KBZPayServiceOpsPage/MABR_KYC_ChangePage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { tsoLoginPage } from '../../pages/KBZPayServiceOpsPage/tsoLoginPage';

const { branchTeam, tso: tsoAcc, closeLoop } = loginData.KBZPay;

test.describe.serial('Phone_Change_ReqAndDevice_Change_Denied', () => {
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
  test('Phone_Change_ReqAndDevice_Change_DeniedFlowTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const accClose = new accountClosePage(page);
    const Phone_DeviceChange = new Phone_Change_ReqAndDevice_Change_ReqPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    await accClose.kbzPayServiceOPtion();
    await DashBoard.clickAddNew();
    await accClose.selectType();
    await Phone_DeviceChange.Phone_Change_ReqAndDevice_Change_ReqOption();
    await Phone_DeviceChange.branchPhnnUmberField();
    await Phone_DeviceChange.cusName();
    await Phone_DeviceChange.nrcIDproof();
    await Phone_DeviceChange.nrcNumberFields();
    await Phone_DeviceChange.uploadNrcFront_PageBtn();
    await Phone_DeviceChange.uploadNRC_Back_PageBtn();
    await Phone_DeviceChange.DateOfBirth();
    await Phone_DeviceChange.uploadCustomerFacePhoto();
    await Phone_DeviceChange.currentBalanceNumFiedl();
    await Phone_DeviceChange.infoOf3transaction_Btn();
    await Phone_DeviceChange.reasonTxtFiled();
    await Phone_DeviceChange.bankStaffApprovalformBtn();
    await Phone_DeviceChange.oldHandsetModelField();
    await Phone_DeviceChange.kbzRegPhnNumField();
    await Phone_DeviceChange.oldPhnNumField();
    await Phone_DeviceChange.newPhnNumField();
    await Phone_DeviceChange.uploadDocUrl();
    await accClose.NextButton();
    await Phone_DeviceChange.EyeIconbtnClick();
    await Phone_DeviceChange.EditIconClick();
    await Phone_DeviceChange.assignToTSOBtn();
    await accClose.UpdateStage_Commentsection();
    await accClose.NextButton();
    // await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 2 - dependsOnMethods = Phone_Change_ReqAndDevice_Change_DeniedFlowTest
  test('tsoLoginFlow', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);
    await tso.selectKYCUpdate();
    await tso.phoneAndDevice_Change_Option();
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
