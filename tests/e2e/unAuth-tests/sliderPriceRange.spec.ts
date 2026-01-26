import { test, expect } from '../../../fixtures/pages.fixtures';
import { SliderPriceRange } from '../../../components/filters/SliderPriceRange'


test.describe('slider filter', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })


    test('validate default pointer values', async ({ page }) => {
        const sliderPriceRange = new SliderPriceRange(page);

        await expect(sliderPriceRange.minTextvalue).toHaveText('1');
        await expect(sliderPriceRange.maxTextValue).toHaveText('100');
        await expect(sliderPriceRange.limitTextValue).toHaveText('200');

        await expect(sliderPriceRange.minSliderPointer).toHaveAttribute('aria-valuetext', '1');
        await expect(sliderPriceRange.maxSliderPointer).toHaveAttribute('aria-valuetext', '100');

    });

});