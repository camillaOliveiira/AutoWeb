/// <reference types="Cypress" />
import LoginPage from "./login_page";
import SelectPage from "./select_page";
import IncluirProd from "./inclui_page";
import { carrinho, yourCart } from "../elements/carrinho";

export default class seuCarrinho {

    static acessarHomePage() {
        cy.visit('https://www.saucedemo.com/')
    }

    static loga() {
        LoginPage.preencherDadosNaTela();
        LoginPage.clickEmLogin();
    }

    static inclui(){
        
        IncluirProd.inclui()
    }

    static cart(){

        cy.get(carrinho).click();
        cy.get('.title').should('have.text', 'Your Cart');

    }

}