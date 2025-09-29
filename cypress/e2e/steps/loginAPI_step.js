import LoginService from "../../support/services/LoginService";

let credenciais;

Given("que eu possua um usuário válido", () => {
    credenciais = {
        email: "camila.teste@teste.com",
        password: "123456"
    };
});

Given("que eu possua credenciais inválidas", () => {
    credenciais = {
        email: "invalido@teste.com",
        password: "000000"
    };
});

When("eu enviar a requisição de login", () => {
    LoginService.login(credenciais).as('respostaLogin');
});

Then("o token de autenticação deve ser retornado", () => {
    cy.get('@respostaLogin').its('body').should('have.property', 'authorization');
});

Then("devo receber status de login {int}", (status) => {
    cy.get('@respostaLogin').its('status').should('eq', status);
  });
  
  Then("mensagem de erro {string}", (mensagem) => {
    cy.get('@respostaLogin').its('body.message').should('contain', mensagem);
  });