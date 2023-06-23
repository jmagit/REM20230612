describe('Calculadora', () => {
  beforeEach(() => {
    cy.visit('/chisme/de/hacer/numeros')
    cy.url().should('contain', '/chisme/de/hacer/numeros')
  })
  it('Binding', () => {
    const btnNumericos = '9876543210.2'
    cy.get('.Pantalla', { timeout: 10 }).as('pantalla')
    btnNumericos.split('').forEach((item, index) => {
      cy.get(`[value="${item}"]`).click()
      cy.get('@pantalla', { timeout: 0 }).should('have.text', btnNumericos.substring(0, index + 1))
    })
    cy.get('[value="±"]').click()
    cy.get('@pantalla', { timeout: 10 }).should('have.text', '-' + btnNumericos)
    cy.get('[value="⌫"]').click()
    cy.get('@pantalla', { timeout: 10 }).should('have.text', '-' + btnNumericos.substring(0, btnNumericos.length - 1))
    cy.get('[value="C"]').click()
    cy.get('@pantalla', { timeout: 10 }).should('have.text', '0');
    [['1', '+', '1'], ['2', '-', '3'], ['1', '*', '2'], ['3', '/', '6'], ['0', '=', 'Infinity']].forEach(param => {
      cy.get(`[value="${param[0]}"]`).click()
      cy.get(`[value="${param[1]}"]`).click()
      cy.get('@pantalla', { timeout: 10 }).should('have.text', param[2])
      cy.get('.Resumen').should('have.text', param[1] === '=' ? '' : `${param[2]} ${param[1]}`)
    })
  });
  it.only('Commandos', () => {
    cy.get('.Pantalla', { timeout: 10 }).as('pantalla')
    cy.get('[value="9"]').click().prev().click().prev().click().parent().type('0')
    cy.get('@pantalla', { timeout: 0 }).should('have.text', '9870')
  });
});
