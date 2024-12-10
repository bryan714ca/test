const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status for OK
    res.setHeader('Content-Type', 'text/plain'); // Content type
    res.end('Hello, World!\n'); // Response text
});

// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});