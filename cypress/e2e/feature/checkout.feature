Feature: Checkout
    Realizar compra do produto

        Scenario: Realizar compra com sucesso
            Given que eu esteja logado no site
              And tenha escolhido algum produto
              And tiver incluido no carrinho
             When estiver na lista dos meus produtos
              And clicar em Checkout
              And preencher os campos com name, sobrenome e codigo postal
              And clicar em continue
              And estiver na tela de resumo do pedido
              And clicar em finish
             Then devo ter realizado a compra
              And validar mensagem de sucesso