/// <reference types="cypress" />

context.skip("Facebook SMM Cookies", () => {
  specify("Saves Facebook cookies", () => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });

    let cookies = Array();
    cy.fixture("login/facebook.com_cookies.txt")
      .then((facebookCookies) => {
        let cookiesArray = facebookCookies.split("\n");
        cookiesArray.forEach((cookieLine) => {
          let cookieArray = cookieLine.split("\t");
          let cookie = {};
          cookie.domain = cookieArray[0];
          cookie.secure = cookieArray[1] == "TRUE";
          cookie.path = cookieArray[2];
          cookie.httpOnly = cookieArray[3] == "TRUE";
          cookie.expiry = cookieArray[4];
          cookie.name = cookieArray[5];
          cookie.value = cookieArray[6];
          cookie.priority = "Medium";
          cookie.sameSite = "None";
          if (cookie.name == "wd") {
            cookie.sameSite = "Lax";
          }
          cookies.push(cookie);
        });
      })
      .then(() => {
        console.log(cookies);
        cy.writeFile("cypress/fixtures/login/facebook_cookies.json", cookies);
      });

    // cy.visit('https://www.facebook.com/').pause()

    // cy.getCookies().then(cookies => {
    //   cy.writeFile('cypress/fixtures/login/facebook_cookies.json', cookies);
    // });
  });
});
