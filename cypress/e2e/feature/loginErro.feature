Feature: Login com Erro
    Login com erro no Site

        Scenario: Login com Erro
            Given que eu queira acessar o Site
             When eu inserir meu login e senha incorreto
              And clicar no botão Login
             Then tenho meu acesso negado
              And devo vizualizar mensagem de erro