const { describe, it } = require("node:test");
const assert = require("node:assert");
const { request } = require("./helpers");
const { createUser, getUserByUsername } = require("../src/model/users");

describe("server", () => {
  it("returns signup template in GET /sign-up", async () => {
    const { status, body } = await request("/sign-up");
    assert.equal(status, 200);
    assert.match(body, /<h1>Create your account<\/h1>/);
  });

  it("creates a user on POST /sign-up", async () => {});
});

describe("database", () => {
  it("creates a user", () => {
    // Reset DB
    reset();

    // Create user
    const newUser = { username: "YassienXYZ", hash: "asdf" };
    createUser(newUser);

    // Retrieve User
    const { username } = getUserByUsername("YassienXYZ");
    assert.match(username, /YassienXYZ/);
  });
});
