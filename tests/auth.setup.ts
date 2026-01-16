import { test as setup, expect } from '@playwright/test';
import { SignUpPage } from '../pages/signup/sign.page';
import { LoginPage } from '../pages/login/login.page';
import { saveUserObject } from '../helpers/saveUserObject'

setup("Create user auth", async ({ page, context }) => {
    let user = null;
    const email = `testemail_${Date.now()}@example.com`;

    const signUpPage = new SignUpPage(page);
    const loginPage = new LoginPage(page);
    const userAuthFile = '.auth/user1.json';

    await signUpPage.goto();
    user = await signUpPage.createRandomUser(email, process.env.PASSWORD);
    await expect(page.locator("h3")).toContainText("Login");

    await loginPage.goto();
    await loginPage.loginUser(email, process.env.PASSWORD);

    await expect(page.locator("h1")).toContainText("My account");
    await expect(page.locator('#menu')).toHaveText(`${user.firstName} ${user.lastName}`);

    await saveUserObject(user);
    await context.storageState({ path: userAuthFile });
   
});
