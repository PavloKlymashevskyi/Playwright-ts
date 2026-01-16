import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
    private readonly page: Page;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator('input[aria-label="Login"]');       
    }

    async goto() {
        await this.page.goto("/auth/login");
    }

    async loginUser(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


}