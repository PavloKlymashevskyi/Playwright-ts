import { type Locator, type Page } from "@playwright/test";

export class NavBar {
    readonly homeLink: Locator;
    readonly categories: Locator;
    readonly categoryHandTools: Locator;
    readonly categoryPowerTools: Locator;
    readonly categoryOther: Locator;
    readonly categorySpecialTools: Locator;
    readonly categoryRentals: Locator;
    readonly contact: Locator;

    readonly signUp: Locator;

    readonly dropdownToggle: Locator;
    readonly userDropdownMenu: Locator;
    readonly myAccountLink: Locator;
    readonly myFavoritesLink: Locator;
    readonly myProfileLink: Locator;
    readonly myInvoicesLink: Locator;
    readonly myMessagesLink: Locator;
    readonly signOutLink: Locator;

    readonly dropdownButton: Locator;
    readonly dropdownMenu: Locator;
    readonly currentLanguageText: Locator;
    readonly globeIcon: Locator;
    readonly languageOptions: Object;

    constructor(page: Page) {
        this.homeLink = page.getByRole('link', { name: 'Home' });

        this.categories = page.getByRole('link', { name: 'Categories' });
        this.categoryHandTools = page.getByRole('link', { name: 'Hand Tools' });
        this.categoryPowerTools = page.getByRole('link', { name: 'Power Tools' });
        this.categoryOther = page.getByRole('link', { name: 'Other' });
        this.categorySpecialTools = page.getByRole('link', { name: 'Special Tools' });
        this.categoryRentals = page.getByRole('link', { name: 'Rentals' });

        this.contact = page.getByRole('link', { name: 'Contact' });

        // unAuth
        this.signUp = page.getByRole('link', { name: "Sign in" });

        // Auth (after login)
        this.dropdownToggle = page.locator('a.nav-link.dropdown-toggle[role="button"]');
        this.userDropdownMenu = page.locator('ul.dropdown-menu');

        this.myAccountLink = page.locator('a.dropdown-item[href="/account"]');
        this.myFavoritesLink = page.locator('a.dropdown-item[href="/account/favorites"]');
        this.myProfileLink = page.locator('a.dropdown-item[href="/account/profile"]');
        this.myInvoicesLink = page.locator('a.dropdown-item[href="/account/invoices"]');
        this.myMessagesLink = page.locator('a.dropdown-item[href="/account/messages"]');
        this.signOutLink = page.locator('a.dropdown-item').filter({ hasText: 'Sign out' });


        this.dropdownButton = page.locator('#language');
        this.dropdownMenu = page.locator('#dropdown-animated');
        this.currentLanguageText = page.locator('#language');
        this.globeIcon = page.locator('#language fa-icon svg');

        this.languageOptions = {
            DE: page.getByRole('link', { name: 'DE' }),
            EN: page.getByRole('link', { name: 'EN' }),
            ES: page.getByRole('link', { name: 'ES' }),
            FR: page.getByRole('link', { name: 'FR' }),
            NL: page.getByRole('link', { name: 'NL' }),
            TR: page.getByRole('link', { name: 'TR' })
        };

    }

    /* Language */
    async openDropdown() {
        await this.dropdownButton.click();
        await this.dropdownMenu.waitFor({ state: 'visible' });
    }

    async closeDropdown() {
        const isVisible = await this.dropdownMenu.isVisible();
        if (isVisible) {
            await this.dropdownButton.click();
        }
    }

    async unAuthNavBar() {
        
    }

}