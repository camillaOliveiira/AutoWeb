/// <reference types="Cypress" />
import LoginPage from "./login_page";
import SelectPage from "./select_page";
import { incluiCar } from "../elements/inclui";
import Evidencias from "../../support/utils/evidencias"

export default class IncluirProd {

    static acessarHomePage() {
        cy.visit('https://www.saucedemo.com/')
    }

    static loga() {
        LoginPage.preencherDadosNaTela();
        LoginPage.clickEmLogin();
    }

    static inclui(){
        SelectPage.selecionaProd()
        cy.get(incluiCar).click();
    }

    static validaCar(){

        cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1');
 
 cy.intercept('**/').as('incluiRequest') // captura qualquer request


 // salvar evidências
 Evidencias.salvarScreenshot('evidencia-inclui-sucesso')
    }

}