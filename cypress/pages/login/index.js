class Login {

  submitLogin(userEmail, password) {

    cy.get('[data-qa="login-email"]')
      .type(userEmail)
    cy.get('[data-qa="login-password"]')
      .type(password, { log: false })
    cy.get('[data-qa="login-button"]')
      .click()
      
  }

  verifyLoginCompleted() {

    cy.get('i.fa-user')
      .parent()
      .should('contain', 'Coraline Jones')

  }

  verifyIncorrectLoginData() {

    cy.get('p')
      .should('contain', 'Your email or password is incorrect!')

  }

  verifyLoginPageIsVisible() {

    cy.url()
      .should('contain', 'login')
      cy.contains("Login to your account")

  }

}

export default new Login()