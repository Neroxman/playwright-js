import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import BasePage from '../helper/utils/BasePage';
import config from '../config';
import { fakeContactData } from '../helper/fakeData/fakeContactData';
import alerts from '../test-data/alerts.json';

test.describe('Product page tests', () => {
    let homePage;
    let contactPage;

    test.beforeEach(async ({ page }) => {
        const basePage = new BasePage(page);
        await basePage.goTo(config.baseUrl);
        homePage = new HomePage(page);
        contactPage = new ContactPage(page);
        await contactPage.goToContactModal();
    });

    test('fill all inputs and sucsesfully send a message', async ({ page }) => {
        await contactPage.fillContactForm({
            email: fakeContactData.email,
            username: fakeContactData.username,
            description: fakeContactData.description
        });

        await contactPage.clickOnButton(contactPage.buttons.sendMessageButton);

        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe(alerts.CONTACT_SEND_MESSAGE_SUCCESS);
        });
    });

    test('close modal using close button', async () => {
        await contactPage.clickOnFirstElement(contactPage.buttons.closeButton);

        expect(contactPage.isHeaderTitleInvisible()).toBeTruthy();
    });
});
