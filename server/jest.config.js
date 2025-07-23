
// jest.config.js

module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/tests"], // ✅ This is correct if you're already inside /server
  moduleFileExtensions: ["js", "json"],
  testMatch: ["**/*.test.js"],
  transform: {},
};


