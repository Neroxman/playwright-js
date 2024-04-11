import BasePage from '../helper/utils/BasePage';
import CartPage from './CartPage';

class PlaceOrderPage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
        this.cartPage = new CartPage(page)
    }
    
    buttons = {
        placeOrderButton: '[data-target="#orderModal"]'
    };

    formFieldsMap = {

    };

    async goToPlaceOrderForm() {
        await this.cartPage.goToCartPage();
        await this.clickOnButton(this.buttons.placeOrderButton);
    }
}

export default PlaceOrderPage;