import BasePage from '../helper/utils/BasePage';
class ContactPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.HEADER_TITLE = 'New message'
    }

    buttons = {
        contactButton: '[data-target="#exampleModal"]',
        sendMessageButton: 'button:has-text("Send message")',
        closeButton: '.modal-content button.btn.btn-secondary[data-dismiss="modal"]:has-text("Close")',
    };

    formFieldsMap = {
        emailInput: '[id="recipient-email"]',
        nameInput: '[id="recipient-name"]',
        messageInput: '[id="message-text"]'
    };

    async goToContactModal() {
        await this.clickOnButton(this.buttons.contactButton);
    }

    async fillContactForm({ email, username, description }) {
        await this.fillAndBlur(this.formFieldsMap.emailInput, email);
        await this.fillAndBlur(this.formFieldsMap.nameInput, username);
        await this.fillAndBlur(this.formFieldsMap.messageInput, description);
    }

    async isHeaderTitleInvisible() {
        return !(await this.page.isVisible(`text="${this.HEADER_TITLE}"`));
    }
}

export default ContactPage;