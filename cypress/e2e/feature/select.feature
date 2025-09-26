Feature: Selecionar Produto
             Seleciona produto na tela

        Scenario: Valida seleção de produto
            Given que eu tenha acessado o site
              And esteja logado
             When eu escolher um produto
              And e seleciona-lo
             Then devo ser direcionado para a tela do produto escolhido
              And vizualizar nome, descrição e preço correspondente ao produto