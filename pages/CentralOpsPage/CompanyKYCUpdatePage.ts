/**
 * Source (Java): org.CentralOpsPages.CompanyKYCUpdatePage
 * Migrated to: Playwright + TypeScript (Page Object)
 * - sendKeys -> pressSequentially; xpath copied EXACTLY.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class CompanyKYCUpdatePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async companyKYCUpdateOption(): Promise<void> {
    const companyKYC = this.page.locator("xpath=//flt-semantics/span[.='Company KYC Update']");
    await companyKYC.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await companyKYC.click();
  }

  async contactNUmberField(): Promise<void> {
    const contactnnumField = this.page.locator(
      "xpath=//flt-semantics/span[.='Contact Number *']/following::flt-semantics[2]/input[@data-semantics-role='text-field']"
    );
    await contactnnumField.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await contactnnumField.click();
    await this.page.waitForTimeout(200);
    await contactnnumField.pressSequentially('678976777');
  }

  async Foreign_CompanyRadio(): Promise<void> {
    const ForeignCompanyRadio = this.page.locator(
      "xpath=//flt-semantics/span[.='Choose your company type *']/following::flt-semantics[@role='radio'][5]"
    );
    await ForeignCompanyRadio.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await ForeignCompanyRadio.click();
  }

  async companyType(): Promise<void> {
    const UrgentRadio = this.page.locator(
      "xpath=//flt-semantics/span[.='Urgent']/preceding::flt-semantics[@role='radio'][1]"
    );
    await UrgentRadio.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await UrgentRadio.click();
  }
}
