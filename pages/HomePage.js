import BasePage from '../helper/utils/BasePage';

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }
    selectors = {
        productLink: (productName) => `//a[contains(text(),'${productName}')]`,
    };

    buttons = {

    };

    errorMap = {

    };

    async goToProduct(productName) {
        await this.page.click(this.selectors.productLink(productName));
    }
}

export default HomePage;