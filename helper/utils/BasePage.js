const fs = require('fs').promises;
const path = require('path');

export default class BasePage {
    constructor(page) {
        this.page = page;
    }
    
    async goTo(url) {
        await this.page.goto(url);
    }

    async waitForElement(selector) {
        await this.page.waitForSelector(selector);
    }

    async getElementText(selector) {
        return this.page.locator(selector).textContent();
    }

    async isElementVisible(selector) {
        return this.page.locator(selector).isVisible();
    }

    async fillAndBlur(selector, text) {
        await this.page.locator(selector).fill(text);
        await this.page.locator(selector).blur();
    }

    async clickOnButton(selector) {
        await this.page.locator(selector).click();
    }

    async clickOnFirstElement(selector) {
        await this.page.locator(selector).first().click();
    }

    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }

    async loadUserCookies() {
        const cookiePath = path.join(__dirname, '..', '..', 'test-data', 'userCookie.json');
        const rawCookieData = await fs.readFile(cookiePath, 'utf-8');
        const { userCookie } = JSON.parse(rawCookieData);

        const cookies = [{
            name: 'user',
            value: userCookie,
            domain: 'demoblaze.com', 
            path: '/'
        }];

        await this.page.context().addCookies(cookies);
    }
}