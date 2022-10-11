const { describe, it } = require("node:test")
const assert = require("node:assert")
const { request } = require("./helpers")

describe("test group 1", () => {
  it("does what it says", () => {
    const { status, body } = request("/")
    assert.equal(status, 200)
    assert.match(body, /hello/i)
  })
})
