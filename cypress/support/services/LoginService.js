export default class LoginService {
    static baseUrl = 'https://serverest.dev';

    static login(dados) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/login`,
            body: dados,
            failOnStatusCode: false
        });
    }
}
