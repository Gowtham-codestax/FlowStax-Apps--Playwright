import { test, Page} from '@playwright/test';
import loginData from '../../test-data/loginData.json';
import {LoginPage} from '../../pages/CentralOpsPage/LoginPage';
import {DashBoardPage} from '../../pages/CentralOpsPage/DashBoardPage';
import { AccountUnlock_PaygilantPage } from '@pages/CentralOpsPage/AccountUnlock_PaygilantPage';


const { branchTeam, FMU, CIFGrop } = loginData.CentralOps;

test.describe.serial('AccountUnlock - Suspicious Activity Detected Case', () => {
    test.describe.configure({timeout: 15 * 60 * 1000}); // long serial flows

// Single shared page across all dependent tests (BaseClass equivalent).
let page: Page;

test.beforeAll(async ({browser})=>{
   page=await  browser.newPage();
    if(loginData.baseUrl){
        await page.goto(loginData.baseUrl);
    }
});


test('AccountUnlock - Suspicious Activity Detected Case', async()=> {
    const login = new LoginPage(page);
    const Dashboard = new DashBoardPage(page);
    const accountUnlock_Paygilant = new AccountUnlock_PaygilantPage(page);

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

})








test.afterAll(async() =>{

    await page?.close();
 
  });
 
});
