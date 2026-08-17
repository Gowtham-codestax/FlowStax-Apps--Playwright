
import { test, Page, BrowserContext } from '@playwright/test';
import loginData from '../../test-data/loginData.json';

import { LoginPage } from '../../pages/CentralOpsPage/LoginPage';
import { DashBoardPage } from '../../pages/CentralOpsPage/DashBoardPage';
import { accountClosePage } from '../../pages/KBZPayServiceOpsPage/accountClosePage';
import { Phone_Change_ReqAndDevice_Change_ReqPage } from '../../pages/KBZPayServiceOpsPage/Phone_Change_ReqAndDevice_Change_ReqPage';
import { MABR_KYC_ChangePage } from '../../pages/KBZPayServiceOpsPage/MABR_KYC_ChangePage';
import { closingLoopPage } from '../../pages/KBZPayServiceOpsPage/closingLoopPage';
import { tsoLoginPage } from '../../pages/KBZPayServiceOpsPage/tsoLoginPage';
import { Phone_ChangeRequestPage } from '@pages/KBZPayServiceOpsPage/Phone_ChangeRequestPage';

const { branchTeam, tso: tsoAcc, closeLoop } = loginData.KBZPay;

test.describe.serial('Phone_Change_ReqAndDevice_Change_Req', ()=>{
 
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

  test('Phone Chage Request Flow ',async()=>{ 
    const login = new LoginPage(page);
    const DashBoard = new DashBoardPage(page);
    const accClose = new accountClosePage(page);
    const Phone_DeviceChange = new Phone_Change_ReqAndDevice_Change_ReqPage(page);
    const PhoneChangeReq= new Phone_ChangeRequestPage(page);

    await login.login(branchTeam.username, branchTeam.password);

    await accClose.kbzPayServiceOPtion();

    await DashBoard.clickAddNew();

    await accClose.selectType();

    await PhoneChangeReq.Phone_Change_ReqOption();

    await Phone_DeviceChange.branchPhnnUmberField();

    await Phone_DeviceChange.cusName();

    await Phone_DeviceChange.nrcIDproof();

    await Phone_DeviceChange.nrcNumberFields();

    await Phone_DeviceChange.uploadNrcFront_PageBtn();

    await Phone_DeviceChange.uploadNRC_Back_PageBtn();

    await Phone_DeviceChange.DateOfBirth();

    await Phone_DeviceChange.uploadCustomerFacePhoto();
    
    await Phone_DeviceChange.reasonTxtFiled();
    
    await Phone_DeviceChange.infoOf3transaction_Btn();
    
    await PhoneChangeReq.phoneChangeReqUpload_Btn();
    
    await Phone_DeviceChange.oldPhnNumField();
    
    await PhoneChangeReq.newPhnNumField();

    await PhoneChangeReq.BalanceNumField();
    
    await Phone_DeviceChange.uploadDocUrl();
    
    await accClose.NextButton();
    
    await Phone_DeviceChange.EyeIconbtnClick();
    
    await PhoneChangeReq.EditIconClick();
    
    await Phone_DeviceChange.assignToTSOBtn();

    await Phone_DeviceChange.recommedUploadLeter_YesRadioBtn();

    await Phone_DeviceChange.signatureVerfied_YesRadioBtn();

    await Phone_DeviceChange.docChecked_YesRadioBtn();
    
    await accClose.UpdateStage_Commentsection();
    
    await accClose.NextButton();
    
    //await accClose.MenuButton();
   
    await accClose.LogOut();
  });

  
  test('tsoLoginFlow', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);
   
    await tso.selectKYCUpdate();
   
    await tso.Phone_Change_Request_Option();
   
    await tso.PullOptionButon();
   
    await tso.EyeIconbtnClick();
   
    await tso.makeForcorrectionbutton();
   
    await accClose.UpdateStage_Commentsection();
   
    await accClose.NextButton();
   
    await accClose.MenuButton();
   
    await accClose.LogOut();
  
  });

  
  test('branchLoginFlow', async () => {
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

  
  test('TsoLoginFlow2', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);
   
    await tso.EyeIconbtnClick();
   
    await tso.needMoreInfobutton();
   
    await tso.UpdateStage_Commentsection();
   
    await accClose.NextButton();
   
    await accClose.MenuButton();
   
    await accClose.LogOut();
  });

  
  test('closingLoopLogin', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);

    await login.login(closeLoop.username, closeLoop.password);
   
    await closingLoop.EyeIconbtnClick();
   
    await closingLoop.updatebutton();
   
    await closingLoop.additionalDoc_Upload_Btn();
   
    await closingLoop.UpdateStage_Commentsection();
   
    await accClose.NextButton();
   
    await accClose.MenuButton();
   
    await accClose.LogOut();
  
  });

 
  test('TsoLoginFlow3', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const tso = new tsoLoginPage(page);

    await login.login(tsoAcc.username, tsoAcc.password);

    await tso.EyeIconbtnClick();
   
    await tso.resolvebutton();
   
    await tso.UpdateStage_Commentsection();
   
    await accClose.NextButton();
   
    await accClose.MenuButton();
   
    await accClose.LogOut();
  
  });

 
  test('closingLoopLogin2', async () => {
    const login = new LoginPage(page);
    const accClose = new accountClosePage(page);
    const closingLoop = new closingLoopPage(page);
    const MABRKYC = new MABR_KYC_ChangePage(page);

    await login.login(closeLoop.username, closeLoop.password);
   
    await closingLoop.EyeIconbtnClick();
   
    await closingLoop.closebutton();
   
    await closingLoop.UpdateStage_Commentsection();
   
    await accClose.NextButton();
   
    await closingLoop.EyeIconbtnClick();
   
    await MABRKYC.downloadPDFButton();
   
    await accClose.MenuButton();
   
    await accClose.LogOut();
  
  });


   test.afterAll(async () => {
    await page?.close();
    await context?.close();
  });


});