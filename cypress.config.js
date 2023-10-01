const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      url_staging: "www.facebook.com",
      url_prod: "www.instagram.com",
      username: 'elvanisa'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1024,
    viewportWidth: 768,
    defaultCommandTimeout: 5500,
    //video: true
  },
});
