Feature: Usuário

        Scenario: Criar usuário com sucesso
            Given que eu possua os dados do usuário
             When eu enviar a requisição de criação de usuário
             Then devo receber status de criação 201
              And mensagem de sucesso na criação "Cadastro realizado com sucesso"

        Scenario: Tentar criar usuário com email duplicado
            Given que eu possua um usuário existente
             When eu enviar a requisição de criação de usuário
             Then devo receber status de criação 400
              And mensagem de erro na criação "Este email já está sendo usado"

        Scenario: Editar usuário existente
            Given que eu possua um usuário existente
             When eu enviar a requisição de edição com novos dados
             Then devo receber status de edição 200
              And o usuário atualizado deve conter os novos dados

        Scenario: Excluir usuário existente
            Given que eu possua um usuário existente
             When eu enviar a requisição de exclusão
             Then devo receber status de exclusão 200