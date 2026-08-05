import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { accountClosePage } from '../../pages/KBZPayServiceOpsPage/accountClosePage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { tsoLoginPage } from '../../pages/KBZPayServiceOpsPage/tsoLoginPage';

const { branchTeam, tso: tsoAcc, closeLoop } = loginData.KBZPay;

test.describe.serial('accountClose', () => {
  test.describe.configure({ timeout: 15 * 60 * 1000 }); // long serial flows

  // Single shared page across all dependent tests (BaseClass equivalent).
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext({
      viewport: null,
      recordVideo: { dir: 'test-results/videos' },
    });
    page = await context.newPage();
    if (loginData.baseUrl) {
      await page.goto(loginData.baseUrl);
    }
  });


  // priority 1
  test('AccountCloseTest', async () => {
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const accClose = new accountClosePage(page);

    await login.login(branchTeam.username, branchTeam.password);

    await accClose.kbzPayServiceOPtion();

    await DashBoard.clickAddNew();

    await accClose.selectType();

    await accClose.accCloseOption();

    await accClose.branchPhnnUmberField();

    await accClose.cusName();

    await accClose.passportIDproof();

    await accClose.passportNumField();

    await accClose.uploadNewPassport_PageBtn();

    await accClose.uploadOldPassport_PageBtn();

    await accClose.phoneNumField();

    await accClose.reasonTxtFiled();

    await accClose.DateOfBirth();

    await accClose.addressFiled();

    await accClose.UploadCustomerFace();

    await accClose.currentBalanceNumFiedl();

    await accClose.fathersNameField();

    await accClose.bankStaffApprovalformBtn();

    await accClose.infoOf3transaction_Btn();

    await accClose.sparrowTicketNumField();

    await accClose.oldNRC_NumField();

    await accClose.sparrowTicker_DateandTime();

    await accClose.alternate_phoneNumField();

    await accClose.NextButton();

    await accClose.EyeIconbtnClick();

    await accClose.assignToTSOBtn();

    await accClose.recommedUploadLeter_YesRadioBtn();

    await accClose.signatureVerfied_YesRadioBtn();

    await accClose.docChecked_YesRadioBtn();

    await accClose.UpdateStage_Commentsection();

    await accClose.NextButton();

   // await accClose.MenuButton();

    await accClose.LogOut();
  });

  // priority 2
  test('TSOLoginFlow', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);

    await tso.selectKYCUpdate();

    await tso.accountClose_Option();

    await tso.PullOptionButon();

    await tso.EyeIconbtnClick();

    await tso.makeForcorrectionbutton();

    await accClose.UpdateStage_Commentsection();

    await accClose.NextButton();

    await accClose.MenuButton();

    await accClose.LogOut();
  });

  // priority 3 - dependsOnMethods = TSOLoginFlow
  test('branchLogin', async () => {
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

  // priority 4 - dependsOnMethods = branchLogin
  test('tsoLogin2', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);

    await tso.EyeIconbtnClick();

    await tso.resolvebutton();

    await accClose.UpdateStage_Commentsection();

    await accClose.NextButton();

    await accClose.MenuButton();

    await accClose.LogOut();
  });

  // priority 5 - dependsOnMethods = tsoLogin2
  test('closingLoopLogin', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);

    await login.login(closeLoop.username, closeLoop.password);

    await closingLoop.EyeIconbtnClick();

    await closingLoop.closebutton();

    await accClose.NextButton();

    await closingLoop.EyeIconbtnClick();

    await accClose.downloadPDFButton();

    await accClose.MenuButton();

    await accClose.LogOut();
  });

    test.afterAll(async () => {
    await page?.close();
    await context?.close();
  });

  
});
