//server.js file

const express = require('express');
const app = express();

// Route for the home page
app.get('/', (req, res) => {
    res.send('Your App Title');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


