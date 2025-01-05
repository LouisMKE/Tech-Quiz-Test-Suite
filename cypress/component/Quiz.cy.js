import React from 'react';
import Quiz from '../../client/src/components/Quiz'; // Adjust path as needed

describe('Quiz Component', () => {
  it('renders quiz questions', () => {
    const mockQuestions = [
      {
        question: 'What is React?',
        options: ['Library', 'Framework', 'Language'],
        correct: 0,
      },
    ];

    cy.mount(<Quiz questions={mockQuestions} />);
    cy.contains('What is React?').should('be.visible');
    cy.contains('Library').should('be.visible');
  });
});
