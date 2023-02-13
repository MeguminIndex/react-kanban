const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://localhost:8080",
    "video": false,
    "fixturesFolder": false,
    "supportFile": false,
    specPattern: "**/*/*.spec.{js,jsx,ts,tsx}"
  },
})