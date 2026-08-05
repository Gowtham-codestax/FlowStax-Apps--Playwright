/**
 * Source (Java): testScriptNonPo.FuctionPettyCashFlowTest
 * Migrated to: Playwright + TypeScript
 * - Single @Test (FuctionPettyCashApproveTest) -> one test in a describe with a shared page.
 * - `petty.unitOPtion()` was commented out in the Java source; preserved as a comment.
 * - Shared page (BaseClass) in beforeAll; per-describe timeout. Creds from loginData.json.
 */
import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { PettyCashPage } from '../../pages/NonPoServicePage/PettyCashPage';

const { npoFunction } = loginData.NonPoTeam;

test.describe.serial('FuctionPettyCashFlow', () => {
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

  test('FuctionPettyCashApproveTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const petty = new PettyCashPage(page);

    await login.login(npoFunction.username, npoFunction.password);
    await petty.nonPoProcess_Option();
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
    await petty.atMCR_CodePOPtion();
    await petty.QuantityField();
    // await petty.unitOPtion();
    await petty.priceField();
    await petty.showMenuButton();
    await petty.duplicateRowButton();
    await petty.uploadAttachments_Btn();
    await petty.NextButton();
    await petty.EyeIconbtnClick();
    await petty.EditIconbtnClick();
    await petty.lineItems_2ndRowEditing();
    await petty.NextButton();
    await petty.submitButton();
    await petty.UpdateSatgeCMNTbox();
    await petty.NextButton();
    await petty.MenuButton();
    await petty.LogOut();
  });

  test.afterAll(async () => {
    await page?.close();
    await context?.close();
  });
});
