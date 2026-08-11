import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'some-file.txt' }).click();
  const download = await downloadPromise;
  const filename = download.suggestedFilename();
  await download.saveAs(`tests/downloads/${filename}`);
});