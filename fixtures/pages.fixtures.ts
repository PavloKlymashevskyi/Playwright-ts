import { test as baseTest } from '@playwright/test';
import { SignUpPage } from "../pages/signup/sign.page"

type MyPages = {
  signUpPage: SignUpPage
}


export const test = baseTest.extend<MyPages>({
  signUpPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  }
});


export { expect } from '@playwright/test'