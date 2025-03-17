const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Hello from Node.js running on ${os.hostname()}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
