import IncluirProd from "../pages/inclui_page";
const incluirProd = new IncluirProd;

Given(/^que eu tenha acessado o site$/, () => {
	IncluirProd.acessarHomePage()
});

Then(/^esteja logado$/, () => {
	IncluirProd.loga()
});

When(/^eu escolher um produto$/, () => {
	return true;
});

When(/^e seleciona-lo$/, () => {
	return true;
});

When(/^clicar no botão de add to cart$/, () => {
	IncluirProd.inclui()
});

Then(/^prod deve ser incluido no carrinho$/, () => {
	return true;
});

Then(/^numeração da quantidade deve aparecer no icone do carrinho$/, () => {
	IncluirProd.validaCar();
	
});
