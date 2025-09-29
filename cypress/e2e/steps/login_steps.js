import LoginPage from "../pages/login_page";
const loginPage = new LoginPage;


Given(/^que eu queira acessar o Site$/, () => {
	LoginPage.acessarHomePage()
});     

When(/^eu inserir meu login e senha$/, () => {
	LoginPage.preencherDadosNaTela()
});

When(/^clicar no botão Login$/, () => {
	LoginPage.clickEmLogin()
});

Then(/^tenho meu acesso realizado com sucesso$/, () => {
	return true;

});
