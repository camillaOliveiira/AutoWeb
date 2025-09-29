const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://www.saucedemo.com/", // base para os testes WEB
    specPattern: [
      "cypress/e2e/feature/*.feature",   // seus cenários Gherkin (WEB)
      "cypress/e2e/api/**/*.cy.js"       // seus testes de API
    ],
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
  env: {
    apiUrl: "https://serverest.dev" // base para os testes de API
  },
});
