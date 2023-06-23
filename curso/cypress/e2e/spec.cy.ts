describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running!')
  })
  describe('My First Test', () => {
    it('clicking "type" navigates to a new url', () => {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
      cy.get('#password1')
        .type('P@ssw0rd')
        .should('have.value', 'P@ssw0rd')
        .should('have.class', 'focus')
        .prev().should('have.attr', 'style', 'color: orange;')
    })
  })
  describe.only('Navegacion', () => {
    ['inicio', 'chisme/de/hacer/numeros', 'contactos',
      '/config/datos', 'kk.svg'].forEach(ruta => {
      it(`Visita ${ruta}`, () => {
        cy.visit(`/${ruta}`)
        cy.url().should('contain', ruta)
      })
    })
  })
})
