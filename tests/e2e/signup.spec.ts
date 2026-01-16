import { test, expect } from '../../fixtures/pages.fixtures';



test.describe('New Random User', () => {
    const email = `testemail_${Date.now()}@example.com`;

    test('Random user was created and successfully logged in.', async ({ page, signUpPage, loginPage }) => {
        await signUpPage.goto();
        await signUpPage.createRandomUser(email, process.env.PASSWORD);
        await expect(page.locator("h3")).toContainText("Login");

        await loginPage.goto();
        await loginPage.loginUser(email, process.env.PASSWORD);
        await expect(page.locator("h1")).toContainText("My account");
        // await expect(page.locator("#menu")).toContainText("");
    });
});