import http from 'k6/http';
import { check } from 'k6';
import { contract, validateResponse } from '../../contracts/api-contract.js';  // Import contract

// The default function is required for K6 tests
export default function () {
    // Example of calling the API
    const res = http.get('https://jsonplaceholder.typicode.com/users');
    // Replace with your API endpoint

    // Check that the response status is 200
    check(res, {
        'is status 200': (r) => r.status === 200,
    });

    // Validate the API response against the contract
    try {
        const users = JSON.parse(res.body);
        validateResponse(contract, 'usersEndpoint', users);
        console.log('Response matches the contract!');
    } catch (err) {
        console.error(`Contract validation failed: ${err.message}`);
    }
}
