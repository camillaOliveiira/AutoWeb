import UsuarioService from "../../support/services/UsuarioService";

let usuario;
let usuarioId;

// --- Given ---
Given("que eu possua os dados do usuário", () => {
  usuario = {
    nome: "Camila",
    email: `camila.${Date.now()}@teste.com`,
    password: "123456",
    administrador: "true"
  };
});

Given("que eu possua um usuário existente", () => {
  usuario = {
    nome: "Camila",
    email: `camila.existente.${Date.now()}@teste.com`,
    password: "123456",
    administrador: "true"
  };

  // Criar usuário e salvar ID antes de prosseguir
  return UsuarioService.criarUsuario(usuario).then((res) => {
    usuarioId = res.body._id;
  });
});

// --- When ---
When("eu enviar a requisição de criação de usuário", () => {
  return UsuarioService.criarUsuario(usuario).as('respostaCriacao');
});

When("eu enviar a requisição de edição com novos dados", () => {
    // Loga o usuário primeiro
    UsuarioService.loginUsuario(usuario.email, usuario.password).then((res) => {
      const token = res.body.authorization;
      const novosDados = {
        nome: "Camila Editada",
        email: `camila.editada.${Date.now()}@teste.com`,
        password: "654321",
        administrador: "false"
      };
      UsuarioService.editarUsuario(usuarioId, novosDados, token).as('respostaEdicao');
    });
  });

  When("eu enviar a requisição de exclusão", () => {
    // Loga o usuário primeiro
    UsuarioService.loginUsuario(usuario.email, usuario.password).then((res) => {
      const token = res.body.authorization;
      UsuarioService.excluirUsuario(usuarioId, token).as('respostaExclusao');
    });
  });

// --- Then ---
Then("devo receber status de criação {int}", (status) => {
  cy.get('@respostaCriacao').its('status').should('eq', status);
});

Then("devo receber status de edição {int}", (status) => {
  cy.get('@respostaEdicao').its('status').should('eq', status);
});

Then("devo receber status de exclusão {int}", (status) => {
  cy.get('@respostaExclusao').its('status').should('eq', status);
});

Then("mensagem de sucesso na criação {string}", (mensagem) => {
  cy.get('@respostaCriacao').its('body.message').should('eq', mensagem);
});

Then("mensagem de erro na criação {string}", (mensagem) => {
  cy.get('@respostaCriacao').its('body.message').should('eq', mensagem);
});

Then("o usuário atualizado deve conter os novos dados", () => {
    cy.get('@respostaEdicao').its('body.message').should('eq', 'Registro alterado com sucesso');
});
