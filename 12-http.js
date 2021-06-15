const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('this is my home page');
  }
  if (req.url === '/about') {
    res.end('this is short page');
  }
  res.end(`
  <h1>!oops</h1>
  <p>we got an error here</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
