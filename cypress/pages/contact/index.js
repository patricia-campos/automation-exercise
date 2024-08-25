class Contact {

  submitContactForm() {

    cy.get('[data-qa="name"]')
      .type(`Neil Gaiman`)
    cy.get('[data-qa="email"]')
      .type(`neilg@mail.com`)
    cy.get('[data-qa="subject"]')
      .type(`Merchandising Products`)
    cy.get('[data-qa="message"]')
      .type(`Testing the Contact Form`)
    cy.fixture('example.json')
      .as('arquivo')
    cy.get('input[name="upload_file"]')
      .selectFile('@arquivo')
    cy.get('[data-qa="submit-button"]')
      .click()
      
  }

  verifyContactFormSubmission() {

    cy.get('.status')
      .should('have.text', 'Success! Your details have been submitted successfully.')

  } 

  verifyContactPageIsVisible() {

    cy.get(`.contact-form h2`)
      .should('be.visible')
      .and('have.text', 'Get In Touch')

  }

}

export default new Contact()