import { test, expect } from '@playwright/test';

test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Already Logged In', async ({ page }) => {

    await page.goto('https://fashionstylebymaheen.site.je/admin.php');

    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();


});






