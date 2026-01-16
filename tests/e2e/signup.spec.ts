import { test, expect } from '../../fixtures/pages.fixtures';
import { loadUserObject } from '../../helpers/saveUserObject';

test.describe('login user1 with auth setup', () => {
    test.use({ storageState: ".auth/user1.json" });

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("Sussessfully login using storage", async ({ page }) => {
        const userDataObject = loadUserObject();
        await expect(page.locator('#menu')).toHaveText(`${userDataObject.firstName} ${userDataObject.lastName}`);
    });
});