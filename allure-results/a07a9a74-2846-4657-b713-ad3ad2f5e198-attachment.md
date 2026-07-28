# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NonPoService\PettyCashFlow.spec.ts >> PettyCashFlow >> pettyCashFlow
- Location: tests\NonPoService\PettyCashFlow.spec.ts:39:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//flt-semantics/span[.=\'MPT\']')
    - locator resolved to <span>MPT</span>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

```

# Test source

```ts
  41  |     await PettyCash_option.click();
  42  |   }
  43  | 
  44  |   async invoice_NumField(): Promise<void> {
  45  |     const InvoiceNum = this.page.locator(
  46  |       "xpath=(//flt-semantics/span[.='Invoice Number *']/following::flt-semantics/input[@data-semantics-role='text-field'])[1]"
  47  |     );
  48  |     await InvoiceNum.waitFor({ state: 'visible' });
  49  |     await InvoiceNum.evaluate((el: HTMLElement) =>
  50  |       el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  51  |     );
  52  |     await this.page.waitForTimeout(500);
  53  |     const invoiceNumber = 'INV' + Date.now();
  54  |     await InvoiceNum.pressSequentially(invoiceNumber);
  55  |   }
  56  | 
  57  |   async invoiceCreationDate(): Promise<void> {
  58  |     const CurrentDay = new Date().getDate();
  59  | 
  60  |     const CalenderPopup = this.page.locator("xpath=//input[@aria-label='DD-MM-YYYY']");
  61  |     await CalenderPopup.waitFor({ state: 'attached' });
  62  |     await this.page.waitForTimeout(500);
  63  |     await CalenderPopup.click();
  64  | 
  65  |     const today = this.page.locator(
  66  |       `xpath=//flt-semantics[contains(text(),'${CurrentDay}') and contains(text(),'Today')]`
  67  |     );
  68  |     await today.waitFor({ state: 'visible' });
  69  |     await this.page.waitForTimeout(100);
  70  |     await this.forceClick(today);
  71  | 
  72  |     const OkClick = this.page.locator("xpath=//flt-semantics[.='OK']");
  73  |     await OkClick.click();
  74  |   }
  75  | 
  76  |   async vendorDetailsType(): Promise<void> {
  77  |     const VendorDetails = this.page.locator(
  78  |       "xpath=(//flt-semantics/span[.='Vendor Details']/following::flt-semantics[.='Please select'])[1]"
  79  |     );
  80  |     await VendorDetails.waitFor({ state: 'attached' });
  81  |     await this.page.waitForTimeout(1000);
  82  |     await VendorDetails.click();
  83  |   }
  84  | 
  85  |   async vendorID(): Promise<void> {
  86  |     const VendorID = this.page.locator("xpath=//flt-semantics[.='Vendor Id']");
  87  |     await VendorID.waitFor({ state: 'attached' });
  88  |     await this.page.waitForTimeout(500);
  89  |     await VendorID.click();
  90  |   }
  91  | 
  92  |   async vendorName(): Promise<void> {
  93  |     const VendorName = this.page.locator("xpath=//flt-semantics[.='Vendor Name']");
  94  |     await this.page.waitForTimeout(500);
  95  |     await VendorName.click();
  96  |   }
  97  | 
  98  |   async searchKeyword(): Promise<void> {
  99  |     const seacrhKeyword = this.page.locator("xpath=//flt-semantics[.='search Keyword']");
  100 |     await this.page.waitForTimeout(300);
  101 |     await seacrhKeyword.click();
  102 |   }
  103 | 
  104 |   async searchFor_vendorIDField(): Promise<void> {
  105 |     const VendorIDField = this.page.locator(
  106 |       "xpath=//flt-semantics/span[.='Vendor Details']/following::flt-semantics-container/flt-semantics/input[@aria-label='Search for Vendor Id']"
  107 |     );
  108 |     await this.page.waitForTimeout(500);
  109 |     await this.forceClick(VendorIDField);
  110 |     await this.page.waitForTimeout(500);
  111 |     await VendorIDField.pressSequentially('10000');
  112 |   }
  113 | 
  114 |   async MGR_PvtLtdiD(): Promise<void> {
  115 |     const MgrPvttd = this.page.locator("xpath=//flt-semantics/span[contains(text(),'A.MGR Co. Pte Ltd')]");
  116 |     await MgrPvttd.waitFor({ state: 'visible' });
  117 |     await this.page.waitForTimeout(500);
  118 |     await MgrPvttd.click();
  119 |   }
  120 | 
  121 |   async currencyType(): Promise<void> {
  122 |     const Vendor = this.page.locator(
  123 |       "xpath=(//flt-semantics/span[.='Currency *']/following::flt-semantics[.='Please select'])[1]"
  124 |     );
  125 |     await Vendor.waitFor({ state: 'visible' });
  126 |     await this.page.waitForTimeout(200);
  127 |     await Vendor.click();
  128 |   }
  129 | 
  130 |   async usd(): Promise<void> {
  131 |     const USD = this.page.locator("xpath=//flt-semantics/span[.='USD']");
  132 |     await USD.waitFor({ state: 'visible' });
  133 |     await this.page.waitForTimeout(200);
  134 |     await USD.click();
  135 |   }
  136 | 
  137 |   async mpt(): Promise<void> {
  138 |     const MPT = this.page.locator("xpath=//flt-semantics/span[.='MPT']");
  139 |     await MPT.waitFor({ state: 'visible' });
  140 |     await this.page.waitForTimeout(200);
> 141 |     await MPT.click();
      |               ^ Error: locator.click: Target page, context or browser has been closed
  142 |   }
  143 | 
  144 |   async descriptionTxtField(): Promise<void> {
  145 |     const DescriptionTxtField = this.page.locator(
  146 |       "xpath=(//flt-semantics/span[contains(text(),'Description')]/following::flt-semantics/textarea[@data-semantics-role='text-field'])[1]"
  147 |     );
  148 |     await DescriptionTxtField.waitFor({ state: 'visible' });
  149 |     await this.page.waitForTimeout(1500);
  150 |     await this.forceClick(DescriptionTxtField);
  151 |     await this.page.waitForTimeout(400);
  152 |     await DescriptionTxtField.pressSequentially('Testing Petty Cash Flow');
  153 |   }
  154 | 
  155 |   async commodityType(): Promise<void> {
  156 |     const Commodity = this.page.locator(
  157 |       "xpath=//flt-semantics/span[contains(text(),'Commodity Code')]/following::flt-semantics[@style='position: absolute; overflow: visible; width: 150px; height: 40px; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 371, 68); pointer-events: all; z-index: 17;']"
  158 |     );
  159 |     await Commodity.waitFor({ state: 'visible' });
  160 |     await this.page.waitForTimeout(500);
  161 |     await Commodity.click();
  162 |   }
  163 | 
  164 |   async dummy_Desc_CodePOPtion(): Promise<void> {
  165 |     const DummyDec = this.page.locator("xpath=//flt-semantics/span[contains(text(),'Dummy Desc code ')]");
  166 |     await DummyDec.waitFor({ state: 'visible' });
  167 |     await this.page.waitForTimeout(300);
  168 |     await DummyDec.click();
  169 |   }
  170 | 
  171 |   async atMCR_CodePOPtion(): Promise<void> {
  172 |     const ATMCRComoodity = this.page.locator("xpath=//flt-semantics/span[contains(text(),'ATM - NCR')]");
  173 |     await ATMCRComoodity.waitFor({ state: 'visible' });
  174 |     await this.page.waitForTimeout(300);
  175 |     await ATMCRComoodity.click();
  176 |   }
  177 | 
  178 |   async QuantityField(): Promise<void> {
  179 |     const Quantity = this.page.locator(
  180 |       "xpath=(//flt-semantics/span[contains(text(),'Quantity')]/following::flt-semantics/textarea[@data-semantics-role='text-field'])[5]"
  181 |     );
  182 |     await Quantity.waitFor({ state: 'visible' });
  183 |     await Quantity.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
  184 |     await this.page.waitForTimeout(500);
  185 |     await this.forceClick(Quantity);
  186 |     await Quantity.pressSequentially('1000');
  187 |   }
  188 | 
  189 |   async eachUnitOPtion_RemoveBtn(): Promise<void> {
  190 |     const EachUnitRemoveOption = this.page.locator(
  191 |       "xpath=//flt-semantics/flt-semantics-container/flt-semantics[@aria-label='Each']/flt-semantics-container/flt-semantics[@role='button']"
  192 |     );
  193 |     await EachUnitRemoveOption.waitFor({ state: 'visible' });
  194 |     await this.page.waitForTimeout(300);
  195 |     await EachUnitRemoveOption.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
  196 |     await this.page.waitForTimeout(300);
  197 |     await this.forceClick(EachUnitRemoveOption);
  198 |     await EachUnitRemoveOption.click();
  199 |   }
  200 | 
  201 |   async unitOPtion(): Promise<void> {
  202 |     const UnitDD = this.page.locator(
  203 |       "xpath=//flt-semantics/span[contains(text(),'Unit')]//following::flt-semantics/span[contains(text(),'The field is required')]"
  204 |     );
  205 |     await UnitDD.waitFor({ state: 'visible' });
  206 |     await this.page.waitForTimeout(200);
  207 |     await UnitDD.click();
  208 | 
  209 |     const Unit = this.page.locator("xpath=//flt-semantics/span[.='Unit']");
  210 |     await Unit.waitFor({ state: 'attached' });
  211 |     await Unit.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
  212 |     await this.page.waitForTimeout(200);
  213 |     await this.forceClick(Unit);
  214 |   }
  215 | 
  216 |   async priceField(): Promise<void> {
  217 |     const price = this.page.locator(
  218 |       "xpath=(//flt-semantics/span[contains(text(),'Price')]/following::flt-semantics/textarea[@data-semantics-role='text-field'])[6]"
  219 |     );
  220 |     await price.waitFor({ state: 'visible' });
  221 |     await price.evaluate((el: HTMLElement) => el.scrollIntoView({ block: 'center' }));
  222 |     await this.page.waitForTimeout(600);
  223 |     await this.forceClick(price);
  224 |     await this.page.waitForTimeout(300);
  225 |     await price.pressSequentially('2500000');
  226 |   }
  227 | 
  228 |   async showMenuButton(): Promise<void> {
  229 |     const menubtn = this.page.locator("xpath=//flt-semantics/span[.='Show menu']");
  230 |     await menubtn.waitFor({ state: 'visible' });
  231 |     await this.page.waitForTimeout(300);
  232 |     await menubtn.evaluate((el: HTMLElement) =>
  233 |       el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  234 |     );
  235 |     await this.page.waitForTimeout(1000);
  236 |     await this.forceClick(menubtn);
  237 |   }
  238 | 
  239 |   async duplicateRowButton(): Promise<void> {
  240 |     const DuplicateRowbtn = this.page.locator("xpath=//flt-semantics[contains(text(),'Duplicate Row')]");
  241 |     await DuplicateRowbtn.waitFor({ state: 'visible' });
```