import { test, expect } from '@playwright/test';
import { Sort } from '../../../components/filters/Sort';

test.describe('Product Sort Functionality', () => {

  let sortComponent;

  test.beforeAll(async ({ page }) => {
    sortComponent = new Sort(page);
  })


  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector(sortComponent.sortSelector);
  });

  test('should sort products by name A-Z', async ({ page }) => {
    await sortComponent.sortLocator.selectOption('Name (A - Z)');

    await page.waitForTimeout(500);
    await expect(sortComponent.sortLocator).toHaveValue('name,asc');
  });

  test('should sort products by name Z-A', async ({ page }) => {
    await sortComponent.sortLocator.selectOption('Name (Z - A)');

    await page.waitForTimeout(500);
    await expect(sortComponent.sortLocator).toHaveValue('name,desc');
  });


  test('should sort products by Price (High - Low)', async ({ page }) => {
    await sortComponent.sortLocator.selectOption('Price (High - Low)');

    await page.waitForTimeout(500);
    await expect(sortComponent.sortLocator).toHaveValue('price,desc');
  });


  test('should sort products by Price (Low - High)', async ({ page }) => {
    await sortComponent.sortLocator.selectOption('Price (Low - High)');

    await page.waitForTimeout(500);
    await expect(sortComponent.sortLocator).toHaveValue('price,asc');
  });

  test('should sort products by CO₂ Rating (A - E)', async ({ page }) => {
    await sortComponent.sortLocator.selectOption('CO₂ Rating (A - E)');

    await page.waitForTimeout(500);
    await expect(sortComponent.sortLocator).toHaveValue('co2_rating,asc');
  });

  test('should sort products by CO₂ Rating (E - A)', async ({ page }) => {
    await sortComponent.sortLocator.selectOption('CO₂ Rating (E - A)');

    await page.waitForTimeout(500);
    await expect(sortComponent.sortLocator).toHaveValue('co2_rating,desc');
  });

});

