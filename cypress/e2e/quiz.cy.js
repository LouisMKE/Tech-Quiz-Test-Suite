describe('Quiz End-to-End Test', () => {
    beforeEach(() => {
      cy.visit('/quiz'); // Adjust route as needed
    });
  
    it('allows the user to answer questions and view the final score', () => {
      cy.get('.question').should('exist');
      cy.get('.option').first().click();
      cy.get('.next-button').click();
  
      // Simulate quiz completion
      cy.get('.submit-button').click();
      cy.contains('Your final score is').should('be.visible');
    });
  });
  