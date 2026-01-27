import { type Locator, type Page } from "@playwright/test";

export class Sort {
    readonly sortLocator: Locator;
    readonly sortSelector: string;

    constructor(page:Page) {
        this.sortLocator = page.locator('[aria-label="sort"]');
        this.sortSelector = '[data-test="sort"]'
    }

    
}