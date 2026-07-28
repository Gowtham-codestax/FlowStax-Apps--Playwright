/**
 * Source (Java): testsScriptsCentralOps.KYC_EscalateFlowTest
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial() in priority order (1..7).
 * - Shared page (BaseClass) in beforeAll; per-describe timeout. Creds from loginData.json.
 */
import { test, Page } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { KYC1_COPS_Page } from '../../pages/CentralOpsPage/KYC1_COPS_Page';
import { SAOPage } from '../../pages/CentralOpsPage/SAOPage';

const { branchTeam, kyc1Cops, kyc2Cops, saoCops } = loginData.CentralOps;

test.describe.serial('KYC_EscalateFlow', () => {
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
  test('kyc_EscalateTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const Kyc = new KYCPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    await DashBoard.clickAddNew();
    await Kyc.selectKYCupdate();
    await Kyc.enterCustomerDetails();
    await Kyc.uploadPassport_BackpageBtn();
    await Kyc.uploadPassport_FrontPageBtn();
    await Kyc.passPortNumField();
    await Kyc.uploadRequestForm_Btn();
    await Kyc.Regular_KYC_RequestBtn();
    await Kyc.typesOf_KYC_ChangeReq_Checkboxes();
    await Kyc.RemarkTextField();
    await Kyc.NextButton();
    await Kyc.EyeIconbtnClick();
    await Kyc.EditIconbtnClick();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 2 - dependsOnMethods = kyc_EscalateTest
  test('Kyc1_StartAndEscalate_Flow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const Kyc1 = new KYC1_COPS_Page(page);

    await login.login(kyc1Cops.username, kyc1Cops.password);
    await Kyc1.selectKYCUpdate();
    await Kyc1.MakerRadioButton();
    await Kyc1.KYC_UpdateWorkflow_Option();
    await Kyc1.PullButton();
    await Kyc1.PullOptionButon();
    await Kyc1.eyeIconBtn();
    await Kyc1.startActionButton();
    await Kyc1.update_Commentsection();
    await Kyc.NextButton();
    await Kyc1.eyeIconBtn();
    await Kyc1.escalateButton();
    await Kyc1.update_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 3 - dependsOnMethods = Kyc1_StartAndEscalate_Flow
  test('sao_ApplicationCorrected_Flow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const Kyc1 = new KYC1_COPS_Page(page);
    const SAO = new SAOPage(page);

    await login.login(saoCops.username, saoCops.password);
    await Kyc1.eyeIconBtn();
    await SAO.editIconClick();
    await Kyc.NextButton();
    await SAO.applicationCorrectedBtn();
    await Kyc1.update_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 4 - dependsOnMethods = sao_ApplicationCorrected_Flow
  test('Kyc1_UpdateFlow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const Kyc1 = new KYC1_COPS_Page(page);

    await login.login(kyc1Cops.username, kyc1Cops.password);
    await Kyc1.eyeIconBtn();
    await Kyc1.updateButton();
    await Kyc1.update_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 5 - dependsOnMethods = Kyc1_UpdateFlow
  test('Kyc2_ReWorkFlow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const Kyc1 = new KYC1_COPS_Page(page);

    await login.login(kyc2Cops.username, kyc2Cops.password);
    await Kyc1.selectKYCUpdate();
    await Kyc1.checkerRadioButton();
    await Kyc1.KYC_UpdateWorkflow_Option();
    await Kyc1.PullButton();
    await Kyc1.PullOptionButon();
    await Kyc1.eyeIconBtn();
    await Kyc1.reWorkButton();
    await Kyc1.update_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 6 - dependsOnMethods = Kyc2_ReWorkFlow
  test('kycRework_Complete_Flow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const Kyc1 = new KYC1_COPS_Page(page);

    await login.login(kyc1Cops.username, kyc1Cops.password);
    await Kyc1.eyeIconBtn();
    await Kyc1.reWorkcompleteButton();
    await Kyc1.update_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 7 - dependsOnMethods = kycRework_Complete_Flow
  test('Kyc2CompleteFlow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const Kyc1 = new KYC1_COPS_Page(page);

    await login.login(kyc2Cops.username, kyc2Cops.password);
    await Kyc1.eyeIconBtn();
    await Kyc1.completeButton();
    await Kyc1.branchAu_YesRadiobtn();
    await Kyc1.update_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });
});
