import { test as baseTest } from '@playwright/test';
import { SignUpPage } from "../pages/signup/sign.page"
import { LoginPage } from '../pages/login/login.page';

type MyPages = {
  signUpPage: SignUpPage
  loginPage: LoginPage
}


export const test = baseTest.extend<MyPages>({
  signUpPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});


export { expect } from '@playwright/test'