import { test, expect } from '@playwright/test';



    test('iframe test', async ({ page }) => {
        await page.goto('https://playground.qajourney.net/iframes/?utm_source=chatgpt.com');

        await page.locator('[data-testid="form-iframe"]').contentFrame().getByTestId('iframe-input').click();
        await page.locator('[data-testid="form-iframe"]').contentFrame().getByTestId('iframe-input').fill('ammad raja');
        await page.locator('[data-testid="form-iframe"]').contentFrame().getByTestId('iframe-submit').click();
        await expect(page.locator('[data-testid="form-iframe"]').contentFrame().getByTestId('iframe-result')).toBeVisible();

    });


