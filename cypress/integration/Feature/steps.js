import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

import paginaProjeto from "../../support/pageObjects/cenario1Page";

const site = new paginaProjeto;

Given('que o usuário acessou a plataforma', () => {
    //site.acessarSite();
    cy.visit('https://demo.automationtesting.in/Modals.html');
})

When('ele clicar no botão do Bootstrap Modal', () => {

})

Then('ele visualizará a comunicação', () => {

})
