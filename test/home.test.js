const { describe, it } = require("node:test")
const assert = require("node:assert")
const { request } = require("./helpers")

describe("server", () => {
  it("returns home template in GET /", async () => {
    const { status, body } = await request("/")
    assert.equal(status, 200)
    assert.match(body, /<h1>Home<\/h1>/)
  })
})
