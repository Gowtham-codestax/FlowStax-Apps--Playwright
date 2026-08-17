/**
 * Source (Java): testsScriptKBZPayService.Account_Resumption_Fraud_RelatedTest
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial() in priority order (1..6).
 * - Shared page/context (BaseClass) in beforeAll; per-describe timeout. Creds from loginData.json.
 * - Video recorded on the context (recordVideo) -> videos/ on context close.
 * - All 6 methods active @Test.
 */
import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { accountClosePage } from '../../pages/KBZPayServiceOpsPage/accountClosePage';
import { Pin_Reset_Req_Device_Change_ReqPage } from '../../pages/KBZPayServiceOpsPage/Pin_Reset_Req_Device_Change_ReqPage';
import { Account_Resumption_Fraud_RelatedPage } from '../../pages/KBZPayServiceOpsPage/Account_Resumption_Fraud_RelatedPage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { tsoLoginPage } from '../../pages/KBZPayServiceOpsPage/tsoLoginPage';

const { branchTeam, closeLoop } = loginData.KBZPay;

test.describe.serial('Account_Resumption_Fraud_Related', () => {
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
  test('Account_Resumption_Fraud_RelatedFlowTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const accClose = new accountClosePage(page);
    const PinReset_DeviceChange = new Pin_Reset_Req_Device_Change_ReqPage(page);
    const Account_Fraud = new Account_Resumption_Fraud_RelatedPage(page);

    await login.login(branchTeam.username, branchTeam.password);

    await accClose.kbzPayServiceOPtion();

    await DashBoard.clickAddNew();

    await accClose.selectType();

    await Account_Fraud.Account_Resumption_Fraud_RelatedOption();

    await accClose.branchPhnnUmberField();

    await accClose.cusName();

    await PinReset_DeviceChange.nrcIDproof();

    await PinReset_DeviceChange.nrcNumberFields();

    await PinReset_DeviceChange.uploadNrcFront_PageBtn();

    await PinReset_DeviceChange.uploadNRC_Back_PageBtn();

    await PinReset_DeviceChange.DateOfBirth();

    await PinReset_DeviceChange.addressFiled();

    await accClose.UploadCustomerFace();

    await accClose.fathersNameField();

    await accClose.bankStaffApprovalformBtn();

    await Account_Fraud.kbzRegPhnNumField();

    await Account_Fraud.reasonForContactingBackField();

    await accClose.NextButton();

    await accClose.EyeIconbtnClick();

    await Account_Fraud.EditIconClick();

    await Account_Fraud.escalateBtn();

    await accClose.UpdateStage_Commentsection();

    await accClose.NextButton();

    // await accClose.MenuButton();

    await accClose.LogOut();
  });

  // priority 2 - dependsOnMethods = Account_Resumption_Fraud_RelatedFlowTest
  test('closingLoopLogin', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);

    await login.login(closeLoop.username, closeLoop.password);

    await closingLoop.EyeIconbtnClick();

    await closingLoop.markForCorrectionbutton();

    await closingLoop.UpdateStage_Commentsection();

    await accClose.NextButton();

    await accClose.MenuButton();

    await accClose.LogOut();
  });

  // priority 3 - dependsOnMethods = closingLoopLogin
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
  test('closingLoopLogin2', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);

    await login.login(closeLoop.username, closeLoop.password);

    await closingLoop.EyeIconbtnClick();

    await closingLoop.ReOpenbutton();

    await closingLoop.additionalDoc_Upload_Btn();

    await closingLoop.UpdateStage_Commentsection();

    await accClose.NextButton();

    await accClose.MenuButton();

    await accClose.LogOut();
  });

  // priority 5 - dependsOnMethods = closingLoopLogin2
  test('branchLoginFlow2', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const Account_Fraud = new Account_Resumption_Fraud_RelatedPage(page);
    const tso = new tsoLoginPage(page);

    await login.login(branchTeam.username, branchTeam.password);

    // await accClose.kbzPayServiceOPtion();

    await tso.EyeIconbtnClick();

    await Account_Fraud.escalateBtn();

    await accClose.UpdateStage_Commentsection();

    await accClose.NextButton();

    await accClose.MenuButton();

    await accClose.LogOut();
  });

  // priority 6 - dependsOnMethods = branchLoginFlow2
  test('closingLoopLogin3', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);

    await login.login(closeLoop.username, closeLoop.password);

    await closingLoop.EyeIconbtnClick();

    await closingLoop.closebutton();

    await closingLoop.UpdateStage_Commentsection();

    await accClose.NextButton();

    await closingLoop.EyeIconbtnClick();

    await closingLoop.downloadPDFButton();

    await accClose.MenuButton();

    await accClose.LogOut();
  });
});
