import { test, expect } from '@playwright/test';
import LoginApi from '../../api/LoginApi';
import LoginPage from '../../pages/LoginPage';
import CartApi from '../../api/CartApi';
import PlaceOrderPage from 'pages/PlaceOrderPage';
import productId from '../../test-data/product_id';
import BasePage from '../../helper/utils/BasePage';
import config from '../../config';

test.describe('Login form tests', () => {
    let loginApi;
    let loginPage;
    let cartApi;
    let placeOrderPage;

    test.beforeEach('Setup and add the product via API', async ({ page }) => {
        loginApi = new LoginApi(page);
        loginPage = new LoginPage(page);
        cartApi = new CartApi(page);
        placeOrderPage = new PlaceOrderPage(page)
        await loginApi.login();
        await cartApi.addProductToCartUsingApi(productId.SAMSUNG_GALAXY_S6)
        const basePage = new BasePage(page);
        await basePage.goTo(config.baseUrl);
        await loginPage.successfullyLogIn({
            username: process.env.ADMIN_USERNAME,
            password: process.env.ADMIN_PASSWORD
        });
        await placeOrderPage.goToPlaceOrderForm();
    });

    test('succesfully place the order', async ({ page }) => {


    });

});
