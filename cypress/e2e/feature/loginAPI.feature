Feature: Login

        Scenario: Login com sucesso
            Given que eu possua um usuário válido
             When eu enviar a requisição de login
             Then devo receber status 200
              And o token de autenticação deve ser retornado

        Scenario: Login com usuário inválido
            Given que eu possua credenciais inválidas
             When eu enviar a requisição de login
             Then devo receber status 401
              And mensagem de erro "Email e/ou senha inválidos"