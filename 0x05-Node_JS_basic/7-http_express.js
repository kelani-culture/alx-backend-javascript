// 7-http_express.js

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const databasePath = process.argv[2];

    countStudents(databasePath)
        .then((data) => {
            res.set('Content-Type', 'text/plain');
            res.send(`This is the list of our students\n${data}`);
        })
        .catch((error) => {
            res.set('Content-Type', 'text/plain');
            res.status(500).send('Cannot load the database');
        });
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
