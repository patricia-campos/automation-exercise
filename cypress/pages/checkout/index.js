class Checkout {

  navigateToCheckoutPage() {
  
    cy.get('.btn-default.check_out')
      .should('be.visible')
    cy.get('.btn-default.check_out')
      .click()

  }
  
  verifyCheckoutPageIsVisible() {
  
    cy.get('.heading')
      .first()
      .should('have.text', 'Address Details')
    cy.get('.heading')
      .last()
      .should('have.text', 'Review Your Order')
        
  }

}
  
export default new Checkout()