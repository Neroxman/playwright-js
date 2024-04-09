import BasePage from '../helper/utils/BasePage';

class CartPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    buttons = {
        cartButton: '.nav-link:has-text("Cart")'
    };

    tableMap = {
        createdTable: '.success'
    }

    getDeleteButtonSelector(productId) {
        return `[onclick="deleteItem('${productId}')"]`;
    }

    async goToCartPage() {
        await this.clickOnButton(this.buttons.cartButton);
    }

    async isProductVisibleInCart(productName) {
        const tableLocator = this.page.locator(this.tableMap.createdTable);
        const productLocator = tableLocator.locator(`text=${productName}`)
        return await productLocator.isVisible();
    }

    async deleteProduct(productId) {
        const deleteButtonSelector = this.getDeleteButtonSelector(productId);
        return this.page.click(deleteButtonSelector);
    }
}

export default CartPage;