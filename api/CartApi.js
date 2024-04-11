import EndpointsMap from '../helper/EnpointsMap';
import ApiTestBase from '../helper/utils/ApiTestBase';
import LoginApi from '../api/LoginApi';
const fs = require('fs').promises;
const path = require('path');

class CartApi extends ApiTestBase {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async addProductToCartUsingApi(productId) {
        const authToken = await this.loadAuthToken()

        const response = await this.page.evaluate(async ({ productId, authToken }) => {
            try {
                const response = await fetch('https://api.demoblaze.com/addtocart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        cookie: `${authToken}`,
                        flag: true,
                        id: productId,
                        prod_id: 1
                    })
                });

                const responseText = await response.text();

                try {
                    return JSON.parse(responseText);
                } catch (error) {
                    console.error('Response is not valid JSON:', responseText);

                    return responseText;
                }
            } catch (error) {
                console.error('Error during fetch:', error);
                throw error;
            }
        }, { productId, authToken });

        return response;
    }
}

export default CartApi;