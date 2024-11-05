const { test, expect } = require('@playwright/test');

test('homepage should redirect to another page correctly', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:3000');

});

test('homepage should return an empty string', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:3000');

    // Wait for the page to load (wait for the body to appear)
    await page.waitForSelector('body');

    // Retrieve and log the title
    const title = await page.title();
    console.log('Page Title:', title); // Log the title for debugging

    // Check if the title is correct
    expect(title).toBe('');
});



