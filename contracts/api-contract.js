// contracts/api-contract.js

// Example contract for the /users endpoint
export const contract = {
    usersEndpoint: {
        // Expecting an array of users with specific properties
        type: 'array',
        items: {
            type: 'object',
            properties: {
                id: { type: 'number' },
                name: { type: 'string' },
                username: { type: 'string' },
                email: { type: 'string' },
            },
            required: ['id', 'name', 'username', 'email'],
        },
    },
};

// Function to validate the API response against the contract
export function validateResponse(contract, endpoint, responseBody) {
    // Use the 'type' and 'properties' from the contract to validate the response
    const schema = contract[endpoint];
    if (schema.type === 'array') {
        // If it's an array, we check that each item matches the schema
        responseBody.forEach((item) => {
            Object.keys(schema.items.properties).forEach((key) => {
                if (!item[key] || typeof item[key] !== schema.items.properties[key].type) {
                    throw new Error(`Invalid response: expected ${key} to be of type ${schema.items.properties[key].type}`);
                }
            });
        });
    } else {
        // Handle other response types if needed (e.g., object, string)
        throw new Error('Invalid response schema');
    }
}
