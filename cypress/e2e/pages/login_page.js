/// <reference types="Cypress" />
import { inputUser, inputPass, btnEnter, msgErro } from "../elements/login"
import Evidencias from "../../support/utils/evidencias"

export default class LoginPage {

    static acessarHomePage() {
        cy.visit('https://www.saucedemo.com/')
    }

    static preencherDadosNaTela() {
        cy.get(inputUser).type('standard_user')
        cy.get(inputPass).type('secret_sauce')
    }

    static clickEmLogin() {
        // interceptar antes do clique
        cy.intercept('**/').as('loginRequest') // captura qualquer request
        cy.get(btnEnter).click()

        // salvar evidências
        Evidencias.salvarScreenshot('evidencia-login-sucesso')
        
    }
}