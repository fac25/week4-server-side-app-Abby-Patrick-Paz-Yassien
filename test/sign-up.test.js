const { describe, it } = require("node:test")
const assert = require("node:assert")
const { request } = require("./helpers")

describe("server", () => {
  it("returns signup template in GET /sign-up", async () => {
    const { status, body } = await request("/sign-up")
    assert.equal(status, 200)
    assert.match(body, /<h1>Create your account<\/h1>/)
  })
})