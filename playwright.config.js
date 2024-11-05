//tests/playwright/playwright.config.js
module.exports = {
    testDir: './tests/playwright',
    timeout: 30000,
    retries: 1,
    use: {
        headless: true,
        browserName: 'chromium',
        trace: 'on', // Enabling tracing for all tests
        traceDir: './trace-files', // saves traces to this directory
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },  // Use Chromium browser
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },  // Use Firefox browser
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },  // Use WebKit browser
        },
    ],
    workers: 4,  // Run tests in parallel with 4 workers for faster execution
    reporter: [
        ['html', { outputFolder: 'playwright-report', open: 'always' }],  // HTML reporter configuration
    ],
};
