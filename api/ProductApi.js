import EndpointsMap from '../helper/EnpointsMap';
import ApiTestBase from '../helper/utils/ApiTestBase';
const fs = require('fs').promises;
const path = require('path');

class ProductApi extends ApiTestBase {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async addProductToCart(productId) {
        const cookiePath = path.join(__dirname, '..', 'test-data', 'userCookie.json');

        let cookieData;
        try {
            const rawCookieData = await fs.readFile(cookiePath, 'utf-8');
            cookieData = JSON.parse(rawCookieData);
        } catch (error) {
            throw new Error(`Error reading user cookie file: ${error.message}`);
        }
    
        const userCookie = cookieData.userCookie;
        if (!userCookie) {
            throw new Error("Cannot find user cookie");
        }

        const response = await this.page.evaluate(async ({ productId, userCookie }) => {
            try {
                const response = await fetch('https://api.demoblaze.com/addtocart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: productId,
                        cookie: `user=${userCookie}`,
                        prod_id: 1,
                        flag: false
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
        }, { productId, userCookie });

        return response;
    }
}

export default ProductApi;