const http = require('http');

const hostname = process.env.hostname || '0.0.0.0' 
const port = process.env.PORT || 3010

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World-Hola Mundo');
});

server.listen(port, hostname, () => {
  console.log(`Server running on ${port}/`);
});