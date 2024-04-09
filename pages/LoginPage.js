import BasePage from '../helper/utils/BasePage';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }
    
    buttons = {
        loginButton: '[data-target="#logInModal"]',
        submitButton: '[onClick="logIn()"]',
        welcomeButton: '[id="nameofuser"]'
    };

    formFieldsMap = {
        usernameInput: '[id="loginusername"]',
        passwordInput: '[id="loginpassword"]',
    };

    async fillLoginForm({ username, password }) {
        await this.fillAndBlur(this.formFieldsMap.usernameInput, username);
        await this.fillAndBlur(this.formFieldsMap.passwordInput, password);
    }

    async goToLoginForm() {
        await this.clickOnButton(this.buttons.loginButton);
    }

    async getWelcomeText() {
        return this.getElementText(this.buttons.welcomeButton);
    }
}

export default LoginPage;