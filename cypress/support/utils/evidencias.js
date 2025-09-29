/// <reference types="Cypress" />

export default class Evidencias {

  /**
   * Salva um screenshot
   * @param {string} nomeArquivo
   */
  static salvarScreenshot(nomeArquivo) {
    cy.screenshot(nomeArquivo, { capture: "runner" });
  }

  /**
   * Salva log de uma requisição interceptada
   * @param {string} alias
   * @param {string} nomeArquivo
   */
  static salvarLogRequisicao(alias, nomeArquivo) {
    cy.wait(alias).then((intercept) => {
      const log = {
        request: intercept.request,
        response: intercept.response,
      };
      cy.writeFile(`cypress/evidencias/${nomeArquivo}.json`, log);
    });
  }
}