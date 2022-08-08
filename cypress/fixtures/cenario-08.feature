Feature: Multiple Modals

Scenario Outline: Fechar o segundo modal

Given que o estudante acessou a plataforma
And selecionou o botão do Multiple Modals
When o modal abrir
And ele selecionar o botão Launch Modal
And o modal 2 abrir
And ele selecionar o botão close
Then o modal 2 deverá se fechar e o primeiro se manter aberto