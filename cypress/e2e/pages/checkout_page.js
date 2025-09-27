/// <reference types="Cypress" />
import LoginPage from "./login_page";
import SelectPage from "./select_page";
import IncluirProd from "./inclui_page";
import seuCarrinho from "./carrinho_page";
import {
    btnCheck, nameCli, lastNameCli, postCode, btnContinue, overview, descResumo
    , payInfo, payForm, total, btnFinich, checkOk, checkComplete, msgErro
} from "../elements/checkout";

export default class finalizaCompra {

    static acessarHomePage() {
        cy.visit('https://www.saucedemo.com/')
    }
    static logUser() {
        LoginPage.preencherDadosNaTela();
        LoginPage.clickEmLogin();
    }
    static escolhaProd() {
        SelectPage.selecionaProd();
        IncluirProd.inclui();
    }
    static cartEnter() {
        seuCarrinho.cart();
    }
    static checkout() {
        cy.get(btnCheck).click();

    }
    static persona() {
        cy.get(nameCli).type('Fulano');
        cy.get(lastNameCli).type('Tal');
        cy.get(postCode).type('01020303');
    }
    static continua(){
        cy.get(btnContinue).click();
    }
    static resumo() {
        cy.get(overview).should('be.visible');
        cy.get(descResumo).should('be.visible');
        cy.get(payInfo).should('be.visible');
        cy.get(payForm).should('be.visible');
        cy.get(total).should('be.visible');
    }
    static finalizando() {
        cy.get(btnFinich).click();
        cy.get(checkOk).should('be.visible');
        cy.get(checkComplete).should('be.visible');
    }
    static msgErroCheck() {
        cy.get(msgErro).should('be.visible');
    }

}