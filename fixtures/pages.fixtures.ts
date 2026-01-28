import { test as baseTest, Page } from '@playwright/test';
import { SignUpPage } from "../pages/auth/register/Register.page"
import { LoginPage } from '../pages/auth/login/Login.page';
import { ProfilePage } from '../pages/account/profile/Profile.page';
import { IndexPage } from '../pages/Index.page';

type Fixtures = {
  signUpPage: SignUpPage
  loginPage: LoginPage,
  profilePage: ProfilePage,
  indexPage: IndexPage,

  authPage: Page,
  unAuthPage: Page,
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
    const context = await browser.newContext();
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
  signUpPage: async ({ unAuthPage }, use) => {
    await use(new SignUpPage(unAuthPage));
  },
  loginPage: async ({ unAuthPage }, use) => {
    await use(new LoginPage(unAuthPage));
  },
  profilePage: async ({ authPage }, use) => {
    await use(new ProfilePage(authPage));
  },
  indexPage: async ({ page }, use) => {
    await use(new IndexPage(page));
  }
});


export { expect } from '@playwright/test'