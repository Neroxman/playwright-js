import BasePage from '../helper/utils/BasePage';

class ContactPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }
    
    selectors = {
        
    };

    buttons = {
        contactButton: '[data-target="#exampleModal"]',
        sendMessageButton: 'button:has-text("Send message")',
        closeButton: '.btn-secondary',
        closeIcon: '.close'
    };

    formFieldsMap = {
        emailInput: '[id="recipient-email"]',
        nameInput: '[id="recipient-name"]',
        messageInput: '[id="message-text"]'
    };

    async goToContactModal() {
        await this.page.click(this.buttons.contactButton);
    }

    async fillContactForm({ email, username, description }) {
        await this.fillAndBlur(this.formFieldsMap.emailInput, email);
        await this.fillAndBlur(this.formFieldsMap.nameInput, username);
        await this.fillAndBlur(this.formFieldsMap.messageInput, description);
    }
}

export default ContactPage;