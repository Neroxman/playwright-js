import config from '../../config';

const fs = require('fs').promises;
const path = require('path');

class ApiTestBase {
    constructor(page) {
        this.page = page;
    }

    async getGuestUserCookie() {
        await this.page.goto(config.baseUrl);

        await this.page.waitForFunction(
            () => document.cookie.includes('user='),
            { timeout: 5000 }
        );

        const cookies = await this.page.context().cookies(); 
        const userCookie = cookies.find(cookie => cookie.name === 'user')?.value;

        const cookiePath = path.join(__dirname, '..', '..', 'test-data', 'userCookie.json');
        await fs.writeFile(cookiePath, JSON.stringify({ userCookie: userCookie  }), 'utf8');

        return userCookie;
    }
}

export default ApiTestBase;