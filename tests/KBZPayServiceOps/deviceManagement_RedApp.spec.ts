/**
 * Source (Java): testsScriptKBZPayService.deviceManagement_RedApp
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial() in priority order.
 * - In priority 1 (deviceRedApp) the whole "fill the form" section was COMMENTED OUT in
 *   the Java source; it is preserved verbatim as a comment for fidelity.
 * - Shared page (BaseClass) in beforeAll; per-describe timeout. Creds from loginData.json.
 */
import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { accountClosePage } from '../../pages/KBZPayServiceOpsPage/accountClosePage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { deviceChangeRedApp } from '../../pages/KBZPayServiceOpsPage/deviceChangeRedApp';

const { branchTeam, closeLoop } = loginData.KBZPay;

test.describe.serial('deviceManagement_RedApp', () => {
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
  test('deviceRedApp', async () => {

    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const DashBoard = new DashBoardPage(page);
    const RedApp = new deviceChangeRedApp(page);
    const deviceChange = new deviceChangeRedApp(page);

    await login.login(branchTeam.username, branchTeam.password);
    await accClose.kbzPayServiceOPtion();
    await DashBoard.clickAddNew();
    await accClose.selectType();
    await RedApp.deviceManagement_Change_RedApp();
    await accClose.branchPhnnUmberField();
    await accClose.cusName();
    await accClose.DateOfBirth();
    await accClose.UploadCustomerFace();
    await accClose.passportIDproof();
    await accClose.passportNumField();
    await accClose.uploadNewPassport_PageBtn();
    await accClose.uploadOldPassport_PageBtn();
    await accClose.alternate_phoneNumField();
    await accClose.bankStaffApprovalformBtn();
    await accClose.oldHandsetModelField();
    await RedApp.agentOrMerchantPhnNumField();
    await RedApp.agentOrMerchantCodeField();
    await accClose.NextButton();
    await RedApp.EyeIconbtnClick();
    await RedApp.escalateBtn();
    await accClose.UpdateStage_Commentsection();
    await accClose.NextButton();
    // await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 2 - dependsOnMethods = deviceRedApp
  test('closingLoopLogin', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);

    await login.login(closeLoop.username, closeLoop.password);
    await closingLoop.EyeIconbtnClick();
    await closingLoop.denyButton();
    await closingLoop.UpdateStage_Commentsection();
    await accClose.NextButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 3 - dependsOnMethods = closingLoopLogin
  test('branchLogin', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);

    await login.login(branchTeam.username, branchTeam.password);
    // await accClose.kbzPayServiceOPtion();
    await accClose.EyeIconbtnClick();
    await accClose.downloadPDFButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });
});
