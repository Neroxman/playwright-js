import EndpointsMap from '../helper/EnpointsMap';
import ApiTestBase from '../helper/utils/ApiTestBase';
import cleanText from 'helper/utils/cleanText';
const fs = require('fs').promises;
const path = require('path');

class LoginApi extends ApiTestBase {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async login() {
        const response = await fetch('https://api.demoblaze.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: "YWRtaW4=",
                username: "admin"
            })
        });

        const data = await response.json();
        const tokenString = data.split(":")[1]?.trim(); 
        
        if (!tokenString) {
            throw new Error("Auth_token not found in response");
        }

        await this.saveAuthToken(tokenString);
        return response;
    }
}

export default LoginApi;