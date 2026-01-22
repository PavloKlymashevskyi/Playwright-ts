import { type Locator, Page } from "@playwright/test";

export class MainContainer {
    
    readonly mainBlock: Locator;
    readonly container: Locator;
    readonly cardImageWrapper: Locator;
    readonly ecoBadge: Locator;
    readonly cardBody: Locator;
    readonly cardTitle: Locator;
    readonly co2Raiting: Locator;
    readonly co2LetterActive: Locator;
    readonly outOfStock: Locator;
    readonly productPrice: Locator;

    readonly searchedFor: Locator;
    readonly searchedTerm: Locator;
    readonly noResultText: Locator;

    readonly searchCompleted: Locator;


    constructor(page: Page) {
        this.mainBlock = page.locator(".col-md-9");
        this.container = page.locator(".col-md-9 .container");
        
        // image
        this.cardImageWrapper = page.locator(".card-img-wrapper .card-img-top");
        this.ecoBadge = page.locator('.card-img-wrapper [data-test="eco-badge"]');

        // body
        this.cardBody = page.locator(".card-body");
        this.cardTitle = page.locator("h5.card-title");
        this.co2Raiting = page.locator('[data-test="co2-rating-badge"]');
        this.co2LetterActive = page.locator("span.co2-letter.active");
        //footer
        this.outOfStock = page.locator('[data-test="out-of-stock"]');
        this.productPrice = page.locator('[data-test="product-price"]');

        //no find filter
        this.searchedFor = page.locator('[data-test="search-caption"]');
        this.searchedTerm = page.locator('[data-test="search-term"]');
        this.noResultText = page.locator('[data-test="no-results"]'); // There are no products found.

        // find filter
        this.searchCompleted = page.locator('[data-test="search_completed"]');
    }

}