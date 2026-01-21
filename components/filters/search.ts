import { type Locator} from "@playwright/test";

export class Search {
    readonly searchInput: Locator;
    readonly searchReset: Locator;
    readonly searchButton: Locator;

    readonly productSearchCompleted: string;
    readonly cardTitleList: Locator;
    readonly searchText: Locator;
    readonly cardTitle: Locator;

    readonly noResult: Locator;
    readonly productGrid: Locator;

    constructor(page) {
        this.searchInput = page.locator('[data-test="search-query"]');
        this.searchReset = page.locator('[data-test="search-reset"]');
        this.searchButton = page.locator('[data-test="search-submit"]');

        this.productSearchCompleted = '[data-test="search_completed"]';
        this.cardTitleList = page.locator('.card-title');
        this.searchText = page.locator('[data-test="search-caption"]');

        this.cardTitle = page.locator('[data-test="product-name"]');
        this.noResult = page.locator('[data-test="no-results"]');

        this.productGrid = page.locator('.col-md-9');
    }

    async searchProduct(text: string) {
        await this.searchInput.fill(text);
        await this.searchButton.click();
    }

    async getFilterCardTitles(page): Promise<string[]> {
        await page.waitForSelector(this.productSearchCompleted);
        const titles = await this.cardTitle.allTextContents();
        return titles.map(title => title.trim());
    }

    async getProductList(): Promise<string[]> {
        await this.productGrid.waitFor({ state: 'visible' });
        const titles = await this.cardTitle.allTextContents();
        return titles.map(title => title.trim());
    }

}