class ProductPage {
    constructor(page) {
        this.page = page;
    }
    selectors = {
        productName: '.name',
        productDescription: '#more-information p'
    };

    validationSelectors = {

    };

    buttons = {

    };

    errorMap = {

    };

    async getProductName() {
        return this.page.locator(this.selectors.productName).textContent();
    }

    async getProductDescription() {
        return this.page.locator(this.selectors.productDescription).textContent();
    }
}

export default ProductPage;