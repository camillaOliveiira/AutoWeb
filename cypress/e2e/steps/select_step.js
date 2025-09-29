import SelectPage from "../pages/select_page";
const selectPage = new SelectPage;

Given(/^que eu tenha acessado o site$/, () => {
	SelectPage.acessarHomePage()
});

Then(/^esteja logado$/, () => {
	SelectPage.loga()
});

When(/^eu escolher um produto$/, () => {
	return true;
});

When(/^e seleciona-lo$/, () => {
	SelectPage.selecionaProd()
});

Then(/^devo ser direcionado para a tela do produto escolhido$/, () => {
	return true;
});

Then(/^vizualizar nome, descrição e preço correspondente ao produto$/, () => {
	SelectPage.validaProd("Sauce Labs Bike Light", "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.", "$9.99");

});
