import { test, expect } from '../../../fixtures/pages.fixtures';

test.describe('filters Hand Tools', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.goto();
    })

    test("filter Hand Tools checkbox", async ({ homePage }) => {
        await homePage.filters.categoryHandToolsCheckbox.check();
        await expect(homePage.filters.categoryHandToolsCheckbox).toBeChecked();
        await expect(homePage.filters.categoryHammerCheckbox).toBeChecked();
        await expect(homePage.filters.categoryHandSawCheckbox).toBeChecked();
        await expect(homePage.filters.categoryWrenchCheckbox).toBeChecked();
        await expect(homePage.filters.categoryScrewdriverCheckbox).toBeChecked();
        await expect(homePage.filters.categoryPliersCheckbox).toBeChecked();
        await expect(homePage.filters.categoryChiselsCheckbox).toBeChecked();
        await expect(homePage.filters.categoryMeasuresCheckbox).toBeChecked();
    });

    test("filter Power Tools checkbox", async ({ homePage }) => {
        await homePage.filters.categoryPowerToolsCheckbox.check();
        await expect(homePage.filters.categoryPowerToolsCheckbox).toBeChecked();
        await expect(homePage.filters.categoryGrinderCheckbox).toBeChecked();
        await expect(homePage.filters.categorySanderCheckbox).toBeChecked();
        await expect(homePage.filters.categorySawCheckbox).toBeChecked();
        await expect(homePage.filters.categoryDrillCheckbox).toBeChecked();
    });

    test("filter Other checkbox", async ({ homePage }) => {
        await homePage.filters.categoryOtherCheckbox.check();
        await expect(homePage.filters.categoryOtherCheckbox).toBeChecked();
        await expect(homePage.filters.categoryToolBeltsCheckbox).toBeChecked();
        await expect(homePage.filters.categoryStorageSolutionsCheckbox).toBeChecked();
        await expect(homePage.filters.categoryWorkbenchCheckbox).toBeChecked();
        await expect(homePage.filters.categorySafetyGearCheckbox).toBeChecked();
    });


});
