// similar to: import from 'express';
const express = require('express');

const server = express();

const PORT = 5000;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} ** \n`)
);

// to run the server use: node index.js