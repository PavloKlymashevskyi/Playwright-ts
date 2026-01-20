import { type Locator, type Page } from "@playwright/test";

export class Search {
    private readonly searchInput: Locator;
    private readonly searchReset: Locator;
    private readonly searchButton: Locator;

    readonly productSearchCompleted: string;
    readonly cardTitleList: Locator;
    readonly searchText: Locator;
    readonly cardTitle: Locator;

    readonly noResult: Locator;

    constructor(page) {
        this.searchInput = page.getByPlaceholder("Search");
        this.searchReset = page.locator['[type="reset"]'];
        this.searchButton = page.locator('[data-test="search-submit"]');

        this.productSearchCompleted = '[data-test="search_completed"]';
        this.cardTitleList = page.locator('.card-title');
        this.searchText = page.locator('[data-test="search-caption"]');

        this.cardTitle = page.locator('[data-test="product-name"]');
        this.noResult = page.locator('[data-test="no-results"]');
    }

    async searchProduct(text: string) {
        await this.searchInput.fill(text);
        await this.searchButton.click();
    }

    async getCardTitles(page): Promise<string[]> {
        await page.waitForSelector(this.productSearchCompleted);
        const titles = await this.cardTitle.allTextContents();
        return titles.map(title => title.trim());

    }

}