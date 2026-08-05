/**
 * Source (Java): testScriptNonPo.PettyCashRejectFlowTest
 * Migrated to: Playwright + TypeScript
 * - @Test(priority, dependsOnMethods) -> test.describe.serial() in priority order (1..8).
 * - Shared page (BaseClass) in beforeAll; per-describe timeout. Creds from loginData.json.
 * - `financeAuthorizer.nonPoProcess_Option()` was commented out in the approver flows and
 *   is preserved as a comment.
 */
import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { PettyCashPage } from '../../pages/NonPoServicePage/PettyCashPage';
import { FinanceAuthorizerPage } from '../../pages/NonPoServicePage/FinanceAuthorizerPage';

const {
  npoBranch,
  npoFinanceAuthorizer,
  npoDcfo,
  npoCfo,
  npoDceo,
  npoCeo,
  npoFinanceReconcile,
} = loginData.NonPoTeam;

test.describe.serial('PettyCashRejectFlow', () => {
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


  test('pettyCash_Reject_Flow', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const petty = new PettyCashPage(page);

    await login.login(npoBranch.username, npoBranch.password);
    await DashBoard.clickAddNew();
    await petty.selectCategory();
    await petty.pettyCashOption();
    await petty.invoice_NumField();
    await petty.invoiceCreationDate();
    await petty.vendorDetailsType();
    await petty.vendorID();
    await petty.searchFor_vendorIDField();
    await petty.MGR_PvtLtdiD();
    await petty.currencyType();
    await petty.mpt();
    await petty.descriptionTxtField();
    await petty.commodityType();
    await petty.dummy_Desc_CodePOPtion();
    await petty.QuantityField();
    await petty.priceField();
    await petty.uploadAttachments_Btn();
    await petty.NextButton();
    await petty.EyeIconbtnClick();
    await petty.EditIconbtnClick();
    await petty.NextButton();
    await petty.submitButton();
    await petty.UpdateSatgeCMNTbox();
    await petty.NextButton();
    await petty.MenuButton();
    await petty.LogOut();
  });


  test('financeAuthorizerFlow', async () => {
    const login = new LoginPage(page);
    const petty = new PettyCashPage(page);
    const financeAuthorizer = new FinanceAuthorizerPage(page);

    await login.login(npoFinanceAuthorizer.username, npoFinanceAuthorizer.password);
    // await financeAuthorizer.nonPoProcess_Option();
    await financeAuthorizer.EyeIconbtnClick();
    await financeAuthorizer.approveButton();
    await financeAuthorizer.UpdateSatgeCMNTbox();
    await petty.NextButton();
    await petty.MenuButton();
    await petty.LogOut();
  });

  
  test('dcfoFlow', async () => {
    const login = new LoginPage(page);
    const petty = new PettyCashPage(page);
    const financeAuthorizer = new FinanceAuthorizerPage(page);

    await login.login(npoDcfo.username, npoDcfo.password);
    // await financeAuthorizer.nonPoProcess_Option();
    await financeAuthorizer.EyeIconbtnClick();
    await financeAuthorizer.approveButton();
    await financeAuthorizer.UpdateSatgeCMNTbox();
    await petty.NextButton();
    await petty.MenuButton();
    await petty.LogOut();
  });

  
  test('CFOFlow', async () => {
    const login = new LoginPage(page);
    const petty = new PettyCashPage(page);
    const financeAuthorizer = new FinanceAuthorizerPage(page);

    await login.login(npoCfo.username, npoCfo.password);
    // await financeAuthorizer.nonPoProcess_Option();
    await financeAuthorizer.EyeIconbtnClick();
    await financeAuthorizer.approveButton();
    await financeAuthorizer.UpdateSatgeCMNTbox();
    await petty.NextButton();
    await petty.MenuButton();
    await petty.LogOut();
  });

  
  test('DCEOFlow', async () => {
    const login = new LoginPage(page);
    const petty = new PettyCashPage(page);
    const financeAuthorizer = new FinanceAuthorizerPage(page);

    await login.login(npoDceo.username, npoDceo.password);
    // await financeAuthorizer.nonPoProcess_Option();
    await financeAuthorizer.EyeIconbtnClick();
    await financeAuthorizer.approveButton();
    await financeAuthorizer.UpdateSatgeCMNTbox();
    await petty.NextButton();
    await petty.MenuButton();
    await petty.LogOut();
  });

  
  test('CEOFlow', async () => {
    const login = new LoginPage(page);
    const petty = new PettyCashPage(page);
    const financeAuthorizer = new FinanceAuthorizerPage(page);

    await login.login(npoCeo.username, npoCeo.password);
    // await financeAuthorizer.nonPoProcess_Option();
    await financeAuthorizer.EyeIconbtnClick();
    await financeAuthorizer.approveButton();
    await financeAuthorizer.UpdateSatgeCMNTbox();
    await petty.NextButton();
    await petty.MenuButton();
    await petty.LogOut();
  });

  
  test('FinanceRenocileFlow', async () => {
    const login = new LoginPage(page);
    const petty = new PettyCashPage(page);
    const financeAuthorizer = new FinanceAuthorizerPage(page);

    await login.login(npoFinanceReconcile.username, npoFinanceReconcile.password);
    // await financeAuthorizer.nonPoProcess_Option();
    await financeAuthorizer.EyeIconbtnClick();
    await financeAuthorizer.rejectButton();
    await financeAuthorizer.UpdateSatgeCMNTbox();
    await petty.NextButton();
    await petty.MenuButton();
    await petty.LogOut();
  });

  
  test('branchFlow', async () => {
    const login = new LoginPage(page);
    const petty = new PettyCashPage(page);

    await login.login(npoBranch.username, npoBranch.password);
    await petty.EyeIconbtnClick();
    await petty.MenuButton();
    await petty.LogOut();
  });


   test.afterAll(async () => {
    await page?.close();
    await context?.close();
  });

});
