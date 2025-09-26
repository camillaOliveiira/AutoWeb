Feature: Incluir Produto
             Seleciona produto na tela

        Scenario: Inclusão de produto no carrinho
            Given que eu tenha acessado o site
              And esteja logado
             When eu escolher um produto
              And e seleciona-lo
              And clicar no botão de add to cart
             Then prod deve ser incluido no carrinho
              And numeração da quantidade deve aparecer no icone do carrinho