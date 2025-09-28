# AutoWeb
AutoWeb - Testes Automatizados

Este projeto utiliza Cypress com Cucumber para testes end-to-end (E2E) do site SauceDemo
.
A estrutura segue o padrão BDD (Behavior-Driven Development) utilizando Page Object Model (POM).

🛠 Pré-requisitos

Node.js (versão >= 18)

npm (versão >= 9)

Git (para clonar o projeto)

⚡ Instalação

Clone o repositório:

git clone https://github.com/camillaOliveiira/AutoWeb.git
cd AutoWeb


Instale as dependências:

npm install


Verifique se o Cypress foi instalado corretamente:

npx cypress verify

🧩 Estrutura do projeto
cypress/
 ├─ e2e/
 │   ├─ features/           # Arquivos .feature com cenários BDD
 │   ├─ step_definitions/   # Implementação dos steps
 │   └─ pages/              # Page Objects (classes com métodos de tela)
 └─ support/
      └─ e2e.js             # Configurações globais do Cypress


features: define os cenários em Gherkin (.feature)

step_definitions: contém as funções que implementam os steps do Gherkin

pages: classes que encapsulam elementos e métodos das páginas (Page Object)

support/e2e.js: inicialização de comandos e plugins do Cypress

⚙ Configuração do Cypress + Cucumber

No cypress.config.js:

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


No package.json (configuração opcional para stepDefinitions):

"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true,
  "stepDefinitions": "cypress/e2e/step_definitions"
}

🚀 Executando os testes

Para abrir o Cypress com interface interativa:

npx cypress open


Para rodar todos os testes em modo headless:

npx cypress run

📌 Dicas importantes

Page Object: Sempre utilize classes em cypress/e2e/pages/ para centralizar elementos e métodos de cada página.

Step Definitions: Cada step do .feature deve ter sua função correspondente em cypress/e2e/step_definitions/.

Evite subir segredos para o Git: chaves, senhas e tokens devem ser mantidos em .env ou arquivos não versionados.

Debug: Use cy.log() e cy.wait() para validar fluxos em desenvolvimento.

🌐 Referências

Cypress Documentation

Cypress Cucumber Preprocessor

Page Object Pattern