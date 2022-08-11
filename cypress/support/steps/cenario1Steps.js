import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

import paginaProjeto from "../pageObjects/cenario1Page";


const plataforma = new paginaProjeto;

Given('que o usuário acessou a plataforma', () => {
    plataforma.acessarSite();
    plataforma.validaSite();
})

When('ele clicar no botão do Bootstrap Modal', () => {
    plataforma.validaBootstrapModal();
    plataforma.clickButtonBootstrapModal();
    
})

Then('ele visualizará a comunicação', () => {
    plataforma.validaModal();
    plataforma.validaConteúdo();
})
