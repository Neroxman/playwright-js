export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goTo(url) {
        await this.page.goto(url);
    }
}