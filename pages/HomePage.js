class HomePage {
    constructor(page) {
        this.page = page;
        this.productLink = (productName) => `//a[contains(text(),'${productName}')]`;
    }

    async goToProduct(productName) {
        await this.page.click(this.productLink(productName));
    }
}

export default HomePage;