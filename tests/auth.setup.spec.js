import { test,expect } from '@playwright/test';

test('Login and save storage state', async ({ page }) => {

  await page.goto('https://fashionstylebymaheen.site.je/login.php?i=1');

  await page.locator('input[name="username"]').fill('admin');
  await page.locator('input[name="password"]').fill('Fashion@123');

  await page.getByRole('button', { name: 'Login' }).click();


  await expect(page).toHaveURL('https://fashionstylebymaheen.site.je/admin.php');

  
  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });

});