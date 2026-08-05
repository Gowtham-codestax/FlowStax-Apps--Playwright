/**
 * Source (Java): testsScriptKBZPayService.MABT_BR_BA_PinReset_PinLock_ReqTest
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial() in priority order.
 * - priority 1 (MABT_BR_BA_PinReset_PinLock_ReqFlowTest) and priority 2 (tsoLoginFlow)
 *   had their @Test annotation COMMENTED OUT in the Java source (disabled), so they are
 *   preserved here as test.skip(...). Remove `.skip` to enable them.
 * - Shared page (BaseClass) in beforeAll; per-describe timeout. Creds from loginData.json.
 */
import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { accountClosePage } from '../../pages/KBZPayServiceOpsPage/accountClosePage';
import { MABT_BR_BA_PinReset_PinLock_ReqPage } from '../../pages/KBZPayServiceOpsPage/MABT_BR_BA_PinReset_PinLock_ReqPage';
import { MABR_KYC_ChangePage } from '../../pages/KBZPayServiceOpsPage/MABR_KYC_ChangePage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { tsoLoginPage } from '../../pages/KBZPayServiceOpsPage/tsoLoginPage';

const { branchTeam, tso: tsoAcc, closeLoop } = loginData.KBZPay;

test.describe.serial('MABT_BR_BA_PinReset_PinLock_Req', () => {
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

  // priority 1 - @Test was commented out in Java (disabled)
  test('MABT_BR_BA_PinReset_PinLock_ReqFlowTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const accClose = new accountClosePage(page);
    const MABT_RBA_PIN = new MABT_BR_BA_PinReset_PinLock_ReqPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    await accClose.kbzPayServiceOPtion();
    await DashBoard.clickAddNew();
    await accClose.selectType();
    await MABT_RBA_PIN.MABT_BR_BA_PinReset_PinLock_ReqOption();
    await accClose.branchPhnnUmberField();
    await accClose.cusName();
    await accClose.passportIDproof();
    await accClose.passportNumField();
    await accClose.uploadNewPassport_PageBtn();
    await accClose.uploadOldPassport_PageBtn();
    await accClose.phoneNumField();
    await accClose.reasonTxtFiled();
    await accClose.DateOfBirth();
    await MABT_RBA_PIN.accType();
    await MABT_RBA_PIN.mABT();
    await MABT_RBA_PIN.staffIDNum_Field();
    await MABT_RBA_PIN.UploadStafFaceBtn();
    await MABT_RBA_PIN.actionOnPIN_DD();
    await MABT_RBA_PIN.pinResetOption();
    await MABT_RBA_PIN.Upload_PinRest_Pinlock_FormBtn();
    await accClose.NextButton();
    await accClose.EyeIconbtnClick();
    await MABT_RBA_PIN.EditIconbtnClick();
    await accClose.NextButton();
    await MABT_RBA_PIN.assignToTSOBtn();
    await accClose.recommedUploadLeter_YesRadioBtn();
    await accClose.signatureVerfied_YesRadioBtn();
    await accClose.docChecked_YesRadioBtn();
    await accClose.UpdateStage_Commentsection();
    await accClose.NextButton();
   // await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 2 - @Test was commented out in Java (disabled)
  test
  ('tsoLoginFlow', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);
    await tso.selectKYCUpdate();
    await tso.MABT_BR_BA_PinResetAndLockReq_Option();
    await tso.PullOptionButon();
    await tso.EyeIconbtnClick();
    await tso.makeForcorrectionbutton();
    await accClose.UpdateStage_Commentsection();
    await accClose.NextButton();
    await accClose.MenuButton();
    await accClose.LogOut();
  });

  // priority 3
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
