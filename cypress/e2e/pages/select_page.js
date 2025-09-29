/// <reference types="Cypress" />
import LoginPage from "./login_page";
import { selectProd, nameProd,descProd, priceProd } from "../elements/Select";
import Evidencias from "../../support/utils/evidencias";

export default class SelectPage  {
    static acessarHomePage() {
        cy.visit('https://www.saucedemo.com/')
    }

    static loga() {
        LoginPage.preencherDadosNaTela();
        LoginPage.clickEmLogin();
    }

    static selecionaProd(){
        cy.get(selectProd).click();
    }

    static validaProd(nameProd, descProd, priceProd) {
        cy.contains(nameProd).should('be.visible');
        cy.contains(descProd).should('be.visible');
        cy.contains(priceProd).should('be.visible');
         
         cy.intercept('**/').as('selectRequest') // captura qualquer request
                  // salvar evidências
         Evidencias.salvarScreenshot('evidencia-select-sucesso')
    }

}