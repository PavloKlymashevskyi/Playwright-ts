import { test, expect } from '../../../fixtures/pages.fixtures';
import { loadUserObject } from '../../../helpers/saveUserObject';

test.describe('login user1 with auth setup', () => {

    test.beforeEach(async ({ authPage }) => {
        await authPage.goto("/");
    });

    test("Sussessfully login using storage", async ({ authPage }) => {
        const userDataObject = loadUserObject();
        await expect(authPage.locator('#menu')).toHaveText(`${userDataObject.firstName} ${userDataObject.lastName}`);
    });
});