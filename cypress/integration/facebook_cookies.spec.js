/// <reference types="cypress" />

context.skip('Facebook SMM Cookies', () => {
  it('Saves Facebook cookies', () => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })

    cy.visit('https://www.facebook.com/').pause()
    
    cy.getCookies().then(cookies => {
      cy.writeFile('cypress/fixtures/login/facebook_cookies.json', cookies);
    });
  })
})
