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
  describe('Navegacion', () => {
    ['inicio', 'chisme/de/hacer/numeros', 'contactos',
      '/config/datos', 'kk.svg'].forEach(ruta => {
        it(`Visita ${ruta}`, () => {
          cy.visit(`/${ruta}`)
          cy.url().should('contain', ruta)
        })
      })
  })
  describe('Formulario', () => {
    it.only(`Visita`, () => {
      let cad = 'Hola'
      cy.viewport('samsung-s10', 'portrait')
      cy.visit('/form')
      cy.get('#username').clear().type('kk')
      cy.get('.btn-primary').click()
      cy.get('.alert').should('contain', 'Acceso denegado')
      cy.screenshot()
      cy.get('#username').clear().type('adm@example.com')
      cy.get('.btn-primary').click()
      cy.screenshot()
      cy.get(':nth-child(3) > .error').should('have.text', 'Es obligatorio.')
      cy.get('#nombre').type(cad).blur().then(ele => {
        cad = ele.text().toUpperCase()
        // cy.get('#apellidos').type(cad).blur()
      })
      // cad = cad.toLocaleLowerCase()
      // cy.get('#apellidos').type(cad).blur()
      cy.get(':nth-child(3) > .error').should('be.hidden')
      cy.get('#conflictivo').check()
      cy.get('[data-testid=volver]').click()
    })
  })
})
