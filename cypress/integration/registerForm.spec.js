describe('Testing the register form', () => {
    it('Fill the form', () => {
        cy.visit('http://localhost:3000/');

        cy.get('#name')
          .type('Michael Jackson');

        cy.get('#email')
          .type('mail@jackson.com');

        cy.get('#pass')
          .type('123456789');

        cy.contains('Register')
          .should('be.disabled');
        
        cy.get('#agree')
          .click();

        cy.contains('Register')
          .should('be.enabled')
          .click();
    });
});