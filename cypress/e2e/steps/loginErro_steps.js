import LoginPageErro from "../pages/loginErro_page";
const loginPageErro = new LoginPageErro


Given(/^que eu queira acessar o Site$/, () => {
	LoginPageErro.acessarHomePage()
});

When(/^eu inserir meu login e senha incorreto$/, () => {
	LoginPageErro.preencherDadosNaTela()
});

When(/^clicar no botão Login$/, () => {
	LoginPageErro.clickEmLogin()
});

Then(/^tenho meu acesso negado$/, () => {
	return true;
});

Then(/^devo vizualizar mensagem de erro$/, () => {
	LoginPageErro.msgError();
	
});
