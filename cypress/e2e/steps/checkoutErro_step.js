import finalizaCompra from "../pages/checkout_page";
const finalizacompra = new finalizaCompra;
import SelectPage from "../pages/select_page";
const selectpage = SelectPage;

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

When(/^não preencher as informações$/, () => {
	return true;
});

When(/^clicar em continue$/, () => {
	finalizaCompra.continua();

});

Then(/^devo vizualizar mensagem de erro$/, () => {
	finalizaCompra.msgErroCheck();
	
});
