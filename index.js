// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // req is the request object and res is the response object
  
  // Set the response header to indicate content type (plain text)
  res.setHeader('Content-Type', 'text/plain');

  // Simple routing based on the URL path
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;  // OK status
    res.end('Welcome to the Home Page!');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('This is the About Page.');
  } else {
    // Handle 404 - Not Found
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});



// The server will listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
