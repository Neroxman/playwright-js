import BasePage from '../helper/utils/BasePage';

class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }
    
    selectors = {
        productName: '.name',
        productDescription: '#more-information p'
    };

    buttons = {

    };

    errorMap = {

    };

    async getProductName() {
        return this.getElementText(this.selectors.productName);
    }

    async getProductDescription() {
        return this.getElementText(this.selectors.productDescription);
    }
}

export default ProductPage;