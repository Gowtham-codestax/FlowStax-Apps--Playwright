/**
 * Source (Java): testsScriptsCentralOps.Im_Banking_CIFTest
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial(). Creds from loginData.json.
 */
import { test, Page } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { Im_Banking_CIFPage } from '../../pages/CentralOpsPage/Im_Banking_CIFPage';
import { CFIPages } from '../../pages/CentralOpsPage/CFIPages';

const { branchTeam, CIFGrop } = loginData.CentralOps;

test.describe.serial('Im_Banking_CIF', () => {
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
  test('im_Banking_CIFFlowTest', async () => {
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
    // await ImBanking.MenuButton();
    await Kyc.LogOut();
  });

  // priority 2 - dependsOnMethods = im_Banking_CIFFlowTest
  test('CFI_Flow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const CFI = new CFIPages(page);

    await login.login(CIFGrop.username, CIFGrop.password);
    await CFI.selectKYCUpdate();
    await CFI.im_BankingOption();
    await CFI.PullOptionButon();
    await CFI.EyeIconbtnClick();
    await CFI.startActionebutton();
    await CFI.UpdateStage_Commentsection();
    await Kyc.NextButton();
    await CFI.EyeIconbtnClick();
    await CFI.verifyAndActivebutton();
    await CFI.verifedandUserActivated_YES_Radiobtn();
    await Kyc.NextButton();
    await CFI.EyeIconbtnClick();
    await CFI.authorizebutton();
    await CFI.UpdateStage_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });
});
