import React from 'react';
import Counter from '../../src/components/Counter';

describe('Counter Component', () => {
  it('should mount the component', () => {
    cy.mount(<Counter />);
    cy.get('[data-cy=counter-component]').should('exist');
  });

  it('should increment and decrement the count', () => {
    cy.mount(<Counter />);
    cy.get('[data-cy=count-value]').should('contain', 'Count: 0');
    cy.get('[data-cy=increment-btn]').click();
    cy.get('[data-cy=count-value]').should('contain', 'Count: 1');
    cy.get('[data-cy=decrement-btn]').click();
    cy.get('[data-cy=count-value]').should('contain', 'Count: 0');
  });
});
