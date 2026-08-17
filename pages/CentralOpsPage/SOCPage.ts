import { Page } from '@playwright/test';
import { BasePage } from '../../fixtures/BasePage';

export class SOCPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  
  async PullOptionButon(): Promise<void> {
    for (let i = 0; i < 5; i++) {
      try {
        const Pull = this.page.locator(
          "xpath=//flt-semantics[@style[contains(.,'width: 36px') and contains(.,'height: 34px')]]"
        );
        await Pull.waitFor({ state: 'attached' });
        await this.page.waitForTimeout(800);
        await this.forceClick(Pull);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async editIconClick(): Promise<void> {
    const EditBtn = this.page.locator("xpath=//flt-semantics[.='Edit']");
    await EditBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(1000);
    await EditBtn.click();
    await this.page.waitForTimeout(3000);
  }

  async approveBtn(): Promise<void> {
    const appcorrectBtn = this.page.locator(
      "xpath=//flt-semantics[contains(.,'Approve')][@role='button']"
    );
    await appcorrectBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(3000);
    await appcorrectBtn.waitFor({ state: 'visible' });
    await appcorrectBtn.click();
  }


  async rejectBtn(): Promise<void> {
    const appcorrectBtn = this.page.locator(
      "xpath=//flt-semantics[contains(.,'Reject')][@role='button']"
    );
    await appcorrectBtn.waitFor({ state: 'attached' });
    await this.page.waitForTimeout(3000);
    await appcorrectBtn.waitFor({ state: 'visible' });
    await appcorrectBtn.click();
  }
}