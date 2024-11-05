// k6-config.js - Configuration file for K6

// Global options for the test run
export let options = {
    vus: 10,  // Number of virtual users
    duration: '30s',  // Test duration
    thresholds: {
        http_req_duration: ['p(95)<2000'],  // 95% of requests should complete within 2 seconds
    },
};

// Optional: setup and teardown functions
export function setup() {

    console.log('Setting up before test...');
}

export function teardown() {

    console.log('Cleaning up after test...');
}

