import { test, expect } from '@playwright/test';
import ProductApi from '../api/ProductApi';
import BasePage from '../helper/utils/BasePage';
import config from '../config';
import productId from '../test-data/product_id';
import product_name from '../test-data/product_name';
import CartPage from '../pages/CartPage';

test.describe('Product page tests', () => {
    let cartPage;

    test.beforeEach(async ({ page }) => {
        const productApi = new ProductApi(page);
        await productApi.getGuestUserCookie();
        await productApi.addProductToCart(productId.SAMSUNG_GALAXY_S6); 
        const basePage = new BasePage(page);
        await basePage.goTo(config.baseUrl);
        await basePage.loadUserCookies();
        cartPage = new CartPage(page);
        await cartPage.goToCartPage();
    });

    test('verify if the product is visible in the cart', async ({ page }) => {
        await page.waitForSelector(cartPage.tableMap.createdTable);
        const isVisible = await cartPage.isProductVisibleInCart(product_name.SAMSUNG_GALAXY_S6);
        expect(isVisible).toBeTruthy();
    });

    test('delete product from the cart', async ({ page }) => {
        await page.waitForSelector(cartPage.tableMap.createdTable);
        await cartPage.deleteProduct(productId.SAMSUNG_GALAXY_S6);
        await page.waitForTimeout(2000);
        const isVisible = await cartPage.isProductVisibleInCart(product_name.SAMSUNG_GALAXY_S6);
        expect(isVisible).toBeFalsy();
    });
});
