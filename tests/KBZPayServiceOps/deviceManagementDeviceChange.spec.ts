/**
 * - Shared page (BaseClass) in beforeAll; per-describe timeout. Creds from loginData.json.
 */
import { test, Page } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { accountClosePage } from '../../pages/KBZPayServiceOpsPage/accountClosePage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { deviceManagement_DeviceChange } from '../../pages/KBZPayServiceOpsPage/deviceManagement_DeviceChange';

const { branchTeam, closeLoop } = loginData.KBZPay;

test.describe.serial('deviceManagementDeviceChange', () => {
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
  test('deviceChange', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const accClose = new accountClosePage(page);
    const deviceChange = new deviceManagement_DeviceChange(page);

    await login.login(branchTeam.username, branchTeam.password);
    await accClose.kbzPayServiceOPtion();
    await DashBoard.clickAddNew();
    await accClose.selectType();
    await deviceChange.deviceManagement_Change();
    await accClose.branchPhnnUmberField();
    await accClose.cusName();
    await accClose.DateOfBirth();
    await accClose.UploadCustomerFace();
    await accClose.passportIDproof();
    await accClose.passportNumField();
    await accClose.uploadNewPassport_PageBtn();
    await accClose.uploadOldPassport_PageBtn();
    await deviceChange.alternate_phoneNumField();
    await accClose.bankStaffApprovalformBtn();
    await deviceChange.oldHandsetModelField();
    await deviceChange.kbzRegisterdPhnNum();
    await accClose.NextButton();
    await accClose.EyeIconbtnClick();
    await deviceChange.escalateBtn();
    await accClose.UpdateStage_Commentsection();
    await accClose.NextButton();
    // await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 2 - dependsOnMethods = deviceChange
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
  test('branchLogin', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);

    await login.login(branchTeam.username, branchTeam.password);
    // await accClose.kbzPayServiceOPtion();
    await accClose.EyeIconbtnClick();
    await accClose.applicationCorrectedButton();
    await accClose.UpdateStage_Commentsection();
    await accClose.NextButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 4 - dependsOnMethods = branchLogin
  test('closingloop2', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);

    await login.login(closeLoop.username, closeLoop.password);
    await closingLoop.EyeIconbtnClick();
    await closingLoop.closebutton();
    await closingLoop.UpdateStage_Commentsection();
    await accClose.NextButton();
    await accClose.EyeIconbtnClick();
    await accClose.downloadPDFButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });
});
