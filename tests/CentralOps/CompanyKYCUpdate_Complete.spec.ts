import { test, Page, BrowserContext} from '@playwright/test';
import loginData from '../../test-data/loginData.json';
import {LoginPage} from '../../pages/CentralOpsPage/LoginPage';
import {DashBoardPage} from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';

import { CompanyKYCUpdatePage } from '@pages/CentralOpsPage/CompanyKYCUpdatePage';
import { KYC1_COPS_Page } from '@pages/KYCServiceOPsPage/KYC1_COPS_Page';
import { KYC2_COPS_Page } from '@pages/CentralOpsPage/KYC2_COPS_Page';


const {branchTeam , FMU , CIFGrop, kyc1Cops, kyc2Cops, saoCops, adminCops}= loginData.CentralOps;

test.describe.serial('Company KYC Update -  Flow', () => {
    test.describe.configure({timeout: 15 *60 * 1000}); // long serial flows

    let context: BrowserContext;
    let page: Page;

 test.beforeAll( async ({browser}) => {
        context = await browser.newContext({
            viewport: null,
            recordVideo:{dir : 'videos'},
        })

        page= await context.newPage();
        if(loginData.baseUrl){
            await page.goto(loginData.baseUrl
            );
        }
    });
    

    // 1
    test('Company KYC Update - Branch ', async()=>{

        const login= new LoginPage(page);
        const Dashboard = new DashBoardPage(page);
        const Kyc = new KYCPage(page)
        const companyKYCUpdate = new CompanyKYCUpdatePage(page);

        await login.login(branchTeam.username, branchTeam.password);
        
        await Dashboard.clickAddNew();

        await Kyc.categoryDD();

        await companyKYCUpdate.companyKYCUpdateOption();

        await companyKYCUpdate.customerDetails();

        await companyKYCUpdate.Foreign_CompanyRadio();

        await companyKYCUpdate.companyTypeRadio();

        await companyKYCUpdate.TypesOfCompanyKYCReqCheckboxes();

        await companyKYCUpdate.attachCoverLetter();

        await companyKYCUpdate.attachMeetingMinutues();

        await companyKYCUpdate.companyLicenceUpload();

        await companyKYCUpdate.companyOpeningFormUplaod();

        await companyKYCUpdate.oranizationChartUplaod(); 

        await companyKYCUpdate.MOU_Uplaod();

        await companyKYCUpdate.companyKYCUpdateUpload();

        await companyKYCUpdate.NRCCopy_Upload();

        await Kyc.RemarkTextField();

        await Kyc.NextButton();

        await Kyc.EyeIconbtnClick();

        await companyKYCUpdate.EditIconbtnClick();

        await Kyc.NextButton();

        await Kyc.MenuButton();

        await Kyc.LogOut();

    });

    //2
    test('KYC Group Login - Mark for Correction',async()=>{

        const login= new LoginPage(page);
        const Kyc = new KYCPage(page)
        const Kyc1 = new KYC1_COPS_Page(page);
        const kyc2 = new KYC2_COPS_Page(page);
        
        await login.login(kyc1Cops.username, kyc1Cops.password);

        await Kyc1.selectKYCUpdate();

        await Kyc1.MakerRadioButton();

        await Kyc1.companyKycUpdateOption();
        
        await Kyc1.PullButton();

        await Kyc1.PullOptionButon();

        await Kyc1.eyeIconBtn();

        await Kyc1.startActionButton();
    
        await Kyc1.update_Commentsection();
    
        await Kyc.NextButton();

        await Kyc1.eyeIconBtn();

        await kyc2.markForCorrection();

        await Kyc1.update_Commentsection();

        await Kyc.NextButton();

        await Kyc.MenuButton();

        await Kyc.LogOut();

    });

    //3
    test('Branch Flow - Application corrected', async()=>{
    
        const login = new LoginPage(page);
        const Kyc = new KYCPage(page)
        const Kyc1 = new KYC1_COPS_Page(page);
        const companyKYCUpdate = new CompanyKYCUpdatePage(page);

        await login.login(branchTeam.username, branchTeam.password);
    
        await Kyc.EyeIconbtnClick();
    
        await companyKYCUpdate.applicationCorrectedButton();
    
        await Kyc1.update_Commentsection();
    
        await Kyc.NextButton();
    
        await Kyc.MenuButton();
    
        await Kyc.LogOut();
    
    })

    //4
    test('kyc branch flow -- Update ', async()=>{

        const login= new LoginPage(page);
        const Kyc = new KYCPage(page)
        const Kyc1 = new KYC1_COPS_Page(page);

        await login.login(kyc1Cops.username, kyc1Cops.password);

        await Kyc1.selectKYCUpdate();

        await Kyc1.MakerRadioButton();

        await Kyc1.companyKycUpdateOption();
        
        await Kyc1.PullButton();

        await Kyc1.PullOptionButon();

        await Kyc1.eyeIconBtn();

        await Kyc1.updateButton();

        await Kyc1.update_Commentsection();

        await Kyc.NextButton();

        await Kyc.MenuButton();

        await Kyc.LogOut();

    });

    //5
    test(' Kyc2 Flow - Rework ',async()=>{

        const login= new LoginPage(page);
        const Kyc = new KYCPage(page)
        const Kyc1 = new KYC1_COPS_Page(page);
        const kyc2 = new KYC2_COPS_Page(page);

        await login.login(kyc2Cops.username, kyc2Cops.password);

        await Kyc1.selectKYCUpdate();

        await Kyc1.checkerRadioButton();

        await Kyc1.companyKycUpdateOption();

        await Kyc1.PullButton();

        await Kyc1.PullOptionButon();
        
        await Kyc.EyeIconbtnClick();

        await kyc2.reworkButton();

        await Kyc1.update_Commentsection();
 
        await Kyc.NextButton();

        await Kyc.MenuButton();

        await Kyc.LogOut();

    })

    //6
    test(' KYC1 Login Flow - Rework submitted',async()=>{

        const login= new LoginPage(page);
        const Kyc = new KYCPage(page)
        const Kyc1 = new KYC1_COPS_Page(page);

        await login.login(kyc1Cops.username, kyc1Cops.password);

        await Kyc.EyeIconbtnClick();

        await Kyc1.reWorkCompletedButton();

        await Kyc1.update_Commentsection();

        await Kyc.NextButton();

        await Kyc.MenuButton();

        await Kyc.LogOut();
    })

    //7
    test('Kyc 2 Login Flow - Complete ', async()=>{

        const login= new LoginPage(page);
        const Kyc = new KYCPage(page)
        const Kyc1 = new KYC1_COPS_Page(page);
        const kyc2 = new KYC2_COPS_Page(page);

        await login.login(kyc2Cops.username, kyc2Cops.password);

        await Kyc.EyeIconbtnClick();
    
        await kyc2.completeButton();

        await Kyc1.update_Commentsection();

        await Kyc.NextButton();

        await Kyc.MenuButton();

        await Kyc.LogOut();

    })

    //8
    test('Branch Flow - To check the status of the [Complete Kyc Update]', async()=>{

        const login= new LoginPage(page);
        const Kyc = new KYCPage(page)

        await login.login(branchTeam.username, branchTeam.password);

        await Kyc.EyeIconbtnClick();

        await Kyc.historyBtn();

        await Kyc.MenuButton();

        await Kyc.LogOut();

    });

 
 test.afterAll(async()=>{

    page?.close();
    context?.close();
   });

});