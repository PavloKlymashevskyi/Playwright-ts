
import { test, expect } from '../../../../../fixtures/pages.fixtures';
import { loadUserObject } from '../../../../../helpers/saveUserObject';

test.describe('Trying to user login with incorrect data', () => {
    const userDataObject = loadUserObject();

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
    });

    test("User entered with empty fileds", async ({ loginPage }) => {
        await loginPage.loginUser("", "");

        await expect(loginPage.dangerEmailError).toBeVisible();
        await expect(loginPage.dangerEmailError).toContainText('Email is required');
        await expect(loginPage.dangerPasswordError).toBeVisible();
        await expect(loginPage.dangerPasswordError).toContainText('Password is required');

    });

    test("User entered with invalid password", async ({ loginPage }) => {
        await loginPage.loginUser(userDataObject.email, "test");

        await expect(loginPage.dangerEmailOrPassword).toBeVisible();
        await expect(loginPage.dangerEmailOrPassword).toContainText('Invalid email or password');

    });

    test("User entered with invalid format email", async ({ loginPage }) => {
        await loginPage.loginUser("sdfsdf", userDataObject.password);

        await expect(loginPage.dangerEmailError).toBeVisible();
        await expect(loginPage.dangerEmailError).toContainText('Email format is invalid');

    });

    test("User entered with invalid format email without TLD", async ({ loginPage }) => {
        await loginPage.loginUser("sdfsdf@fsd", userDataObject.password);

        await expect(loginPage.dangerEmailOrPassword).toBeVisible();
        await expect(loginPage.dangerEmailOrPassword).toContainText('Invalid email or password');
    });
});