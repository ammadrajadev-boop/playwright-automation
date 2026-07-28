import { test, expect } from '@playwright/test';

// test('my first test', async({page}) => {
//      await page.goto('https://playwright.dev/');
//      await expect(page).toHaveTitle(/reliable /);
// });

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await page.getByRole('link', { name: 'MCP' }).click();
  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: 'Python' }).click();
});