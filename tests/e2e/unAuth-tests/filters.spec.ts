import { test, expect } from '../../../fixtures/pages.fixtures';
import { Filters } from '../../../components/filters/filters'

test.describe('filters Hand Tools', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test("filter Hand Tools checkbox", async ({ page }) => {
        const filterCategoryComponent = new Filters(page);

        await filterCategoryComponent.categoryHandToolsCheckbox.check();
        await expect(filterCategoryComponent.categoryHandToolsCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryHammerCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryHandSawCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryWrenchCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryScrewdriverCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryPliersCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryChiselsCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryMeasuresCheckbox).toBeChecked();
    });

    test("filter Power Tools checkbox", async ({ page }) => {

        const filterCategoryComponent = new Filters(page);

        await filterCategoryComponent.categoryPowerToolsCheckbox.check();
        await expect(filterCategoryComponent.categoryPowerToolsCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryGrinderCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categorySanderCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categorySawCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryDrillCheckbox).toBeChecked();
    });

    test("filter Other checkbox", async ({ page }) => {

        const filterCategoryComponent = new Filters(page);

        await filterCategoryComponent.categoryOtherCheckbox.check();
        await expect(filterCategoryComponent.categoryOtherCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryToolBeltsCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryStorageSolutionsCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categoryWorkbenchCheckbox).toBeChecked();
        await expect(filterCategoryComponent.categorySafetyGearCheckbox).toBeChecked();
    });


});

