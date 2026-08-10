import {test , expect } from '@playwright/test';


test ('Upload Files', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/files/matric1122.pdf');
    await page.getByRole('button', { name: 'Upload' }).click();
    await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();
    
});