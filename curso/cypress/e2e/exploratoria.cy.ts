describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('exploratoria', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:4200/chisme/de/hacer/numeros');
    cy.get('[value="9"]').click();
    cy.get('[value="8"]').click();
    cy.get('[value="7"]').click();
    cy.get('[value="6"]').click();
    cy.get('[value="5"]').click();
    cy.get('[value="4"]').click();
    cy.get('[value="3"]').click();
    cy.get('[value="2"]').click();
    cy.get('[value="1"]').click();
    cy.get('[value="0"]').click();
    cy.get('[value="."]').click();
    cy.get('[value="3"]').click();
    cy.get('[value="±"]').click();
    cy.get('.Pantalla').should('have.text', '-9876543210.3');
    /* ==== End Cypress Studio ==== */
  });
})