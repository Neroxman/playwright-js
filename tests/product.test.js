import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test('product page opens correctly', async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto('https://demoblaze.com');
    await homePage.goToProduct('Samsung galaxy s6');
    // Dodaj więcej asercji sprawdzających szczegóły produktu
});