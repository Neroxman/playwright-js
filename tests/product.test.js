import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test.describe('Product page tests', () => {
    test.beforeAll(async ({ browser }) => {
      // Kod uruchamiany przed wszystkimi testami
      // Na przykład: otwarcie przeglądarki, setup testowego środowiska itp.
      console.log('Setup before all tests');
    });
  
    test.beforeEach(async ({ page }) => {
      // Kod uruchamiany przed każdym testem
      // Na przykład: nawigacja do strony głównej
      await page.goto('https://demoblaze.com');
    });

    test('product page opens correctly', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goToProduct('Samsung galaxy s6');
        // Dodaj więcej asercji sprawdzających szczegóły produktu
    });
});
