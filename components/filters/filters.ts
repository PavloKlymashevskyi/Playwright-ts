import { type Locator } from "@playwright/test";

export class Filters {
    // By category:
    readonly categoryHandToolsCheckbox: Locator;
    readonly categoryHammerCheckbox: Locator;
    readonly categoryHandSawCheckbox: Locator;
    readonly categoryWrenchCheckbox: Locator;
    readonly categoryScrewdriverCheckbox: Locator;
    readonly categoryPliersCheckbox: Locator;
    readonly categoryChiselsCheckbox: Locator;
    readonly categoryMeasuresCheckbox: Locator;

    readonly categoryPowerToolsCheckbox: Locator;
    readonly categoryGrinderCheckbox: Locator;
    readonly categorySanderCheckbox: Locator;
    readonly categorySawCheckbox: Locator;
    readonly categoryDrillCheckbox: Locator;

    readonly categoryOtherCheckbox: Locator;
    readonly categoryToolBeltsCheckbox: Locator;
    readonly categoryStorageSolutionsCheckbox: Locator;
    readonly categoryWorkbenchCheckbox: Locator;
    readonly categorySafetyGearCheckbox: Locator;
    readonly categoryFastenersCheckbox: Locator;

    // By brand:
    readonly brandForgeFlexToolsCheckbox: Locator;
    readonly brandMightyCraftHardwareCheckbox: Locator;
    readonly brandHarrietCheckbox: Locator;
    readonly brandHarlandCheckbox: Locator;
    readonly brandKirkCheckbox: Locator;

    // Sustainability:
    readonly sustainabilityShowOnlyEcoFriendlyProducts: Locator;


    constructor(page) {
        this.categoryHandToolsCheckbox = page.getByRole('checkbox', { name: 'Hand Tools' });
        this.categoryHammerCheckbox = page.getByRole('checkbox', { name: 'Hammer' });
        this.categoryHandSawCheckbox = page.getByText('Hand Saw', { exact: true });
        this.categoryWrenchCheckbox = page.getByRole('checkbox', { name: 'Wrench' });
        this.categoryScrewdriverCheckbox = page.getByRole('checkbox', { name: 'Screwdriver' });
        this.categoryPliersCheckbox = page.getByRole('checkbox', { name: 'Pliers' });
        this.categoryChiselsCheckbox = page.getByRole('checkbox', { name: 'Chisels' });
        this.categoryMeasuresCheckbox = page.getByRole('checkbox', { name: 'Measures' });

        this.categoryPowerToolsCheckbox = page.getByRole('checkbox', { name: 'Power Tools' });
        this.categoryGrinderCheckbox = page.getByRole('checkbox', { name: 'Grinder' });
        this.categorySanderCheckbox = page.getByRole('checkbox', { name: 'Sander' });
        this.categorySawCheckbox = page.getByText('Saw', { exact: true });
        this.categoryDrillCheckbox = page.getByRole('checkbox', { name: 'Drill' });

        this.categoryOtherCheckbox = page.getByRole('checkbox', { name: 'Other' });
        this.categoryToolBeltsCheckbox = page.getByRole('checkbox', { name: 'Tool Belts' });
        this.categoryStorageSolutionsCheckbox = page.getByRole('checkbox', { name: 'Storage Solutions' });
        this.categoryWorkbenchCheckbox = page.getByRole('checkbox', { name: 'Workbench' });
        this.categorySafetyGearCheckbox = page.getByRole('checkbox', { name: 'Safety Gear' });

        this.brandForgeFlexToolsCheckbox = page.getByRole('checkbox', { name: 'ForgeFlex Tools' });
        this.brandMightyCraftHardwareCheckbox = page.getByRole('checkbox', { name: 'MightyCraft Hardware' });
        this.brandHarrietCheckbox = page.getByRole('checkbox', { name: 'Harriet' });
        this.brandHarlandCheckbox = page.getByRole('checkbox', { name: 'Harland' });
        this.brandKirkCheckbox = page.getByRole('checkbox', { name: 'Kirk' });

        this.sustainabilityShowOnlyEcoFriendlyProducts = page.getByRole('checkbox', {name: 'Show only eco-friendly products'});
    }
}
