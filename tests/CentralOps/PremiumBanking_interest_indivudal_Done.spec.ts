import {test, Page, BrowserContext} from '@playwright/test';
import loginData from '../../test-data/loginData.json';
import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { KYC1_COPS_Page } from '../../pages/CentralOpsPage/KYC1_COPS_Page';
import { AdminPage } from '@pages/CentralOpsPage/AdminPage';
import { PremiumBanking_interestPages } from '@pages/CentralOpsPage/PremiumBanking_interestPages';

const { branchTeam, kyc1Cops, kyc2Cops , PremiumBnaking} = loginData.CentralOps;

test.describe.serial(' Premium Banking Interest - Indivudal Record (Done Flow)',()=>{
   
    test.describe.configure({timeout: 15 * 60 * 1000});
    let context:BrowserContext;
    let page:Page;

    test.beforeAll(async({browser})=>{
        
        context=await browser.newContext({
            viewport: null,
            recordVideo: {dir: 'videos'},
        });
        page=await context.newPage();

        if(loginData.baseUrl){
            await page.goto(loginData.baseUrl);
        }
    });
    
    // 1
    test('Branch Login - Premium Banking',async()=>{
  
      const login = new LoginPage(page);
      const DashBoard = new DashBoardPage(page);
      const Kyc = new KYCPage(page);
      const Premium= new PremiumBanking_interestPages(page);

      await login.login(PremiumBnaking.username,PremiumBnaking.password);
      
      await DashBoard.clickAddNew();

      await Premium.induvidual_RadioBtn();

      await Premium.accoutNumberField();

      await Premium.rateCodeField();

      await Premium.currentInterstRate_Field();

      await Premium.newInterstRate_Field();

      await Premium.interestStart_Date();

      await Premium.maturity_Date();

      await Premium.tenorField();

      await Premium.next_maturity_Date();

      await Premium.ProductField();

      await Premium.initialDeposit_NumField();

      await Premium.CustomerIdField();

      await Premium.customerName();

      await Premium.segmentField();

      await Premium.rmField();

      await Premium.acTypeField();

      await Premium.ac_CategoryField();

      await Premium.remarkField();

      await Kyc.NextButton();

      await Kyc.MenuButton();

      await Kyc.LogOut();

    });

    //2
    test('KYC1 Login - Mark For Correction',async()=>{

     const login = new LoginPage(page);
     const Kyc = new KYCPage(page);
     const Kyc1 = new KYC1_COPS_Page(page);

     await login.login(kyc1Cops.username, kyc1Cops.password);
    
     await Kyc1.selectKYCUpdate();
    
     await Kyc1.MakerRadioButton();
    
     await Kyc1.premiumIntrestUpdtaeOPtion();
    
     await Kyc1.PullButton();
    
     await Kyc1.PullOptionButon();
    
     await Kyc1.eyeIconBtn();
    
     await Kyc1.startActionButton();
    
     await Kyc1.update_Commentsection();
    
     await Kyc.NextButton();
    
     await Kyc1.eyeIconBtn();
    
     await Kyc.markForCorrectionbtn();
    
     await Kyc1.update_Commentsection();
    
     await Kyc.NextButton();
    
     await Kyc.MenuButton();
    
     await Kyc.LogOut();

    });

   // 3
    test('branchTeam  - Application Corrected', async () => {
    
      const login = new LoginPage(page);
      const Kyc = new KYCPage(page);
   
      await login.login(PremiumBnaking.username, PremiumBnaking.password);

      await Kyc.EyeIconbtnClick();
    
      await Kyc.applicationCorrectedBtn();
  
      await Kyc.NextButton();
    
      await Kyc.MenuButton();
    
      await Kyc.LogOut();
  
    }); 

   // 4
   test('kyc1Cops Login - For Update', async () => {

     const login = new LoginPage(page);
     const Kyc = new KYCPage(page);
     const Kyc1 = new KYC1_COPS_Page(page);

     await login.login(kyc1Cops.username, kyc1Cops.password);
    
     await Kyc1.selectKYCUpdate();
    
     await Kyc1.MakerRadioButton();
    
     await Kyc1.premiumIntrestUpdtaeOPtion();
    
     await Kyc1.PullButton();
    
     await Kyc1.PullOptionButon();
      
     await Kyc1.eyeIconBtn();
    
     await Kyc1.updateButton();
    
     await Kyc1.update_Commentsection();
    
     await Kyc.NextButton();
  
     await Kyc.MenuButton();  
  
     await Kyc.LogOut();
  
    });
     
    // 5
    test('Kyc2Flow Login - For Done Button', async () => {

     const login = new LoginPage(page);
     const Kyc = new KYCPage(page);
     const Kyc1 = new KYC1_COPS_Page(page);

     await login.login(kyc2Cops.username, kyc2Cops.password);
    
     await Kyc1.selectKYCUpdate();
    
     await Kyc1.checkerRadioButton();
    
     await Kyc1.premiumIntrestUpdtaeOPtion();
    
     await Kyc1.PullButton();
    
     await Kyc1.PullOptionButon();
    
     await Kyc1.eyeIconBtn();
    
     await Kyc1.doneButton();
    
     await Kyc1.update_Commentsection();
    
     await Kyc.NextButton();
    
     await Kyc.MenuButton();
        
     await Kyc.LogOut();

    });

    test.afterAll(async()=>{

        await page?.close();
        await context?.close();
         
    })
})