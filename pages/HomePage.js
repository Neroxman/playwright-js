class HomePage {
    constructor(page) {
        this.page = page;
    }
    selectors = {
        productLink: (productName) => `//a[contains(text(),'${productName}')]`,
    };

    validationSelectors = {

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