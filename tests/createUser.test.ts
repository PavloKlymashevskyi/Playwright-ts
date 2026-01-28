import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/auth/register/Register.page';
import { saveUserObject } from '../helpers/saveUserObject'

test("Create user1", {tag: '@createUser'} , async ({ page }) => {
    let user = null;
    const email = `testemail_${Date.now()}@example.com`;

    const signUpPage = new SignUpPage(page);

    await signUpPage.goto();
    user = await signUpPage.createRandomUser(email, process.env.PASSWORD);

    await saveUserObject(user);

    await page.waitForURL('**/auth/login');
    await expect(page.locator('h3')).toBeVisible();
    await expect(page.locator('h3')).toHaveText('Login');

    await page.close();
});
