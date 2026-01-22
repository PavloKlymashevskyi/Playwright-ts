import { test, expect } from '../../../fixtures/pages.fixtures';
import { Search } from '../../../components/filters/Search'

test.describe('search', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })


    test('search valid product name', async ({ page }) => {
        const expectedText = "Pliers";

        const searchComponent = new Search(page);
        await searchComponent.searchProduct(expectedText);

        const actualText = await searchComponent.searchText.innerText();
        expect(actualText).toContain(expectedText);

        const filteredTitles = await searchComponent.getFilterCardTitles(page);
        for (const title of filteredTitles) {
            expect(title.toLowerCase()).toContain(expectedText.toLowerCase());
        }
    });


    test('search no products found', async ({ page }) => {
        const expectedText = "Test111";

        const searchComponent = new Search(page);
        await searchComponent.searchProduct(expectedText);

        await page.waitForSelector('[data-test="no-results"]');
        const actualText = await searchComponent.searchText.innerText();
        expect(actualText).toContain(expectedText);

        expect(searchComponent.noResult).toHaveText("There are no products found.");
    });

    test('search and reset functionality', async ({ page }) => {
        const searchComponent = new Search(page);

        await expect(searchComponent.productGrid.getByRole('link')).toHaveCount(9);
        const initialTitles = await searchComponent.getProductList();

        await searchComponent.searchInput.fill("Pliers");
        await searchComponent.searchButton.click();

        await page.waitForSelector(searchComponent.productSearchCompleted);

        const filteredTitles = await searchComponent.getFilterCardTitles(page);
        for (const title of filteredTitles) {
            expect(title.toLowerCase()).toContain("pliers");
        }

        await searchComponent.searchReset.click();
        
        await expect(searchComponent.productGrid.getByRole('link')).toHaveCount(9);
        const resetTitles = await searchComponent.getProductList();
        expect(resetTitles).toEqual(initialTitles);
    });

});