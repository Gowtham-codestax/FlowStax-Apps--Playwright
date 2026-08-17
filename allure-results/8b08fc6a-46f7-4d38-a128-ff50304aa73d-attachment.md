# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: KycVerification\customerUrgentRequest_Resolved_accountClose.spec.ts >> CustomerUrgentRequestFlow - Resolved Status( Account Closed ) >> CustomerUrgentRequestFlowTest
- Location: tests\KycVerification\customerUrgentRequest_Resolved_accountClose.spec.ts:31:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('xpath=(//flt-semantics[@style=\'position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;\'])[1]') to be visible

```

# Test source

```ts
  85  |     await Passport_TDType.waitFor({ state: 'visible' });
  86  |     await Passport_TDType.click();
  87  |   }
  88  | 
  89  |   async uploadPassport_FrontPageBtn(): Promise<void> {
  90  |     await this.uploadFile(
  91  |       "xpath=//flt-semantics/span[.='Upload Passport Front Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  92  |     );
  93  |   }
  94  | 
  95  |   async uploadPassport_BackpageBtn(): Promise<void> {
  96  |     await this.uploadFile(
  97  |       "xpath=//flt-semantics/span[.='Upload Passport Back Page *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  98  |     );
  99  |   }
  100 | 
  101 |   async passPortNumField(): Promise<void> {
  102 |     const PassportNumField = this.page.locator(
  103 |       "xpath=//flt-semantics/span[.='Passport Number *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  104 |     );
  105 |     await PassportNumField.waitFor({ state: 'attached' });
  106 |     await this.page.waitForTimeout(500);
  107 |     await PassportNumField.click();
  108 |     await this.page.waitForTimeout(300);
  109 |     await PassportNumField.pressSequentially('3478279921');
  110 |   }
  111 | 
  112 |   async uploadRequestForm_Btn(): Promise<void> {
  113 |     await this.uploadFile(
  114 |       "xpath=//flt-semantics/span[.='Upload Request Form File *']/following::flt-semantics[1]/input[@data-semantics-role='text-field']"
  115 |     );
  116 |   }
  117 | 
  118 |   async Regular_KYC_RequestBtn(): Promise<void> {
  119 |     const RegularKYCRadioBtn = this.page.locator(
  120 |       "xpath=//flt-semantics/span[.='Regular Request']/preceding::flt-semantics[1][@role='radio']"
  121 |     );
  122 |     await RegularKYCRadioBtn.waitFor({ state: 'attached' });
  123 |     await this.page.waitForTimeout(400);
  124 |     await RegularKYCRadioBtn.click();
  125 |   }
  126 | 
  127 |   async idClose_IdOpenRadioBtn(): Promise<void> {
  128 |     const RegularKYCRadioBtn = this.page.locator(
  129 |       "xpath=//flt-semantics/span[.='999 ID Closed / 999 ID Reopen']/preceding::flt-semantics[1][@role='radio']"
  130 |     );
  131 |     await RegularKYCRadioBtn.waitFor({ state: 'attached' });
  132 |     await this.page.waitForTimeout(400);
  133 |     await RegularKYCRadioBtn.click();
  134 |   }
  135 | 
  136 |   async dormant_ACReleasenRadioBtn(): Promise<void> {
  137 |     const Dormant_ACReleasen_RadioBtn = this.page.locator(
  138 |       "xpath=//flt-semantics/span[.='999 dormant A/C release']/preceding::flt-semantics[1][@role='radio']"
  139 |     );
  140 |     await Dormant_ACReleasen_RadioBtn.waitFor({ state: 'attached' });
  141 |     await this.page.waitForTimeout(400);
  142 |     await Dormant_ACReleasen_RadioBtn.click();
  143 |   }
  144 | 
  145 |   async typesOf_KYC_ChangeReq_Checkboxes(): Promise<void> {
  146 |     const PhnNumberChange_KYC_Checkbox = this.page.locator(
  147 |       "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Phone Number Change'][@role='checkbox']"
  148 |     );
  149 |     await PhnNumberChange_KYC_Checkbox.waitFor({ state: 'attached' });
  150 |     await this.page.waitForTimeout(200);
  151 |     await PhnNumberChange_KYC_Checkbox.click();
  152 | 
  153 |     const emailChange_Checkbox = this.page.locator(
  154 |       "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Email Change'][@role='checkbox']"
  155 |     );
  156 |     await emailChange_Checkbox.waitFor({ state: 'attached' });
  157 |     await this.page.waitForTimeout(200);
  158 |     await emailChange_Checkbox.click();
  159 |   }
  160 | 
  161 |   async RemarkTextField(): Promise<void> {
  162 |     const remarkField = this.page.locator(
  163 |       "xpath=//flt-semantics/span[.='Remark']/following::flt-semantics/input[@data-semantics-role='text-field']"
  164 |     );
  165 |     await remarkField.waitFor({ state: 'attached' });
  166 |     await this.page.waitForTimeout(400);
  167 |     await remarkField.pressSequentially('Test@123');
  168 |   }
  169 | 
  170 |   async NextButton(): Promise<void> {
  171 |     const NxtBtn = this.page.locator("xpath=//flt-semantics[.='Next']");
  172 |     await NxtBtn.waitFor({ state: 'visible' });
  173 |     await NxtBtn.click();
  174 |   }
  175 | 
  176 |   async EyeIconbtnClick(): Promise<void> {
  177 |     await this.page.waitForTimeout(6000);
  178 |     for (let i = 0; i < 46; i++) {
  179 |       await this.page.keyboard.press('Tab');
  180 |       await this.page.waitForTimeout(200);
  181 |     }
  182 |     const eyeiconbtn = this.page.locator(
  183 |       "xpath=(//flt-semantics[@style='position: absolute; overflow: visible; width: 40px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 100, 7.5); pointer-events: all;'])[1]"
  184 |     );
> 185 |     await eyeiconbtn.waitFor({ state: 'visible' });
      |                      ^ TimeoutError: locator.waitFor: Timeout 60000ms exceeded.
  186 |     await eyeiconbtn.click();
  187 |   }
  188 |   async EditIconbtnClick(): Promise<void> {
  189 |     const EditBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
  190 |     await EditBtn.waitFor({ state: 'attached' });
  191 |     await this.page.waitForTimeout(1000);
  192 |     await EditBtn.click();
  193 |     await this.page.waitForTimeout(8000);
  194 | 
  195 |     const DOB_Checkbox = this.page.locator(
  196 |       "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='DOB Change'][@role='checkbox']"
  197 |     );
  198 |     await DOB_Checkbox.waitFor({ state: 'attached' });
  199 |     await this.page.waitForTimeout(500);
  200 |     await DOB_Checkbox.evaluate((el: HTMLElement) => el.scrollIntoView({ behavior: 'smooth' }));
  201 |     await this.page.waitForTimeout(180);
  202 |     await this.forceClick(DOB_Checkbox);
  203 | 
  204 |     const Signature_Change_Checkbox = this.page.locator(
  205 |       "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Signature Change'][@role='checkbox']"
  206 |     );
  207 |     await Signature_Change_Checkbox.waitFor({ state: 'attached' });
  208 |     await this.page.waitForTimeout(400);
  209 |     await this.page.waitForTimeout(180);
  210 |     await this.forceClick(Signature_Change_Checkbox);
  211 | 
  212 |     const Occupatione_Checkbox = this.page.locator(
  213 |       "xpath=//flt-semantics/span[.='Type of KYC Change Request *']/following::flt-semantics[@aria-label='Occupation'][@role='checkbox']"
  214 |     );
  215 |     await Occupatione_Checkbox.waitFor({ state: 'attached' });
  216 |     await this.page.waitForTimeout(400);
  217 |     await this.page.waitForTimeout(180);
  218 |     await this.forceClick(Occupatione_Checkbox);
  219 |   }
  220 | 
  221 |   async UpdateSatgeCMNTbox(): Promise<void> {
  222 |     const UpdateSatgeCMNtTextField = this.page.locator(
  223 |       "xpath=//flt-semantics/span/following::flt-semantics/textarea[@data-semantics-role='text-field']"
  224 |     );
  225 |     await UpdateSatgeCMNtTextField.waitFor({ state: 'visible' });
  226 |     await this.page.waitForTimeout(1000);
  227 |     await UpdateSatgeCMNtTextField.click();
  228 |     await UpdateSatgeCMNtTextField.pressSequentially('Done');
  229 |    }
  230 | 
  231 |   async MenuButton(): Promise<void> {
  232 |     const menu = this.page.locator("xpath=(//flt-semantics[@role='button'])[2]");
  233 |     for (let i = 0; i < 5; i++) {
  234 |       try {
  235 |         await menu.waitFor({ state: 'attached' });
  236 |         await menu.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
  237 |         await this.page.waitForTimeout(4500);
  238 |         await menu.evaluate((el: HTMLElement) =>
  239 |           el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  240 |         );
  241 |         console.log('Menu clicked');
  242 |         break;
  243 |       } catch (e) {
  244 |         console.log('Retrying menu click : ' + i);
  245 |         await this.page.waitForTimeout(5000);
  246 |       }
  247 |     }
  248 |   }
  249 | 
  250 |   async LogOut(): Promise<void> {
  251 |     const dropdown = this.page.locator("xpath=(//*[@role='group'])[2]");
  252 |     for (let i = 0; i < 5; i++) {
  253 |       try {
  254 |         await dropdown.waitFor({ state: 'attached' });
  255 |         await this.page.waitForTimeout(2000);
  256 |         await dropdown.evaluate((el: HTMLElement) =>
  257 |           el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  258 |         );
  259 |         break;
  260 |       } catch (e) {
  261 |         console.log('Retry logout dropdown : ' + i);
  262 |       }
  263 |     }
  264 | 
  265 |     const logout = this.page.locator("xpath=//*[text()='Logout']");
  266 |     for (let i = 0; i < 5; i++) {
  267 |       try {
  268 |         await logout.waitFor({ state: 'visible' });
  269 |         await this.page.waitForTimeout(3000);
  270 |         await logout.evaluate((el: HTMLElement) =>
  271 |           el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  272 |         );
  273 |         console.log('Logout success');
  274 |         break;
  275 |       } catch (e) {
  276 |         console.log('Retry logout button : ' + i);
  277 |         await this.page.waitForTimeout(2000);
  278 |       }
  279 |     }
  280 |   }
  281 | 
  282 | 
  283 |   
  284 |   async sendtoKYCOfficerbtn(): Promise<void> {
  285 |     const sendToKycbtn = this.page.locator("xpath=(//flt-semantics[@role='button'])[14]");
```