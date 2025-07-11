const { defineConfig } = require("cypress");
const webpackConfig = require("./webpack.common.js");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/code-coverage/task')(on, config);
       // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    }
  },
  component: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    }
  }
});
