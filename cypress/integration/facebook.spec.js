/// <reference types="cypress" />

import dailyGospel from "../fixtures/functions/dailyGospel";

context("Facebook Daily Gospel", () => {
  it("Post Daily Gospel on Facebook", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.loadCookies("facebook");

    // cy.visit('https://www.facebook.com/groups/dabravesce/').pause()

    // cy.get('.public-DraftStyleDefault-block').type(dailyGospel())
    // cy.get('[data-testid=tweetButtonInline]').click({ force: true })
  });
});
