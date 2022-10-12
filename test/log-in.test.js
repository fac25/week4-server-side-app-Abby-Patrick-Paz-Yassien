const { describe, it } = require("node:test")
const assert = require("node:assert")
const { request } = require("./helpers")

describe("server", () => {
  it("returns login template in GET /log-in", async () => {
    const { status, body } = await request("/log-in")
    assert.equal(status, 200)
    assert.match(body, /<h1>Log In<\/h1>/)
  })
})