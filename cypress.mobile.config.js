const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 720,
  viewportHeight: 1440,
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
