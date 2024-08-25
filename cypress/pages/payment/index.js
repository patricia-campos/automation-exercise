import { faker } from '@faker-js/faker' 

class Payment {

    submitPaymentData() {

        cy.get('.form-control')
          .type('378 98562-8781')
        cy.get('.btn-default.check_out')
          .click()
        cy.get('[data-qa="name-on-card"]')
          .type(faker.person.fullName())
        cy.get('[data-qa="card-number"]')
          .type(faker.finance.creditCardNumber())
        cy.get('[data-qa="cvc"]')
          .type(faker.finance.creditCardCVV())
        cy.get('[data-qa="expiry-month"]')
          .type(11)
        cy.get('[data-qa="expiry-year"]')
          .type(2034)
        cy.get('[data-qa="pay-button"]')
          .click()

    }

    verifyPlacedOrder() {

        cy.get('[data-qa="order-placed"]')
          .should('be.visible')

    }

}

export default new Payment()