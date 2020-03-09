// similar to: import from 'express';
// import isn't supported in node out of the box in every version, require is however, supported right out of the box
// require existed before import existed
const express = require('express');
const shortid = require('shortid');

const server = express();

let hubs = [];
let lessons = [];

server.use(express.json()); // <<<<<<<<<<<<<<<<<< include ths line so the server can real json 

server.get('/', (req, res) => {
    res.status(200).json({api: 'running...'})
})

// write / hello endpoint that returns an object like: { hello: "WEB 27" }
server.get('/hello', (req, res) => {
    res.status(200).json({ hello: 'WEB 27'})
})

server.get('/api/hubs', (req, res) => {
    res.status(200).json(hubs);
})

// create a .post endpoint (follow along)
server.post('/api/hubs', (req, res) => {
    const hubInfo = req.body;

    // validate the hubInfo is correct before saving
    hubInfo.id = shortid.generate();

    hubs.push(hubInfo);

    res.status(201).json(hubInfo);
})

server.get('/api/lessons', (req, res) => {
    res.status(200).json(lessons);
})

// create a .post to receive lessons from /api/lessons/
server.post('/api/lessons', (req, res) => {
    const lessonInfo = req.body;

    lessonInfo.id = shortid.generate();

    lessons.push(lessonInfo);

    res.status(201).json(lessonInfo);
})

const PORT = 5000;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} ** \n`)
);

// to run the server use: node index.js