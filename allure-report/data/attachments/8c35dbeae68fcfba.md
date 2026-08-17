# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CentralOps\Im_Banking_CIF.spec.ts >> Im_Banking_CIF >> im_Banking_CIFFlowTest
- Location: tests\CentralOps\Im_Banking_CIF.spec.ts:38:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//flt-semantics/span[.=\'Email ID *\']/following::flt-semantics[1]/input[@data-semantics-role=\'text-field\']')

```

# Test source

```ts
  1   | /**
  2   |  * Source (Java): org.CentralOpsPages.Im_Banking_CIFPage
  3   |  * Migrated to: Playwright + TypeScript (Page Object)
  4   |  *
  5   |  * - Robot file-picker sequences -> base.uploadFile() with EXACT input xpath.
  6   |  * - typeOfCIFReCheckBoxes findElements loop -> locator.nth(i), same count (5).
  7   |  * - Menu retry loop kept at 5. js click/scrollIntoView/focus/dispatchEvent -> forceClick/evaluate.
  8   |  * - Actions moveToElement().click().sendKeys() -> hover()+click()+pressSequentially().
  9   |  * - xpath copied EXACTLY.
  10  |  */
  11  | import { Page } from '@playwright/test';
  12  | import { BasePage } from '../../fixtures/BasePage';
  13  | 
  14  | export class Im_Banking_CIFPage extends BasePage {
  15  |   constructor(page: Page) {
  16  |     super(page);
  17  |   }
  18  | 
  19  |   async im_Banking_CIfOPtion(): Promise<void> {
  20  |     const categoryDD = this.page.locator("xpath=(//span[.='Please select']/parent::flt-semantics)[1]");
  21  |     await categoryDD.click();
  22  |     await this.page.waitForTimeout(1000);
  23  | 
  24  |     const Im_Banking_CIFPage = this.page.locator("xpath=//flt-semantics/span[.='i/m Banking (CIF)']");
  25  |     await Im_Banking_CIFPage.waitFor({ state: 'attached' });
  26  |     await this.page.waitForTimeout(500);
  27  |     await this.forceClick(Im_Banking_CIFPage);
  28  |   }
  29  | 
  30  |   async enterCustomerDetails(): Promise<void> {
  31  |     // CUS ID
  32  |     const CusId = this.page.locator(
  33  |       "xpath=//flt-semantics/span[.='Customer ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  34  |     ).first();
  35  |     await CusId.waitFor({ state: 'attached' });
  36  |     await this.page.waitForTimeout(800);
  37  |     await this.forceClick(CusId);
  38  |     // await CusId.click();
  39  |     await this.page.waitForTimeout(200);
  40  |     await CusId.pressSequentially('123456711');
  41  | 
  42  |     // CUS Name
  43  |     const CusName = this.page.locator(
  44  |       "xpath=//flt-semantics/span[.='Customer Name *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  45  |     );
  46  |     await CusName.waitFor({ state: 'attached' });
  47  |     await this.page.waitForTimeout(800);
  48  |     await this.page.waitForTimeout(200);
  49  |     await CusName.hover();
  50  |     await CusName.click();
  51  |     await CusName.pressSequentially('Test');
  52  | 
  53  |     // Premium radio
  54  |     const PremiumRadioBtn = this.page.locator(
  55  |       "xpath=//flt-semantics/span[.='Premium']/preceding::flt-semantics[1][@role='radio']"
  56  |     );
  57  |     await PremiumRadioBtn.waitFor({ state: 'attached' });
  58  |     await this.page.waitForTimeout(800);
  59  |     await PremiumRadioBtn.click();
  60  | 
  61  |     // Email
  62  |     const Email_Field = this.page.locator(
  63  |       "xpath=//flt-semantics/span[.='Email ID *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  64  |     );
> 65  |     await Email_Field.waitFor({ state: 'attached' });
      |                       ^ TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
  66  |     await this.page.waitForTimeout(800);
  67  |     await Email_Field.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
  68  |     await Email_Field.click();
  69  |     await this.page.waitForTimeout(100);
  70  |     await Email_Field.pressSequentially('Test@gmail.com');
  71  | 
  72  |     // Contact number
  73  |     const Contact_Field = this.page.locator(
  74  |       "xpath=//flt-semantics/span[.='Contact Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
  75  |     );
  76  |     await Contact_Field.waitFor({ state: 'attached' });
  77  |    // await this.page.waitForTimeout(500);
  78  |     await Contact_Field.click();
  79  |     await Contact_Field.pressSequentially('678976777');
  80  |   }
  81  | 
  82  |   async nrcIDproof(): Promise<void> {
  83  |     const NRCIDproofRdioBtn = this.page.locator(
  84  |       "xpath=//flt-semantics/span[.='NRC / မှတ်ပုံတင်']/preceding::flt-semantics[1][@role='radio']"
  85  |     );
  86  |     await NRCIDproofRdioBtn.waitFor({ state: 'attached' });
  87  |     await this.page.waitForTimeout(200);
  88  |     await NRCIDproofRdioBtn.click();
  89  |   }
  90  | 
  91  |   async nrcNumberFields(): Promise<void> {
  92  |     const districtBtn = this.page.locator(
  93  |       "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[@aria-label='Districts']"
  94  |     );
  95  |     await districtBtn.waitFor({ state: 'attached' });
  96  |     await this.page.waitForTimeout(200);
  97  |     await this.forceClick(districtBtn);
  98  | 
  99  |     const fifthoption = this.page.locator("xpath=//flt-semantics/span[.='5']");
  100 |     await this.page.waitForTimeout(10);
  101 |     await fifthoption.click();
  102 | 
  103 |     const TownSHipBtn = this.page.locator(
  104 |       "xpath=//flt-semantics/span[.='NRC Number *']/following::flt-semantics[@aria-label='Townships']"
  105 |     );
  106 |     await TownSHipBtn.waitFor({ state: 'attached' });
  107 |     await this.forceClick(TownSHipBtn);
  108 | 
  109 |     const secondoption = this.page.locator("xpath=//flt-semantics/span[.='BAMANA']");
  110 |     await this.page.waitForTimeout(10);
  111 |     await secondoption.click();
  112 | 
  113 |     const Btn = this.page.locator(
  114 |       "xpath=(//flt-semantics/span[.='NRC Number *']/following::flt-semantics[10])[last()]"
  115 |     );
  116 |     await Btn.waitFor({ state: 'attached' });
  117 |     await this.page.waitForTimeout(200);
  118 |     await this.forceClick(Btn);
  119 | 
  120 |     const P_option = this.page.locator("xpath=//flt-semantics/span[.='P']");
  121 |     await this.page.waitForTimeout(10);
  122 |     await P_option.click();
  123 | 
  124 |     const NumberTxtFieldBtn = this.page.locator("xpath=//flt-semantics/input[@aria-label='Number']");
  125 |     await NumberTxtFieldBtn.waitFor({ state: 'attached' });
  126 |     await this.page.waitForTimeout(300);
  127 |     await this.forceClick(NumberTxtFieldBtn);
  128 |     await this.page.waitForTimeout(200);
  129 |     await NumberTxtFieldBtn.pressSequentially('33457');
  130 |   }
  131 | 
  132 |   async uploadNrcFront_PageBtn(): Promise<void> {
  133 |     await this.uploadFile(
  134 |       "xpath=//flt-semantics/span[.='Upload NRC Front Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  135 |     );
  136 |   }
  137 | 
  138 |   async uploadNRC_Back_PageBtn(): Promise<void> {
  139 |     await this.uploadFile(
  140 |       "xpath=//flt-semantics/span[.='Upload NRC Back Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  141 |     );
  142 |   }
  143 | 
  144 |   async uploadReqForm_PageBtn(): Promise<void> {
  145 |     await this.uploadFile(
  146 |       "xpath=//flt-semantics/span[.='Upload Request Form *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  147 |     );
  148 |   }
  149 | 
  150 |   async mobileVerifed_YesRadioBtn(): Promise<void> {
  151 |     const el = this.page.locator(
  152 |       "xpath=//flt-semantics/span[.='Mobile Verified? *']//following::flt-semantics[1][@role='radio']"
  153 |     );
  154 |     await el.waitFor({ state: 'attached' });
  155 |     await this.page.waitForTimeout(400);
  156 |     await el.click();
  157 |   }
  158 | 
  159 |   async signatureVerifed_YesRadioBtn(): Promise<void> {
  160 |     const el = this.page.locator(
  161 |       "xpath=//flt-semantics/span[.='Signature Verified? *']//following::flt-semantics[1][@role='radio']"
  162 |     );
  163 |     await el.waitFor({ state: 'attached' });
  164 |     await this.page.waitForTimeout(400);
  165 |     await el.click();
```