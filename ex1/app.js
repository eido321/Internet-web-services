const http = require('http');
const { router } = require('./routers/router');
const Logger = require('./middleware/Logger');

const server = http.createServer((req, res) => {
    if (req.method === "POST" || req.method === "PUT") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            try {
                req.body = JSON.parse(body);
                router(req, res);
            } catch (error) {
                console.error('Error parsing JSON:', error.message);
                res.statusCode = 400;
                res.end('Invalid JSON');
            }
        });
    } else {
        router(req, res);
    }
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
