describe('Testing the register form', () => {
    it('Fill the form', () => {
        cy.visit('http://localhost:3000/');

        cy.get('#name')
          .type('Mi')
          .wait(2000);
        
        cy.get('.alert-danger');

        cy.get('#name')
          .clear()
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