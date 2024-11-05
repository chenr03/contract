const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.route('**/users', (route) => {
        route.fulfill({
            status: 200,
            body: JSON.stringify([
                { id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Doe' },
                { id: 3, name: 'Jane Smith' },
                { id: 4, name: 'John Doe' },
            ]),
            contentType: 'application/json',
        });
    });

    await page.goto('http://localhost:3000');
    await browser.close();
})();
