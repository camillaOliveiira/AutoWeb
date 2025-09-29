/// <reference types="Cypress" />
import { inputUser,inputPass,btnEnter, msgErro } from "../elements/login"
import Evidencias from "../../support/utils/evidencias"

export default class LoginPageErro {

    static acessarHomePage() {
        cy.visit('https://www.saucedemo.com/')
    }

    static preencherDadosNaTela() {
        cy.get(inputUser).type('locked_out_user')
        cy.get(inputPass).type('secret_sauce')
    }

    static clickEmLogin() {
        cy.get(btnEnter).click()
    }

    static msgError() {
        cy.get(msgErro)
        cy.intercept('**/').as('loginRequest') // captura qualquer request
        // salvar evidências
        Evidencias.salvarScreenshot('evidencia-login-erro')
    }

}