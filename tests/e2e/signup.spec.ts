import { test, expect } from '../../fixtures/pages.fixtures';
import { loadUserObject } from '../../helpers/saveUserObject';

test.describe('login user', () => {

    test.use({ storageState: ".auth/user1.json" });
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });


    test("check user signed in", async ({ page }) => {
        const userDataObject = loadUserObject();
        await expect(page.locator('#menu')).toHaveText(`${userDataObject.firstName} ${userDataObject.lastName}`);
    });
});