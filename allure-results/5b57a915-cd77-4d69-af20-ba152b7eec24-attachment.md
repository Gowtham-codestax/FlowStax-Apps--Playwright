# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: KycVerification\customerUrgentRequest_Resolved_accountClose.spec.ts >> CustomerUrgentRequestFlow - Resolved Status( Account Closed ) >> KycOfficerFlow - resolved = Status (account Closed)
- Location: tests\KycVerification\customerUrgentRequest_Resolved_accountClose.spec.ts:109:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('//flt-semantics[contains(text(),\'Resolved\')]') to be visible

```

# Test source

```ts
  1   | import { Page } from '@playwright/test';
  2   | import { BasePage } from '../../fixtures/BasePage';
  3   | 
  4   | export class KycOfficerPage extends BasePage {
  5   | 
  6   |   constructor(page: Page) {
  7   |     super(page);
  8   |   }
  9   | 
  10  |   async PullOptionButon(): Promise<void> {
  11  |     for (let i = 0; i < 5; i++) {
  12  |       try {
  13  |         const Pull = this.page.locator(
  14  |           "xpath=//flt-semantics[@style[contains(.,'width: 36px') and contains(.,'height: 34px')]]"
  15  |         );
  16  |         await Pull.waitFor({ state: 'attached' });
  17  |         await Pull.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
  18  |         await this.forceClick(Pull);
  19  |        // console.log(i + 1);
  20  |         await this.page.waitForTimeout(1000);
  21  |       } catch (e) {
  22  |         console.log(e);
  23  |       }
  24  |     }
  25  |   }
  26  | 
  27  |   async eyeIconBtn(): Promise<void> {
  28  |     await this.page.waitForTimeout(7000);
  29  |     for (let i = 0; i < 33; i++) {
  30  |       await this.page.keyboard.press('Tab');
  31  |       await this.page.waitForTimeout(200);
  32  |     }
  33  |     const eyeiconbtn = this.page.locator(
  34  |       "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
  35  |     );
  36  |     await eyeiconbtn.waitFor({ state: 'visible' });
  37  |     await eyeiconbtn.click();
  38  |   }
  39  | 
  40  |   async resolvedbtn(): Promise<void> {
  41  |     const Resolvedcbtn = this.page.locator("xpath=//flt-semantics[contains(text(),'Resolved')]");
> 42  |     await Resolvedcbtn.waitFor({ state: 'visible' });
      |                        ^ TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
  43  |     await this.page.waitForTimeout(1000);
  44  |     await Resolvedcbtn.click();
  45  |     await this.page.waitForTimeout(1000);
  46  |   }
  47  | 
  48  |   async markForCorrectionbtn(): Promise<void> {
  49  |     const Markcoreectionbtn = this.page.locator(
  50  |       "xpath=//flt-semantics[contains(text(),'Mark for Correction')]"
  51  |     );
  52  |     await Markcoreectionbtn.waitFor({ state: 'visible' });
  53  |     await this.page.waitForTimeout(1000);
  54  |     await Markcoreectionbtn.click();
  55  |     await this.page.waitForTimeout(1000);
  56  |   }
  57  | 
  58  |   async Denybtn(): Promise<void> {
  59  |     const denybtn = this.page.locator("xpath=//flt-semantics[contains(text(),'Denied')]");
  60  |     await denybtn.waitFor({ state: 'visible' });
  61  |     await this.page.waitForTimeout(1000);
  62  |     await denybtn.click();
  63  |     await this.page.waitForTimeout(1000);
  64  |   }
  65  | 
  66  |   async ApprovalStatusDropdown(): Promise<void> {
  67  |     const approvaloption = this.page.locator(
  68  |       "xpath=//flt-semantics/span[.='Approval Status *']/following::flt-semantics/span[.='Please select']"
  69  |     );
  70  |     await approvaloption.waitFor({ state: 'visible' });
  71  |     await approvaloption.click();
  72  |   }
  73  | 
  74  |   async ApprovedButton(): Promise<void> {
  75  |     const approvedButton = this.page.locator(
  76  |       "xpath=//flt-semantics/span[.='Approval Status *']/following::flt-semantics/span[.='Approved']"
  77  |     );
  78  |     await approvedButton.waitFor({ state: 'visible' });
  79  |     await approvedButton.click();
  80  |   }
  81  | 
  82  |   async rejectedButton(): Promise<void> {
  83  |     const rejectedButton = this.page.locator(
  84  |       "xpath=//flt-semantics/span[.='Approval Status *']/following::flt-semantics/span[.='Rejected']"
  85  |     );
  86  |     await rejectedButton.waitFor({ state: 'visible' });
  87  |     await rejectedButton.click();
  88  |   }
  89  | 
  90  |    async reSubmitButton(): Promise<void> {
  91  |     const loc = this.page.locator(
  92  |       "xpath=//flt-semantics/span[.='Approval Status *']/following::flt-semantics/span[.='Resubmitted']"
  93  |     );
  94  |     await loc.waitFor({ state: 'visible' });
  95  |     await this.page.waitForTimeout(1500);
  96  |     await loc.click();
  97  |   }
  98  | 
  99  |   async accountClosedButton(): Promise<void> {
  100 |     const loc = this.page.locator(
  101 |       "xpath=//flt-semantics/span[.='Approval Status *']/following::flt-semantics/span[.='Account Closed (Unverify)']"
  102 |     );
  103 |     await loc.waitFor({ state: 'visible' });
  104 |     await loc.click();
  105 |   }
  106 | 
  107 |   async kycUpdatedButton(): Promise<void> {
  108 |     const loc = this.page.locator(
  109 |       "xpath=//flt-semantics/span[.='Approval Status *']/following::flt-semantics/span[.='KYC Updated']"
  110 |     );
  111 |     await loc.waitFor({ state: 'visible' });
  112 |     await loc.click();
  113 |   }
  114 | 
  115 | 
  116 |   async RemarkCMNTbox(): Promise<void> {
  117 |     const remarkTextField = this.page.locator(
  118 |       "xpath=//flt-semantics/span[.='Remark']/following::flt-semantics/input[@data-semantics-role='text-field']"
  119 |     );
  120 |     await remarkTextField.waitFor({ state: 'visible' });
  121 |     await this.page.waitForTimeout(1000);
  122 |     await remarkTextField.click();
  123 |     await remarkTextField.pressSequentially('Done');
  124 |   }
  125 | 
  126 |   async UpdateSatgeCMNTbox(): Promise<void> {
  127 |     const UpdateSatgeCMNtTextField = this.page.locator(
  128 |       "xpath=//flt-semantics/span/following::flt-semantics/textarea[@data-semantics-role='text-field']"
  129 |     );
  130 |     await UpdateSatgeCMNtTextField.waitFor({ state: 'visible' });
  131 |     await this.page.waitForTimeout(1000);
  132 |     await UpdateSatgeCMNtTextField.click();
  133 |     await UpdateSatgeCMNtTextField.pressSequentially('Done');
  134 |   }
  135 | 
  136 |   async downloadPDFButton(): Promise<void> {
  137 |     const downloadPdfbtn = this.page.locator("xpath=(//flt-semantics[@role='button'])[last()]");
  138 |     await downloadPdfbtn.waitFor({ state: 'attached' });
  139 |     await this.page.waitForTimeout(1000);
  140 |     await this.page.waitForTimeout(2000);
  141 |     await this.forceClick(downloadPdfbtn);
  142 |   }
```