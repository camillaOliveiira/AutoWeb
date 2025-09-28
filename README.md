# AutoWeb - Testes Automatizados

Este projeto utiliza **Cypress** com **Cucumber** para testes end-to-end (E2E) do site [SauceDemo](https://www.saucedemo.com/).  
A estrutura segue o padrão **BDD (Behavior-Driven Development)** utilizando **Page Object Model (POM)**.

---

## 🛠 Pré-requisitos

- Node.js (versão >= 18)
- npm (versão >= 9)
- Git (para clonar o projeto)

---

## ⚡ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/camillaOliveiira/AutoWeb.git
cd AutoWeb
Instale as dependências:
```
2. Instale as dependências:

```bash
npm install
Verifique se o Cypress foi instalado corretamente:
```
3. Verifique se o Cypress foi instalado corretamente:

```bash
npx cypress verify
```

🧩 Estrutura do projeto\

cypress/\
 ├─ e2e/\
 │   ├─ features/           # Arquivos .feature com cenários BDD\
 │   ├─ step_definitions/   # Implementação dos steps\
 │   └─ pages/              # Page Objects (classes com métodos de tela)\
 └─ support/\
      └─ e2e.js             # Configurações globais do Cypress\

⚙ Configuração do Cypress + Cucumber\
No cypress.config.js:

```
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler());
      return config;
    },
  },
});
```
No package.json (configuração opcional para stepDefinitions):

```
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true,
  "stepDefinitions": "cypress/e2e/step_definitions"
}
```

🚀 Executando os testes
Para abrir o Cypress com interface interativa:

```npx cypress open```
Para rodar todos os testes em modo headless:
```
npx cypress run
```

🌐 Referências\
[Cypress Documentation](https://docs.cypress.io/)

[Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)

[Page Object Pattern](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)

