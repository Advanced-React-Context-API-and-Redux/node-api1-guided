// similar to: import from 'express';
// import isn't supported in node out of the box in every version, require is however, supported right out of the box
// require existed before import existed
const express = require('express');

const server = express();

// server.get('/', (req, res) => {
//     res.status(200).json({api: 'running...'})
// })

// write / hello endpoint that returns an object like: { hello: "WEB 27" }
server.get('/', (req, res) => {
    res.status(200).json({ hello: 'WEB 27'})
})


const PORT = 5000;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} ** \n`)
);

// to run the server use: node index.js