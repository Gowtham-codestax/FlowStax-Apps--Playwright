/**
 * Source (Java): org.CentralOpsPages.LoginPage
 * Migrated to: Playwright + TypeScript (Page Object)
 *
 * Structural notes:
 *  - Selenium WebDriver/WebDriverWait/Actions/JavascriptExecutor removed; a single
 *    Playwright `page` is injected instead.
 *  - The commented-out "Login with Google" block in the Java source is preserved
 *    verbatim as a comment for fidelity (it was disabled there too).
 *  - Locator xpath strings copied EXACTLY, wrapped as "xpath=...".
 *  - Thread.sleep(ms) -> page.waitForTimeout(ms) (same durations).
 */
import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async login(user: string, pass: string): Promise<void> {
    /*
      // Via Google login
      String parentWindow = driver.getWindowHandle();
      By viaGoogle = By.xpath("//flt-semantics[contains(text(),'Login with Google')]");
      ... (disabled in Java source) ...
      // Password Entering
    */

    // Email
    const email = this.page.locator(
      "xpath=(//flt-semantics/span[.='Email ']/following::flt-semantics/input[@data-semantics-role='text-field'])[1]"
    );
    await this.page.waitForTimeout(300);
    await email.waitFor({ state: 'attached' });
    await email.click();
    await this.page.waitForTimeout(500);
    await email.waitFor({ state: 'attached' });
    await email.pressSequentially(user);

    // Password
    const password = this.page.locator(
      "xpath=(//flt-semantics/span[.='Password ']/following::flt-semantics/flt-semantics-container/flt-semantics/input[@data-semantics-role='text-field'])[1]"
    );
    await this.page.waitForTimeout(300);
    await password.waitFor({ state: 'attached' });
    await password.click();
    await this.page.waitForTimeout(500);
    await password.waitFor({ state: 'attached' });
    await password.pressSequentially(pass);

    // Login button
    const loginBtn = this.page.locator("xpath=//flt-semantics[text()='Login']");
    await loginBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(500);
    await loginBtn.click();
    await this.page.waitForTimeout(5000);
  }
}
