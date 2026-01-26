import { type Locator, type Page } from "@playwright/test";

export class SliderPriceRange {
    readonly minSliderPointer: Locator;
    readonly maxSliderPointer: Locator;
    readonly pageBetweenMinAndMax: Locator;

    readonly minTextvalue: Locator;
    readonly maxTextValue: Locator;
    readonly limitTextValue: Locator;
    



    constructor(page: Page) {
        this.minSliderPointer = page.locator('.ngx-slider-pointer-min');
        this.maxSliderPointer = page.locator('.ngx-slider-pointer-max');
        this.pageBetweenMinAndMax = page.locator('.ngx-slider-selection-bar');

        this.minTextvalue = page.locator('.ngx-slider-model-value');
        this.maxTextValue = page.locator('.ngx-slider-model-high');
        this.limitTextValue = page.locator('.ngx-slider-ceil');

    }

}