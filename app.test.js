const { test } = require("node:test");
const assert = require("node:assert/strict");
const createServer = require("./app");

test("application responds with HTTP 200 and expected page content", async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));

  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}`);
    const body = await response.text();

    assert.equal(response.status, 200);
    assert.match(body, /Welcome to My DevOps CI\/CD Project!/);
  } finally {
    await new Promise((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve()))
    );
  }
});
