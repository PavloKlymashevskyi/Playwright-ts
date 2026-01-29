import { Page } from '@playwright/test';
import { HomePage } from '../pages/account/Home.page';

export class IndexPage extends HomePage {
  constructor(page: Page) {
    super(page);
  }

  async waitForSelector(selector: string) {
    return this.page.waitForSelector(selector);
  }
}