/// <reference types="Cypress" />
import { inputUser,inputPass,btnEnter, msgErro } from "../elements/login"

export default class LoginPage {

    static acessarHomePage() {
        cy.visit('https://www.saucedemo.com/')
    }

    static preencherDadosNaTela() {
        cy.get(inputUser).type('standard_user')
        cy.get(inputPass).type('secret_sauce')
    }

    static clickEmLogin() {
        cy.get(btnEnter).click()
    }
  }