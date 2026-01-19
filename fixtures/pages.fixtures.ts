import { test as baseTest, Page } from '@playwright/test';
import { SignUpPage } from "../pages/auth/register/register.page"
import { LoginPage } from '../pages/auth/login/login.page';
import { ProfilePage } from '../pages/account/profile/profile.page';

type Fixtures = {
  signUpPage: SignUpPage
  loginPage: LoginPage,
  profilePage: ProfilePage,
  authPage: Page,
  unAuthPage: Page
}


export const test = baseTest.extend<Fixtures>({
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
    signUpPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  profilePage: async ({ authPage }, use) => {
    await use(new ProfilePage(authPage));
  }
});


export { expect } from '@playwright/test'