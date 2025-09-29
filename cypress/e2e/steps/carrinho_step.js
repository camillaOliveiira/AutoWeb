import seuCarrinho from "../pages/carrinho_page";
const seucarrinho = new seuCarrinho;

Given(/^que eu tenha acessado o site$/, () => {
	seuCarrinho.acessarHomePage()
});

Then(/^esteja logado$/, () => {
	seuCarrinho.loga()
});

When(/^eu escolher um produto$/, () => {
	return true;
});

When(/^e tenho inserido no meu carrinho$/, () => {
	seuCarrinho.inclui()
});

When(/^clicar no icone do carrinho$/, () => {
	return true;
});

Then(/^devo ser direcionado para a tela dentro do carrinho de compras$/, () => {
	seuCarrinho.cart();

});
