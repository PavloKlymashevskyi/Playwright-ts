import { type Locator, type Page } from "@playwright/test";
import { generateUserData } from '../../helpers/generateUserData';

export class SignUpPage {
    private readonly page: Page;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly dobInput: Locator;
    private readonly streetInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly cityInput: Locator;
    private readonly stateInput: Locator;
    private readonly countryInput: Locator;
    private readonly phoneInput: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    readonly registerButton: Locator;

    private readonly form: Locator;
    readonly inputInvalidBorder: Locator;
    private readonly dangerAlertBlock: Locator;


    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="first-name"]');
        this.lastNameInput = page.locator('[data-test="last-name"]');
        this.dobInput = page.locator('[data-test="dob"]');
        this.streetInput = page.locator('[data-test="street"]');
        this.postalCodeInput = page.locator('[data-test="postal_code"]');
        this.cityInput = page.locator('[data-test="city"]');
        this.stateInput = page.locator('[data-test="state"]');
        this.countryInput = page.locator('[data-test="country"]');
        this.phoneInput = page.locator('[data-test="phone"]');
        this.emailInput = page.locator('[data-test="email"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.registerButton = page.locator('[data-test="register-submit"]');

        this.form = page.locator('form[data-test="register-form"]');
        this.inputInvalidBorder = page.locator("form[data-test='register-form'] .is-invalid") //- red line input
        this.dangerAlertBlock = page.locator("form div .alert-danger") //- with text
    }

    async goto() {
        await this.page.goto("/auth/register");
    }

    async createRandomUser(email: string, password: string) {
        const userData = generateUserData();

        await this.firstNameInput.fill(userData.firstName);
        await this.lastNameInput.fill(userData.lastName);
        await this.dobInput.fill(userData.dob);
        await this.streetInput.fill(userData.streetAddress);
        await this.postalCodeInput.fill(userData.zipCode);
        await this.cityInput.fill(userData.city);
        await this.stateInput.fill(userData.state);
        await this.countryInput.selectOption(userData.country);
        await this.phoneInput.fill(userData.phoneNumber);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.registerButton.click();

        return {
            ...userData,
            email,
            password
        };
    }

    async arrayDataTextErrors() {
        const textAlert = await this.dangerAlertBlock.allTextContents();
        let errorMessagesArray = textAlert.map(msg => msg.trim()).filter(msg => msg.length > 0);
        return errorMessagesArray;

    }

}

