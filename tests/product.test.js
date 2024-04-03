import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import productNames from '../test-data/product_name.json';
import productDescriptions from '../test-data/product_description.json';
import cleanText from '../helper/utils/cleanText';
import BasePage from '../helper/utils/BasePage';
import config from '../config';

test.describe('Product page tests', () => {
  let homePage;
  let productPage;

  test.beforeEach(async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.goTo(config.baseUrl);
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
  });

  Object.entries(productNames).forEach(([key, productName]) => {
    test(`page for ${key} opens correctly`, async () => {
      await homePage.goToProduct(productName);
      const actualProductName = await productPage.getProductName();
      expect(actualProductName).toBe(productName);
    });
  });

  Object.entries(productDescriptions).forEach(([key, productDescription]) => {
    test(`description for ${key} is visible`, async () => {
      const productName = productNames[key];

      if (!productName) {
        console.error(`ProductName for key: ${key} not found.`);
        return;
      }
      await homePage.goToProduct(productName);
      const actualProductDescription = await productPage.getProductDescription();
      const cleanedDescription = cleanText(actualProductDescription);
      expect(cleanedDescription).toBe(productDescription);
    });
  });

  test.afterAll(async ({ browser }) => {

  });
});
