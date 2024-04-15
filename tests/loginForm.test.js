import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import BasePage from '../helper/utils/BasePage';
import config from '../config';
import alerts from '../test-data/alerts.json';
import loginFakeData from '../test-data/loginFakeData.json';

test.describe('Login form tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        const basePage = new BasePage(page);
        await basePage.goTo(config.baseUrl);
        loginPage = new LoginPage(page);
        await loginPage.goToLoginForm();
    });

    test('click on submit button with empty username and password', async ({ page }) => {
        await loginPage.clickOnButton(loginPage.buttons.submitButton);

        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe(alerts.EMPTY_LOGIN_FORM);
        });
    });

    test('fill all inputs and sucsesfully send a message', async ({ page }) => {
        await loginPage.fillLoginForm({
            username: loginFakeData.USERNAME,
            password: loginFakeData.PASSWORD
        });

        await loginPage.clickOnButton(loginPage.buttons.submitButton);

        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe(alerts.WRONG_PASSWORD);
        });
    });

    test('successfully log in to the app', async ({ page }) => {
        await loginPage.fillLoginForm({
            username: process.env.USER,
            password: process.env.PASSWORD
        });

        await loginPage.clickOnButton(loginPage.buttons.submitButton);
        await page.waitForSelector(loginPage.buttons.welcomeButton);
        
        expect(await loginPage.getWelcomeText()).toBe(`Welcome ${process.env.USER}`);
    });
});
