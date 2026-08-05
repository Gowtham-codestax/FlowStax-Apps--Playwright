# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CentralOps\KYC_EscalateFlow.spec.ts >> KYC_EscalateFlow >> kyc_EscalateTest
- Location: tests\CentralOps\KYC_EscalateFlow.spec.ts:40:8

# Error details

```
Error: locator.pressSequentially: Target page, context or browser has been closed
Call log:
  - waiting for locator('//flt-semantics/span[.=\'Email ID\']/following::flt-semantics[1]/input[@data-semantics-role=\'text-field\']').first()
    - locator resolved to <input autocorrect="on" spellcheck="false" autocomplete="off" data-semantics-role="text-field"/>
  - elementHandle.type("Test@gmail.com")

```

# Test source

```ts
  1   | /**
  2   |  * Source (Java): org.CentralOpsPages.KYCPage
  3   |  * Migrated to: Playwright + TypeScript (Page Object)
  4   |  *
  5   |  * Structural notes:
  6   |  *  - Robot native file-picker sequences (uploadPassport_FrontPageBtn / _BackpageBtn /
  7   |  *    uploadRequestForm_Btn) -> base.uploadFile() with the EXACT input xpath (rule 3).
  8   |  *  - EyeIconbtnClick TAB focus navigation kept: keyboard.press('Tab') x46, same sleeps.
  9   |  *  - Actions moveToElement().click().sendKeys() -> hover()+click()+pressSequentially().
  10  |  *  - js click -> forceClick(); js scrollIntoView -> locator.evaluate(same JS);
  11  |  *    dispatchEvent(MouseEvent) -> locator.evaluate(same JS).
  12  |  *  - Menu/Logout retry loops kept at the SAME attempt count (5). xpath copied EXACTLY.
  13  |  */
  14  | import { Page } from '@playwright/test';
  15  | import { BasePage } from '../../fixtures/BasePage';
  16  | 
  17  | export class KYCPage extends BasePage {
  18  |   constructor(page: Page) {
  19  |     super(page);
  20  |   }
  21  | 
  22  |   async selectKYCupdate(): Promise<void> {
  23  |     const categoryDD = this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
  24  |     await categoryDD.click();
  25  |     await this.page.waitForTimeout(1000);
  26  | 
  27  |     const KYC_updateoption = this.page.locator("xpath=//flt-semantics[.='KYC Update']");
  28  |     await KYC_updateoption.waitFor({ state: 'visible' });
  29  |     await KYC_updateoption.click();
  30  |   }
  31  | 
  32  |   async enterCustomerDetails(): Promise<void> {
  33  |     // CUS ID
  34  |     const CusId = this.page.locator(
  35  |       "xpath=//flt-semantics/span[.='Customer ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  36  |     ).first();
  37  |     await CusId.waitFor({ state: 'attached' });
  38  |     await this.page.waitForTimeout(500);
  39  |     await this.forceClick(CusId);
  40  |     // await CusId.click();
  41  |     await this.page.waitForTimeout(300);
  42  |     await CusId.pressSequentially('123456711');
  43  | 
  44  |     // CUS Name
  45  |     const CusName = this.page.locator(
  46  |       "xpath=//flt-semantics/span[.='Customer Name *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  47  |     ).first();
  48  |     await CusName.waitFor({ state: 'attached' });
  49  |     await this.page.waitForTimeout(800);
  50  |     await this.page.waitForTimeout(200);
  51  |     await CusName.hover();
  52  |     await CusName.click();
  53  |     await CusName.pressSequentially('Test');
  54  | 
  55  |     // Premium Radio button
  56  |     const PremiumRadioBtn = this.page.locator(
  57  |       "xpath=//flt-semantics/span[.='Premium']/preceding::flt-semantics[1][@role='radio']"
  58  |     );
  59  |     await PremiumRadioBtn.waitFor({ state: 'attached' });
  60  |     await this.page.waitForTimeout(500);
  61  |     await PremiumRadioBtn.click();
  62  | 
  63  |     // Customer Email
  64  |     const Email_Field = this.page.locator(
  65  |       "xpath=//flt-semantics/span[.='Email ID']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  66  |     ).first();
  67  |     await Email_Field.waitFor({ state: 'visible' });
  68  |     await this.page.waitForTimeout(500);
  69  |     await Email_Field.click();
  70  |     await this.page.waitForTimeout(200);
> 71  |     await Email_Field.pressSequentially('Test@gmail.com');
      |                       ^ Error: locator.pressSequentially: Target page, context or browser has been closed
  72  | 
  73  |     // Customer Phone Number
  74  |     const Contact_Field = this.page.locator(
  75  |       "xpath=//flt-semantics/span[.='Contact Number']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
  76  |     ).first();
  77  |     await Contact_Field.waitFor({ state: 'attached' });
  78  |     await this.page.waitForTimeout(500);
  79  |     await Contact_Field.click();
  80  |     await Contact_Field.pressSequentially('678976777');
  81  | 
  82  |     // Customer Passport Type
  83  |     const Passport_TDType = this.page.locator(
  84  |       "xpath=//flt-semantics/span[.='Passport / နိုင်ငံကူးလက်မှတ်']/preceding::flt-semantics[1][@role='radio']"
  85  |     );
  86  |     await Passport_TDType.waitFor({ state: 'visible' });
  87  |     await Passport_TDType.click();
  88  |   }
  89  | 
  90  |   async uploadPassport_FrontPageBtn(): Promise<void> {
  91  |     await this.uploadFile(
  92  |       "xpath=//flt-semantics/span[.='Upload Passport Front Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  93  |     );
  94  |   }
  95  | 
  96  |   async uploadPassport_BackpageBtn(): Promise<void> {
  97  |     await this.uploadFile(
  98  |       "xpath=//flt-semantics/span[.='Upload Passport Back Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  99  |     );
  100 |   }
  101 | 
  102 |   async passPortNumField(): Promise<void> {
  103 |     const PassportNumField = this.page.locator(
  104 |       "xpath=//flt-semantics/span[.='Passport Number *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  105 |     ).first();
  106 |     await PassportNumField.waitFor({ state: 'attached' });
  107 |     await this.page.waitForTimeout(500);
  108 |     await PassportNumField.click();
  109 |     await this.page.waitForTimeout(300);
  110 |     await PassportNumField.pressSequentially('3478279921');
  111 |   }
  112 | 
  113 |   async uploadRequestForm_Btn(): Promise<void> {
  114 |     await this.uploadFile(
  115 |       "xpath=//flt-semantics/span[.='Upload Request Form *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  116 |     );
  117 |   }
  118 | 
  119 |   async Regular_KYC_RequestBtn(): Promise<void> {
  120 |     const RegularKYCRadioBtn = this.page.locator(
  121 |       "xpath=//flt-semantics/span[.='Regular Request']/preceding::flt-semantics[1][@role='radio']"
  122 |     ).first();
  123 |     await RegularKYCRadioBtn.waitFor({ state: 'attached' });
  124 |     await this.page.waitForTimeout(400);
  125 |     await RegularKYCRadioBtn.click();
  126 |   }
  127 | 
  128 |   async idClose_IdOpenRadioBtn(): Promise<void> {
  129 |     const RegularKYCRadioBtn = this.page.locator(
  130 |       "xpath=//flt-semantics/span[.='999 ID Closed / 999 ID Reopen']/preceding::flt-semantics[1][@role='radio']"
  131 |     ).first();
  132 |     await RegularKYCRadioBtn.waitFor({ state: 'attached' });
  133 |     await this.page.waitForTimeout(400);
  134 |     await RegularKYCRadioBtn.click();
  135 |   }
  136 | 
  137 |   async dormant_ACReleasenRadioBtn(): Promise<void> {
  138 |     const Dormant_ACReleasen_RadioBtn = this.page.locator(
  139 |       "xpath=//flt-semantics/span[.='999 dormant A/C release']/preceding::flt-semantics[1][@role='radio']"
  140 |     );
  141 |     await Dormant_ACReleasen_RadioBtn.waitFor({ state: 'attached' });
  142 |     await this.page.waitForTimeout(400);
  143 |     await Dormant_ACReleasen_RadioBtn.click();
  144 |   }
  145 | 
  146 |   async typesOf_KYC_ChangeReq_Checkboxes(): Promise<void> {
  147 |     const PhnNumberChange_KYC_Checkbox = this.page.locator(
  148 |       "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Phone Number Change'][@role='checkbox']"
  149 |     );
  150 |     await PhnNumberChange_KYC_Checkbox.waitFor({ state: 'attached' });
  151 |     await this.page.waitForTimeout(200);
  152 |     await PhnNumberChange_KYC_Checkbox.click();
  153 | 
  154 |     const emailChange_Checkbox = this.page.locator(
  155 |       "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Email Change'][@role='checkbox']"
  156 |     );
  157 |     await emailChange_Checkbox.waitFor({ state: 'attached' });
  158 |     await this.page.waitForTimeout(200);
  159 |     await emailChange_Checkbox.click();
  160 |   }
  161 | 
  162 |   async RemarkTextField(): Promise<void> {
  163 |     const remarkField = this.page.locator(
  164 |       "xpath=//flt-semantics/span[.='Remark']/following::flt-semantics/input[@data-semantics-role='text-field']"
  165 |     );
  166 |     await remarkField.waitFor({ state: 'attached' });
  167 |     await this.page.waitForTimeout(400);
  168 |     await remarkField.pressSequentially('Test@123');
  169 |   }
  170 | 
  171 |   async NextButton(): Promise<void> {
```