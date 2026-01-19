import { type Locator, type Page } from "@playwright/test";
import { test, expect } from '../../../fixtures/pages.fixtures';
import { loadUserObject } from '../../../helpers/saveUserObject';

export class ProfilePage {
    private readonly page: Page;
    // form: profile
    private readonly formProfile: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailAddressInput: Locator;
    readonly phoneInput: Locator;
    readonly streetInput: Locator;
    readonly postalCodeInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    private readonly countryInput: Locator;
    readonly updateProfileButton: Locator;

    private readonly formPassword: Locator;
    private readonly currentPasswordInput: Locator;
    private readonly newPasswordInput: Locator;
    private readonly newConfirmPasswordInput: Locator;
    private readonly changePasswordButton: Locator;


    private readonly fromSetUpTwoFA: Locator;
    private readonly TOTPInput: Locator;
    private readonly VerifyTOTPButton: Locator;

    readonly successfullyBlock: Locator;
    readonly dangeAlert: Locator;


    constructor(page: Page) {
        this.page = page;
        this.formProfile = page.locator('form', {
            has: page.getByRole('heading', { name: 'Profile' })
        });
        this.firstNameInput = page.locator("#first_name");
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
        this.emailAddressInput = page.getByRole('textbox', { name: 'Email address' });
        this.phoneInput = page.getByRole('textbox', { name: 'Phone' });
        this.streetInput = page.getByRole('textbox', { name: 'Street' });
        this.postalCodeInput = page.getByRole('textbox', { name: 'Postal code' });
        this.cityInput = page.getByRole('textbox', { name: 'City' });
        this.stateInput = page.getByRole('textbox', { name: 'State' });
        this.countryInput = page.getByRole('textbox', { name: 'Country' });
        this.updateProfileButton = page.locator('[data-test="update-profile-submit"]');


        this.formPassword = page.locator('form', {
            has: page.getByRole('heading', { name: 'Password' })
        });
        this.currentPasswordInput = page.locator('#current-password');
        this.newPasswordInput = page.locator('#new-password');
        this.newConfirmPasswordInput = page.locator('#new-password-confirm');
        this.changePasswordButton = page.getByRole('button', { name: 'Change Password ' });


        this.fromSetUpTwoFA = page.locator('form', {
            has: page.getByRole('heading', { name: 'Set up Two-Factor Authentication' })
        });
        this.TOTPInput = page.getByRole('textbox', { name: 'Enter TOTP code' });
        this.VerifyTOTPButton = page.getByRole('button', { name: 'Verify TOTP' });

        this.successfullyBlock = page.getByRole('alert');
        this.dangeAlert = page.locator(".alert-danger");
    }

    async goto() {
        await this.page.goto("/account/profile", { waitUntil: 'load' });
    };

    async changepassword(currecntPassword: string, newPassword: string) {
        await this.currentPasswordInput.fill(currecntPassword);
        await this.newPasswordInput.fill(newPassword);
        await this.newConfirmPasswordInput.fill(newPassword);
        await this.changePasswordButton.click();
    }

}