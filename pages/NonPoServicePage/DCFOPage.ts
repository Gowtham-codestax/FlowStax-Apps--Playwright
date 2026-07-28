/**
 * Source (Java): org.nonPoAppPages.DCFOPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * The Java class contains only a constructor (no page actions yet). Migrated as an
 * empty Page Object extending BasePage so it is ready for future methods.
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class DCFOPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
