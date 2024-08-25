class Menu {

    navigateToProductsPage() {

        cy.contains(`Products`).click()
    }

    navigateToLoginOrSignupPage() {

        cy.contains('Signup').click()

    }

    navigateToContactUsPage() {

        cy.contains(`Contact us`).click()

        cy.get(`.contact-form h2`)
          .should('be.visible')
          .and('have.text', 'Get In Touch')

    }

    navigateToDeleteAccount() {

        cy.get('[href *="delete"]').click()

    }

    navigateToLogout() {

        cy.contains('Logout').click()

    }
    
}

export default new Menu()