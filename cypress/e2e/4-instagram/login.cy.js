describe('Saucedemo Test Add to Cart', () => {
    it('Success Add to Cart', () => {
        cy.visit(Cypress.env('url_prod'))
        cy.get('.x1q0g3np.x1oa3qoh > :nth-child(2) > .x1i10hfl').click()
        cy.get(':nth-child(4) > .xnz67gz > ._aa48 > ._aa4b').type('test@gmail.com')
        cy.get(':nth-child(5) > .xnz67gz > ._aa48 > ._aa4b').type('elva')
        cy.get(':nth-child(6) > .xnz67gz > ._aa48 > ._aa4b').type(Cypress.env('username'))
        cy.get(':nth-child(7) > .xnz67gz > ._aa48 > ._aa4b').type('1234567qwertt@')
        cy.get('._aah- > :nth-child(9) > .x9f619').click()
        cy.get('#ssfErrorAlert').should('be.visible')
    })
    
  })