import { test as base, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Custom fixtures for FLOWSTAX APPS.
 *
 * Exposes `base` (a BasePage instance bound to the current page) so tests and
 * page objects can call the shared helpers: base.uploadFile(), base.forceClick(),
 * base.scrollTo(), base.loc().
 */
type Fixtures = {
  base: BasePage;
};

export const test = base.extend<Fixtures>({
  base: async ({ page }, use) => {
    await use(new BasePage(page));
  },
});

export { expect };
