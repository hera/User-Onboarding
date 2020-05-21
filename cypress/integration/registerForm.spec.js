describe('Testing the register form', () => {

    it('Go to the page', () => {
        cy.visit('http://localhost:3000/');
    })

    it('Check name', () => {

        cy.get('#name')
          .type('Mi') // name is too short here
          .wait(2000);
        
        cy.get('.alert-danger');

        cy.get('#name')
          .clear()
          .type('Michael Jackson'); // valid e-mail
    });

    it('Check e-mail', () => {
        cy.get('#email')
          .type('mail') // invalid e-mail
          .wait(2000);

        cy.get('.alert-danger');

        cy.get('#email')
          .clear()
          .type('mail@jackson.com');
    });

    it('Check password', () => {

        cy.get('#pass')
          .type('1234')
          .wait(2000);

        cy.get('.alert-danger');

        cy.get('#pass')
          .type('5678');
    });

    it('Check if submit is disabled', () => {

        cy.contains('Register')
          .should('be.disabled');
    });

    it('Finish and submit the form', () => {
        cy.get('#agree')
          .click();

        cy.contains('Register')
          .should('be.enabled')
          //.click();
    });
});