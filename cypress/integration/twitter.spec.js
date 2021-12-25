/// <reference types="cypress" />

import {dailyGospel} from '../fixtures/functions/dailyGospel'

context('Twitter', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
    cy.loadCookies('twitter')
    cy.visit('https://twitter.com/home')
  });
  
  specify('Tweets Daily Gospel', () => {
    cy.get('.public-DraftStyleDefault-block').type(dailyGospel())
    cy.get('[data-testid=tweetButtonInline]').click({ force: true })

    cy.log('Save fresh cookies after a successful post')
    cy.getCookies().then(cookies => {
      cy.writeFile('cypress/fixtures/login/twitter_cookies.json', cookies);
    });

  })
})
