const { exec } = require('child_process');
const {all} = require("express/lib/application");

function runPlaywrightTests() {
    return new Promise((resolve, reject) => {
        console.log('Running Playwright tests...');
        exec('node tests/playwright-test.js', (err, stdout, stderr) => {
            if (err) {
                reject(`Playwright tests failed: ${err}`);
                return;
            }
            console.log(stdout);
            console.error(stderr);
            resolve();
        });
    });
}

function runK6Tests() {
    return new Promise((resolve, reject) => {
        console.log('Running K6 tests...');
        exec('k6 run tests/consumer-contract-test.js', (err, stdout, stderr) => {
            if (err) {
                reject(`K6 tests failed: ${err}`);
                return;
            }
            console.log(stdout);
            console.error(stderr);
            resolve();
        });
    });
}

async function runTests() {
    try {
        await all([runPlaywrightTests(), runK6Tests()]);
        console.log('Both Playwright and K6 tests completed successfully!');
    } catch (error) {
        console.error(error);
    }
}

runTests();
