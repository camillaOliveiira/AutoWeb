import finalizaCompra from "../pages/checkout_page";
const finalizacompra = new finalizaCompra;
import SelectPage from "../pages/select_page";
const selectpage = new SelectPage;

Given(/^que eu esteja logado no site$/, () => {
    finalizaCompra.acessarHomePage();
    finalizaCompra.logUser();
});

Then(/^tenha escolhido algum produto$/, () => {
    SelectPage.selecionaProd();
});

Then(/^tiver incluido no carrinho$/, () => {
    return true;
});

When(/^estiver na lista dos meus produtos$/, () => {
    finalizaCompra.cartEnter();
});

When(/^clicar em Checkout$/, () => {
    finalizaCompra.checkout();
});

When(/^preencher os campos com name, sobrenome e codigo postal$/, () => {
    finalizaCompra.persona();
});

When(/^clicar em continue$/, () => {
    finalizaCompra.continua();
});

When(/^estiver na tela de resumo do pedido$/, () => {
    finalizaCompra.resumo();
});

When(/^clicar em finish$/, () => {
    finalizaCompra.finalizando();
});

Then(/^devo ter realizado a compra$/, () => {
    return true;
});

Then(/^validar mensagem de sucesso$/, () => {
    return true;
    
});