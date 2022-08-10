const url = Cypress.config("baseUrl")

class paginaProjeto{
    acessarSite() {
        cy.visit(url)
    }
}

export default paginaProjeto;