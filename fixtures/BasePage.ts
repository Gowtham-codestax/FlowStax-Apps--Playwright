import { Page, Locator } from '@playwright/test';

/**
 * Literal upload file path used to replace java.awt.Robot native file-picker
 * sequences (per migration rule 3). Change here to override everywhere.
 */
export const UPLOAD_FILE_PATH = 'C:\\Users\\User\\Music\\A dummy-pdf_2.pdf';

/**
 * BasePage - shared helpers for all Page Objects.
 *
 * Provides the reusable actions referenced by the migration rules:
 *   - uploadFile(): replaces java.awt.Robot native file-picker TAB/ENTER sequences
 *   - forceClick(): replaces js.executeScript("arguments[0].click();", el)
 *   - scrollTo():   replaces js.executeScript("arguments[0].scrollIntoView(...);", el)
 *
 * Locators are Flutter-Web flt-semantics XPaths and are used verbatim.
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /** Resolve a raw xpath/css/id string into a Locator (strings copied verbatim from Java). */
  loc(selector: string): Locator {
    return this.page.locator(selector);
  }

  /**
   * Upload a file by clicking the trigger and catching the native file chooser.
   * Replaces the Selenium java.awt.Robot TAB/DOWN/ENTER native-dialog sequence.
   *
   * The Flutter-Web field (data-semantics-role="text-field") is only a DISPLAY
   * field, not an <input type="file">, so setInputFiles() can't target it. Clicking
   * it opens a native file chooser, which Playwright intercepts via 'filechooser'.
   *   base.uploadFile("xpath=...", "C:\\Users\\User\\Music\\A dummy-pdf_2.pdf");
   */
  async uploadFile(selector: string, filePath: string = UPLOAD_FILE_PATH): Promise<void> {
    const trigger = this.page.locator(selector);
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent('filechooser'),
      await this.page.waitForTimeout(1000), // wait for the trigger to be ready
      trigger.click(),
    ]);
    await fileChooser.setFiles(filePath);
  }

  /** Scroll an element into view. Replaces js.executeScript scrollIntoView. */
  async scrollTo(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  /** Force a DOM click. Replaces js.executeScript("arguments[0].click();", el). */
  async forceClick(locator: Locator): Promise<void> {
    await locator.evaluate((el: HTMLElement) => el.click());
  }
}
