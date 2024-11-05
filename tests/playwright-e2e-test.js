const { test, expect } = require('@playwright/test');

test('API should load users and display correct names', async ({ page }) => {
    await page.route('**/users', (route) => {
        route.fulfill({
            status: 200,
            body: JSON.stringify([
                { id: 1, name: 'John Smith' },
                { id: 2, name: 'Jane Doe' },
                { id: 3, name: 'Jane Smith' },
                { id: 4, name: 'John Doe' },
            ]),
            contentType: 'application/json',
        });
    });

    await page.goto('http://localhost:3000');  // Your app URL
    const userNames = await page.locator('.user-name').allTextContents();
    expect(userNames).toContain('John Smith');
    expect(userNames).toContain('Jane Doe');
    expect(userNames).toContain('Jane Smith');
    expect(userNames).toContain('John Doe');
});
