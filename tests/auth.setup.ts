import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/auth/login/Login.page';
import { loadUserObject } from '../helpers/saveUserObject'

setup("Login to user1 auth",{}, async ({ page, context }) => {
    const user = loadUserObject();
    const loginPage = new LoginPage(page);
    const userAuthFile = '.auth/user1.json';

    await loginPage.goto();
    await loginPage.loginUser(user.email, user.password);

    await expect(page.getByRole("heading", {name: "My account"})).toContainText("My account");
    await expect(page.locator('#menu')).toHaveText(`${user.firstName} ${user.lastName}`);

    await context.storageState({ path: userAuthFile });

    await page.close();
    await context.close();
});
