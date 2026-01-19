import { test as baseTest, Page } from '@playwright/test';
import { SignUpPage } from "../pages/auth/register/register.page"
import { LoginPage } from '../pages/auth/login/login.page';

type MyPages = {
  signUpPage: SignUpPage
  loginPage: LoginPage,
  authPage: Page,
  unAuthPage: Page
}


export const test = baseTest.extend<MyPages>({
  signUpPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  authPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: '.auth/user1.json',
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
  unAuthPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: undefined,
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});


export { expect } from '@playwright/test'