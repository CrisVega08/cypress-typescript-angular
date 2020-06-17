describe('Angular-Cypress', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.contains('Welcome!');
  });
});
