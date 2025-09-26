Feature: Carrinho de compras
    Valida o conteudo no carrinho de compras

        Scenario: Validar produtos no carrinho
            Given que eu tenha acessado o site
              And esteja logado
             When eu escolher um produto
              And e tenho inserido no meu carrinho
              And clicar no icone do carrinho
             Then devo ser direcionado para a tela dentro do carrinho de compras