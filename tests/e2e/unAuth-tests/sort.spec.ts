import { test, expect } from '../../../fixtures/pages.fixtures';

test.describe('Index Page Sort', () => {

  test.beforeEach(async ({ indexPage }) => {
    await indexPage.goto();
    await indexPage.waitForSelector(indexPage.sort.sortSelector);
  });

  test('should sort products by name A-Z', async ({ indexPage }) => {
    await indexPage.sort.sortLocator.selectOption('Name (A - Z)');
    await expect(indexPage.sort.sortLocator).toHaveValue('name,asc');
  });

  test('should sort products by name Z-A', async ({ indexPage }) => {
    await indexPage.sort.sortLocator.selectOption('Name (Z - A)');
    await expect(indexPage.sort.sortLocator).toHaveValue('name,desc');
  });


  test('should sort products by Price (High - Low)', async ({ indexPage }) => {
    await indexPage.sort.sortLocator.selectOption('Price (High - Low)');

    await expect(indexPage.sort.sortLocator).toHaveValue('price,desc');
  });


  test('should sort products by Price (Low - High)', async ({ indexPage }) => {
    await indexPage.sort.sortLocator.selectOption('Price (Low - High)');
    await expect(indexPage.sort.sortLocator).toHaveValue('price,asc');
  });

  test('should sort products by CO₂ Rating (A - E)', async ({ indexPage }) => {
    await indexPage.sort.sortLocator.selectOption('CO₂ Rating (A - E)');
    await expect(indexPage.sort.sortLocator).toHaveValue('co2_rating,asc');
  });

  test('should sort products by CO₂ Rating (E - A)', async ({ indexPage }) => {
    await indexPage.sort.sortLocator.selectOption('CO₂ Rating (E - A)');

    await expect(indexPage.sort.sortLocator).toHaveValue('co2_rating,desc');
  });

});

