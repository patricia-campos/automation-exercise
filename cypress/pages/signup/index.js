class Signup {

  startSignup(user) {

    cy.get('[data-qa="signup-name"]')
      .type(`Coraline Jones`)
    cy.get('[data-qa="signup-email"]')
      .type(user)
    cy.contains('button', 'Signup')
      .click()

  }

  submitSignupForm() {

    const timestamp = new Date().getTime()
    const signUpName = 'Coraline Jones'
    Cypress.env('signUpName', signUpName)

    cy.get('[data-qa="signup-name"]')
      .type(Cypress.env('signUpName'))
    cy.get('[data-qa="signup-email"]')
      .type(`coraline-${timestamp}@mail.com`)
    cy.contains('button', 'Signup')
      .click()

    cy.get('input[type=radio]')
      .check('Mrs')
    cy.get('[type=password]')
      .type('12345', { log: false })
    cy.get('[data-qa="days"]')
      .select('19')
    cy.get('[data-qa="months"]')
      .select('May')
    cy.get('[data-qa="years"]')
      .select('1988')
    cy.get('input[type=checkbox]#newsletter')
      .check()
    cy.get('input[type=checkbox]#optin')
      .check()
    cy.get('[data-qa="first_name"]')
      .type('Coraline')
    cy.get('[data-qa="last_name"]')
      .type('Jones')
    cy.get('[data-qa="company"]')
      .type('NG Company')
    cy.get('[data-qa="address"]')
      .type('Rua Amapa, 800')
    cy.get('[data-qa="country"]')
      .select('United States')
    cy.get('[data-qa="state"]')
      .type('Califórnia')
    cy.get('[data-qa="city"]')
      .type('Los Angeles')
    cy.get('[data-qa="zipcode"]')
      .type('90001')
    cy.get('[data-qa="mobile_number"]')
      .type('123 456 789')
    cy.get('[data-qa="create-account"]')
      .click()

    cy.get('b')
      .should('contain', 'Account Created!')
    cy.url()
      .should('includes', 'account_created')
    cy.get('[data-qa="account-created"]')
      .should('be.visible')

    cy.get('[data-qa="continue-button"]').click()

  }

  verifySignupCompleted() {

    cy.get('i.fa-user')
      .parent()
      .should('contain', Cypress.env('signUpName'))

  }

  verifyExistingEmailSignup() {

    cy.get(`.signup-form form p`)
      .should('be.visible')
      .and('contain', 'Email Address already exist!')

  }

  verifySignupPageIsVisible() {

    cy.url()
      .should('contain', 'login')
    cy.contains("New User Signup!")
      .should("be.visible");  
  
  }

  verifyDeletedAccount() {
    
    cy.get('b')
      .should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]')
      .click()

  }

}

export default new Signup()