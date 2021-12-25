/// <reference types="cypress" />

context.skip('Twitter SMM Cookies', () => {
  it('Saves Twitter cookies', () => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })

    cy.visit('https://twitter.com/home').pause()
    
    cy.getCookies().then(cookies => {
      cy.writeFile('cypress/fixtures/login/twitter_cookies.json', cookies);
    });
  })
})
