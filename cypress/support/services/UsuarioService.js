export default class UsuarioService {
    static criarUsuario(usuario) {
      return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: usuario,
        failOnStatusCode: false
      });
    }
  
    static loginUsuario(email, password) {
      return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: { email, password },
        failOnStatusCode: false
      });
    }
  
    static editarUsuario(id, novosDados, token) {
      return cy.request({
        method: 'PUT',
        url: `https://serverest.dev/usuarios/${id}`,
        body: novosDados,
        headers: { Authorization: token },
        failOnStatusCode: false
      });
    }
  
    static excluirUsuario(id, token) {
      return cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${id}`,
        headers: { Authorization: token },
        failOnStatusCode: false
      });
    }
  }  