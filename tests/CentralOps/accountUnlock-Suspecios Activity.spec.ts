import { test, Page, BrowserContext} from '@playwright/test';
import loginData from '../../test-data/loginData.json';
import {LoginPage} from '../../pages/CentralOpsPage/LoginPage';
import {DashBoardPage} from '../../pages/CentralOpsPage/DashBoardPage';
import { AccountUnlock_PaygilantPage } from '@pages/CentralOpsPage/AccountUnlock_PaygilantPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { KYC1_COPS_Page } from '../../pages/CentralOpsPage/KYC1_COPS_Page';
import { CFIPages } from '@pages/CentralOpsPage/CFIPages';


const { branchTeam, FMU, CIFGrop } = loginData.CentralOps;

test.describe.serial('AccountUnlock - Suspicious Activity Detected Case - Unlock User Flow', () => {
    test.describe.configure({timeout: 15 * 60 * 1000}); // long serial flows

// Single shared page across all dependent tests (BaseClass equivalent).
let context: BrowserContext;
let page: Page;

test.beforeAll(async ({browser})=>{
    context = await browser.newContext({
      viewport: null,
      recordVideo: { dir: 'videos' },
    });

    page = await context.newPage();
    if(loginData.baseUrl){
        await page.goto(loginData.baseUrl);
    }
    
});


test('AccountUnlock - Suspicious Activity Detected Case', async()=> {
    const login = new LoginPage(page);
    const Dashboard = new DashBoardPage(page);
    const accountUnlock_Paygilant = new AccountUnlock_PaygilantPage(page);
    const Kyc = new KYCPage(page)

    await login.login(branchTeam.username, branchTeam.password);

    await Dashboard.clickAddNew();
    
    await accountUnlock_Paygilant.categoryDD();

    await accountUnlock_Paygilant.accountUnlock_PaygilantOption();
    
    await accountUnlock_Paygilant.customerDetails();

    await accountUnlock_Paygilant.nrcIDproof();
   
    await accountUnlock_Paygilant.nrcNumberFields();

    await accountUnlock_Paygilant.uploadNRC_FrontPageBtn();

    await accountUnlock_Paygilant.uploadNRC_BackPageBtn();

    await accountUnlock_Paygilant.uploadRequest_FormBtn();

    await accountUnlock_Paygilant.account_Lockedreason_RadioBtn();

    await accountUnlock_Paygilant.simCardOwnerDOC();

    await accountUnlock_Paygilant.deviceTypeTxtField();

    await accountUnlock_Paygilant.remarksTxtField();

    await accountUnlock_Paygilant.nextBtn();

    await Kyc.MenuButton();

    await Kyc.LogOut();

})

test('FMU Login Flow Test', async()=>{

    const login = new LoginPage(page);
    const accountUnlock_Paygilant = new AccountUnlock_PaygilantPage(page);
    const Kyc = new KYCPage(page)
    const Kyc1 = new KYC1_COPS_Page(page);

    await login.login(FMU.username, FMU.password);

    await Kyc1.PullOptionButon();

    await Kyc.EyeIconbtnClick();

    await accountUnlock_Paygilant.MakeForCorrectionBtn();

    await Kyc1.update_Commentsection();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();
    
})

test('Branch Flow - Mark For correction', async()=>{

    const login = new LoginPage(page);
    const accountUnlock_Paygilant = new AccountUnlock_PaygilantPage(page);
    const Kyc = new KYCPage(page)
    const Kyc1 = new KYC1_COPS_Page(page);

    await login.login(branchTeam.username, branchTeam.password);

    await Kyc.EyeIconbtnClick();

    await accountUnlock_Paygilant.reSubmitBtn();

    await Kyc1.update_Commentsection();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();

})

test('FMU Login 2 For update ', async()=>{

    const login = new LoginPage(page);
    const accountUnlock_Paygilant = new AccountUnlock_PaygilantPage(page);
    const Kyc = new KYCPage(page);
    const Kyc1 = new KYC1_COPS_Page(page);

    await login.login(FMU.username, FMU.password);

    await Kyc.EyeIconbtnClick();

    await accountUnlock_Paygilant.startActionBtn();

    await Kyc1.update_Commentsection();

    await Kyc.NextButton();

    await Kyc.EyeIconbtnClick();

    await Kyc1.updateButton();

    await Kyc1.update_Commentsection();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();

})

test('CFI Login', async()=>{

    const login = new LoginPage(page);
    const accountUnlock_Paygilant = new AccountUnlock_PaygilantPage(page);
    const Kyc = new KYCPage(page);
    const Kyc1 = new KYC1_COPS_Page(page);
    const CFI= new CFIPages(page);

    await login.login(CIFGrop.username, CIFGrop.password);

    await CFI.selectWorkFlowBtn();

    await CFI.accountUnlock_SuspesiousOption();

    await CFI.PullOptionButon();

    await Kyc.EyeIconbtnClick();

    await CFI.unlockUserBtn();

    await CFI.UpdateStage_Commentsection();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();

 })


 test('Branch Flow - for last ',async()=>{
    const login = new LoginPage(page);
    const Dashboard = new DashBoardPage(page);
    const accountUnlock_Paygilant = new AccountUnlock_PaygilantPage(page);
    const Kyc = new KYCPage(page)

    await login.login(branchTeam.username, branchTeam.password);

    await Kyc.EyeIconbtnClick();

    await Kyc.MenuButton();

    await Kyc.LogOut();

 })


test.afterAll(async() =>{

    await page?.close();
    await context?.close();

  });
 
});
