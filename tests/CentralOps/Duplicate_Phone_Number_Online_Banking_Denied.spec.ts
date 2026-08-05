/**
 * Source (Java): testsScriptsCentralOps.Duplicate_Phone_Number_Online_Banking_DeniedTest
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial() (1..6). Creds from loginData.json.
 */
import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { Duplicate_Phone_Number_Online_BankingPage } from '../../pages/CentralOpsPage/Duplicate_Phone_Number_Online_BankingPage';
import { CFIPages } from '../../pages/CentralOpsPage/CFIPages';
import { AdminPage } from '../../pages/CentralOpsPage/AdminPage';

const { branchTeam, CIFGrop, adminCops } = loginData.CentralOps;

test.describe.serial('Duplicate_Phone_Number_Online_Banking_Denied', () => {
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
  test('Duplicate_Phone_Number_Online_Banking_DeniedFlow', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const Kyc = new KYCPage(page);
    const DuplicatePhn_OnlineBank = new Duplicate_Phone_Number_Online_BankingPage(page);

    await login.login(branchTeam.username, branchTeam.password);
    await DashBoard.clickAddNew();
    await DuplicatePhn_OnlineBank.Duplicate_Phone_Number_Online_BankingOption();
    await DuplicatePhn_OnlineBank.enterCustomerDetails();
    await DuplicatePhn_OnlineBank.nrcIDproof();
    await DuplicatePhn_OnlineBank.uploadNRC_Back_PageBtn();
    await DuplicatePhn_OnlineBank.uploadNrcFront_PageBtn();
    await DuplicatePhn_OnlineBank.nrcNumberFields();
    await DuplicatePhn_OnlineBank.uploadRequestForm_Btn();
    await DuplicatePhn_OnlineBank.nrcVerified_YesRadioBtn();
    await DuplicatePhn_OnlineBank.uploadSIMCardOwnerDoc_Btn();
    await DuplicatePhn_OnlineBank.customerVerifiedPhnNUm_YesRadioBtn();
    await DuplicatePhn_OnlineBank.im_Banking_usernameField();
    await DuplicatePhn_OnlineBank.userNameVerified_YesRadioBtn();
    await DuplicatePhn_OnlineBank.emailVerified_YesRadioBtn();
    await DuplicatePhn_OnlineBank.docVerified_YesRadioBtn();
    await Kyc.RemarkTextField();
    await Kyc.NextButton();
    await Kyc.EyeIconbtnClick();
    await DuplicatePhn_OnlineBank.EditIconClick();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 2 - dependsOnMethods = Duplicate_Phone_Number_Online_Banking_DeniedFlow
  test('CFI_Flow', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const CFI = new CFIPages(page);

    await login.login(CIFGrop.username, CIFGrop.password);
    await CFI.selectKYCUpdate();
    await CFI.Duplicate_Phone_Number_Online_BankingOption();
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
    const DuplicatePhn_OnlineBank = new Duplicate_Phone_Number_Online_BankingPage(page);
    const CFI = new CFIPages(page);

    await login.login(branchTeam.username, branchTeam.password);
    await Kyc.EyeIconbtnClick();
    await DuplicatePhn_OnlineBank.requestforClosurebutton();
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
    await admin.duplicatePhnAndNoWorkOption();
    await admin.switchRadioBtn();
    await admin.EyeIconbtnClick();
    await admin.denyOption();
    await CFI.UpdateStage_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 5 - dependsOnMethods = adminFlow
  test('branchFlow_2', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const DuplicatePhn_OnlineBank = new Duplicate_Phone_Number_Online_BankingPage(page);
    const CFI = new CFIPages(page);

    await login.login(branchTeam.username, branchTeam.password);
    await Kyc.EyeIconbtnClick();
    await DuplicatePhn_OnlineBank.reOpenbutton();
    await CFI.UpdateStage_Commentsection();
    await Kyc.NextButton();
    await Kyc.MenuButton();
    await Kyc.LogOut();
  });

  // priority 6 - dependsOnMethods = branchFlow_2
  test('CFI_Flow_2', async () => {
    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const CFI = new CFIPages(page);

    await login.login(CIFGrop.username, CIFGrop.password);
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
