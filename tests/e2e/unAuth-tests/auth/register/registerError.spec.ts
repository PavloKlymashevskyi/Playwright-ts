import { test, expect } from '../../../../../fixtures/pages.fixtures';

test.describe('Trying to user registration with incorrect data', () => {

    test.beforeEach(async ({ signUpPage }) => {
        await signUpPage.goto();
    });

    test("User registration with empty fields.", async ({ signUpPage }) => {
        await signUpPage.registerButton.click();
        let listTextError = await signUpPage.arrayDataTextErrors();
        await expect(listTextError).toHaveLength(11);
        await expect(listTextError).toEqual([
            'First name is required',
            'Last name is required',
            'Please enter a valid date in YYYY-MM-DD format.  Date of Birth is required',
            'Street is required',
            'Postcode is required',
            'City is required',
            'State is required',
            'Country is required',
            'Phone is required.',
            'Email is required',
            'Password is required  Password must be minimal 6 characters long.  Password must include invalid characters.'
        ]);
        //.toHaveCSS('border-color', '#dc3545');
    });
});

