// 5-http.js

const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (pathname === '/students') {
        const databasePath = process.argv[2];

        countStudents(databasePath)
            .then((data) => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('This is the list of our students\n');
                res.end(data);
            })
            .catch((error) => {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Cannot load the database');
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
