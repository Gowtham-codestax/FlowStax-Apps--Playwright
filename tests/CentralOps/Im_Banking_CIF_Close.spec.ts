/**
 * Source (Java): testsScriptsCentralOps.Im_Banking_CIF_CloseTest
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial() (1..5). Creds from loginData.json.
 */
import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { Im_Banking_CIFPage } from '../../pages/CentralOpsPage/Im_Banking_CIFPage';
import { CFIPages } from '../../pages/CentralOpsPage/CFIPages';
import { AdminPage } from '../../pages/CentralOpsPage/AdminPage';

const { branchTeam, CIFGrop, adminCops } = loginData.CentralOps;

test.describe.serial('Im_Banking_CIF_Close', () => {
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
  test('im_Banking_CIFF_CloseFlowTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const Kyc = new KYCPage(page);
    const ImBanking = new Im_Banking_CIFPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    await DashBoard.clickAddNew();
    await ImBanking.im_Banking_CIfOPtion();
    await ImBanking.enterCustomerDetails();
    await ImBanking.nrcIDproof();
    await ImBanking.uploadNRC_Back_PageBtn();
    await ImBanking.uploadNrcFront_PageBtn();
    await ImBanking.nrcNumberFields();
    await ImBanking.uploadReqForm_PageBtn();
    await ImBanking.mobileVerifed_YesRadioBtn();
    await ImBanking.signatureVerifed_YesRadioBtn();
    await ImBanking.makerCheckerCompleted_YesRadioBtn();
    await ImBanking.cifAndMakerAccCreated_inIbanking_YesRadioBtn();
    await ImBanking.nrcVerifed_YesRadioBtn();
    await ImBanking.typeOfCIFReCheckBoxes();
    await Kyc.RemarkTextField();
    await ImBanking.NextButton();
    await Kyc.EyeIconbtnClick();
    await ImBanking.EditIconClick();
    await ImBanking.NextButton();
    await ImBanking.MenuButton();
    await Kyc.LogOut();
  });

  // priority 2 - dependsOnMethods = im_Banking_CIFF_CloseFlowTest
  test('CFI_Flow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const CFI = new CFIPages(page);

    await login.login(CIFGrop.username, CIFGrop.password);
    await CFI.selectWorkFlowBtn();
    await CFI.im_BankingOption();
    await CFI.PullOptionButon();
    await CFI.EyeIconbtnClick();
    await CFI.startActionebutton();
    await CFI.UpdateStage_Commentsection();
    await Kyc.NextButton();
    await CFI.EyeIconbtnClick();
    await CFI.makeForcorrectionbutton();
    await CFI.UpdateStage_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 3 - dependsOnMethods = CFI_Flow
  test('branchFlow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const CFI = new CFIPages(page);
    const ImBanking = new Im_Banking_CIFPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    await Kyc.EyeIconbtnClick();
    await ImBanking.requestforClosurebutton();
    await ImBanking.reasonForClosure();
    await ImBanking.customerRefusedButton();
    await CFI.UpdateStage_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 4 - dependsOnMethods = branchFlow
  test('adminFlow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const CFI = new CFIPages(page);
    const admin = new AdminPage(page);

    await login.login(adminCops.username, adminCops.password);
    await admin.selectDropDownFilter();
    await admin.cifWork_Option();
    await admin.switchRadioBtn();
    await admin.EyeIconbtnClick();
    await admin.closeApplicationOption();
    await CFI.UpdateStage_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 5 - dependsOnMethods = adminFlow
  test('branchFlow_2', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    await Kyc.EyeIconbtnClick();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });
});
