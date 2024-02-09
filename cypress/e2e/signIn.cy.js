/// <reference types="cypress" />

describe('Sign In user flow', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=0yd0kr');
    cy.get('h1').should('contain.text', 'Sign In');

    cy.get('[placeholder=Email]')
      .type('karinapotapova8+10@gmail.com');

    cy.get('[placeholder=Password]')
      .type('passWord99');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'PK_test_user');
  });
});
