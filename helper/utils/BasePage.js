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

    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }
}