/**
 * Source (Java): org.CentralOpsPages.DashBoardPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - WebDriver/PageFactory removed; a single injected Playwright `page` is used.
 *  - Thread.sleep(4000) -> page.waitForTimeout(4000) (same duration).
 *  - Locator xpath string copied EXACTLY, wrapped as "xpath=...".
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class DashBoardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickAddNew(): Promise<void> {
    await this.page.waitForTimeout(4000);
    await this.page.locator("xpath=//flt-semantics[.='Add New']").click();
  }
}
