Feature: Checkout com erro
    Realizar compra do produto com erro

        Scenario: Realizar compra com erro
            Given que eu esteja logado no site
              And tenha escolhido algum produto
              And tiver incluido no carrinho
             When estiver na lista dos meus produtos
              And clicar em Checkout
              And não preencher as informações
              And clicar em continue
             Then devo vizualizar mensagem de erro