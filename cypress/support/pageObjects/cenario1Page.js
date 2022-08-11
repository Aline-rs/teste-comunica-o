import pageElements from "../elements/cenario1Elements";

const url = Cypress.config("baseUrl")
const pageModal = new pageElements

class paginaProjeto{
    acessarSite() {
        cy.visit(url)
    }

    validaSite() {
        cy.get(pageModal.homeLogo()).should('be.visible')
    }

    validaBootstrapModal() {
        cy.get(pageModal.bootstrapModal()).should('contain', 'Bootstrap Modal')
    }

    clickButtonBootstrapModal(){
        cy.get(pageModal.bootstrapModalButton())
        .should('be.visible')
        .click()
    }

    validaModal(){
        cy.get(pageModal.tituloModal).contains('Modal title')
    }

    validaConteúdo(){
        cy.get(pageModal.conteudoModal).should('be.visible')
    }

}



export default paginaProjeto;