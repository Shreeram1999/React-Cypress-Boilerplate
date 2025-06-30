describe('Counter E2E', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");

  });

  it('loads the counter and shows initial count', () => {
    cy.get('[data-cy=counter-component]').should('exist');
    cy.get('[data-cy=count-value]').should('contain', 'Count: 0');
  });

  it('increments and decrements the counter', () => {
    cy.get('[data-cy=increment-btn]').click();
    cy.get('[data-cy=count-value]').should('contain', 'Count: 1');
    cy.get('[data-cy=decrement-btn]').click();
    cy.get('[data-cy=count-value]').should('contain', 'Count: 0');
  });
});
