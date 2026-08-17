import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { KYCPage } from '../../pages/CentralOpsPage/KYCPage';
import { approvalDelayPage } from '../../pages/KYC Verifcation App Pages/approvalDelayPage';
import { KycOfficerPage } from '../../pages/KYC Verifcation App Pages/KycOfficerPage';
import { Account_Close_Request_Page} from '../../pages/KYC Verifcation App Pages/Account_Close_Request_Page';
import {Additional_approval_RequestPages } from '../../pages/KYC Verifcation App Pages/Additional_approval_RequestPages';

const {Maker, kycOfficer,}=loginData.KYCVerification;

test.describe('Additional_approval_Request - ReSubmited',()=>{

    test.describe.configure({timeout: 15 * 60 * 1000});
    let context:BrowserContext;
    let page:Page;

    test.beforeAll(async({browser})=>{
        context=await browser.newContext({
            viewport:null,
            recordVideo: {dir: 'test-results/videos'},
        });

        page=await context.newPage();
        if(loginData.baseUrl){
            await page.goto(loginData.baseUrl);
        }

    });


  test('Additional approval Request Flow', async()=>{

    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const Kyc = new KYCPage(page);
    const approvalDelay = new approvalDelayPage(page);
    const Account_CloseReq= new Account_Close_Request_Page(page);
    const AdditionlApprove= new Additional_approval_RequestPages(page);

    await login.login(Maker.username, Maker.password);

    await DashBoard.clickAddNew();

    await approvalDelay.ticketPriorityMedium();

    await approvalDelay.customerOnboardDate();

    await approvalDelay.customerOnboardChannel();

    await approvalDelay.selfOnboarding();

    await approvalDelay.enteringCustomerDetails();

    await approvalDelay.serviceRequestType();

    await AdditionlApprove.additionalApprovalReq_Option();
    
    await approvalDelay.typeOfServiceRequestField();

    await approvalDelay.passportIDProof();

    await approvalDelay.customerPassportNumField();

    await approvalDelay.uploadPassport_FrontPageBtn();

    await approvalDelay.uploadPassport_BackpageBtn();

    await approvalDelay.uploadRequestForm_Btn();

    await Account_CloseReq.customerSegment();

    await approvalDelay.uploadSecondaryIDfrontPage_Btn();

    await approvalDelay.uploadSecondaryIDBackPage_Btn();

    await approvalDelay.uploadAdditionalDocument_Btn();

    await approvalDelay.UploadNRCRecmendationLetter();

    await approvalDelay.UploadSelfPhoto();

    await approvalDelay.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();

  });

  test('KYC officer Login - Mark for correction', async()=>{

    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const kycOfficerPage = new KycOfficerPage(page);

    await login.login(kycOfficer.username, kycOfficer.password);

    await kycOfficerPage.PullOptionButon();

    await kycOfficerPage.eyeIconBtn();

    await kycOfficerPage.markForCorrectionbtn();

    await kycOfficerPage.UpdateSatgeCMNTbox();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();

  });

  test('Branch Login - Corected', async()=>{

    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const AdditionlApprove= new Additional_approval_RequestPages(page);

    await login.login(Maker.username, Maker.password);

    await Kyc.EyeIconbtnClick();

    await AdditionlApprove.reSubmit();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();
    
  });

  test('KYC Officer Login - Resolved - ReSubmited', async()=>{

    const login = new LoginPage(page);
    const Kyc = new KYCPage(page);
    const kycOfficerPage = new KycOfficerPage(page);
    const KycOfficer1 = new KycOfficerPage(page);

    await login.login(kycOfficer.username, kycOfficer.password);

    await kycOfficerPage.PullOptionButon();

    await kycOfficerPage.eyeIconBtn();

    await kycOfficerPage.resolvedbtn();

    await KycOfficer1.ApprovalStatusDropdown();

    await KycOfficer1.reSubmitButton();

    await KycOfficer1.RemarkCMNTbox();

    await kycOfficerPage.UpdateSatgeCMNTbox();

    await Kyc.NextButton();

    await Kyc.MenuButton();

    await Kyc.LogOut();

  });

  test.afterAll(async()=>{

   await context?.close();
   await page?.close();
  });



});