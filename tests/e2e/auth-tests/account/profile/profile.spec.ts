import { test, expect } from '../../../../../fixtures/pages.fixtures';
import { loadUserObject } from '../../../../../helpers/saveUserObject';

test.describe('profile user page "Profile" block', () => {
    const textFirstName = "Test";

    test.beforeEach(async ({ profilePage }) => {
        await profilePage.goto();

    });

    test("validating the profile page after creating a user", async ({ profilePage }) => {
        const userDataObject = loadUserObject();

        await expect(profilePage.firstNameInput).toHaveValue(userDataObject.firstName);
        await expect(profilePage.lastNameInput).toHaveValue(userDataObject.lastName);
        await expect(profilePage.emailAddressInput).toHaveValue(userDataObject.email);
        await expect(profilePage.phoneInput).toHaveValue(userDataObject.phoneNumber);
        await expect(profilePage.streetInput).toHaveValue(userDataObject.streetAddress);
        await expect(profilePage.postalCodeInput).toHaveValue(userDataObject.zipCode);
        await expect(profilePage.cityInput).toHaveValue(userDataObject.city);
        await expect(profilePage.stateInput).toHaveValue(userDataObject.state);
        //await expect(this.countryInput).toHaveValue(userDataObject.country);
    });

    test("The first name field is required", async ({ profilePage }) => {
        const userDataObject = loadUserObject();
        await expect(profilePage.firstNameInput).toHaveValue(userDataObject.firstName);

        await profilePage.firstNameInput.clear();
        await profilePage.firstNameInput.fill(textFirstName);
        //await expect(this.countryInput).toHaveValue(userDataObject.country);

        await profilePage.updateProfileButton.click();

        await expect(profilePage.successfullyBlock).toBeVisible();
        await expect(profilePage.successfullyBlock).toContainText('Your profile is successfully updated!');
        await expect(profilePage.firstNameInput).toHaveValue(textFirstName);
    });


    test("The first name field is empty", async ({ profilePage }) => {
        await expect(profilePage.firstNameInput).toHaveValue(textFirstName);

        await profilePage.firstNameInput.clear();
        await profilePage.firstNameInput.fill("");
        //await expect(this.countryInput).toHaveValue(userDataObject.country);

        await profilePage.updateProfileButton.click();

        await expect(profilePage.dangeAlert).toBeVisible();
        await expect(profilePage.dangeAlert).toContainText('The first name field is required.');
        await expect(profilePage.firstNameInput).toHaveValue("");
    });

});

