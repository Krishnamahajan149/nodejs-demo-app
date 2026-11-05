const http = require("http");

function createServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Node.js CI/CD Demo</title>
        </head>
        <body>
          <h1>Welcome to My DevOps CI/CD Project!</h1>
          <h2>Node.js Application</h2>
          <p>Built and published using GitHub Actions and Docker.</p>
        </body>
      </html>
    `);
  });
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createServer().listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = createServer;
