/// <reference types="cypress" />

import signup from '../pages/signup';
import login from '../pages/login';
import menu from '../pages/menu';
import products from '../pages/products';
import contact from '../pages/contact';
import checkout from '../pages/checkout';
import payment from '../pages/payment';

describe('Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
      }) 

    
    it('Test Case 1: Register User', () => {

        menu.navigateToLoginOrSignupPage()
        signup.verifySignupPageIsVisible
        signup.submitSignupForm()
        signup.verifySignupCompleted()
        menu.navigateToDeleteAccount()
        signup.verifyDeletedAccount()

    });

    it('Test Case 2: Login User with correct email and password', () => {

        menu.navigateToLoginOrSignupPage()
        login.verifyLoginPageIsVisible()
        login.submitLogin(`coraline-1723583410363@mail.com`, '12345')
        login.verifyLoginCompleted()

    });
 
    it('Test Case 3: Login User with incorrect email and password', () => {
    
        menu.navigateToLoginOrSignupPage()
        login.verifyLoginPageIsVisible()
        login.submitLogin(`coraline-1111112510846@mail.com`, '67890')
        login.verifyIncorrectLoginData()
    
    });  

    it('Test Case 4: Logout User', () => {
    
        menu.navigateToLoginOrSignupPage()
        login.verifyLoginPageIsVisible()
        login.submitLogin(`coraline-1723583410363@mail.com`, '12345')
        menu.navigateToLogout()
        login.verifyLoginPageIsVisible()

    });

    it('Test Case 5: Register User with existing email', () => {

        menu.navigateToLoginOrSignupPage()
        signup.verifySignupPageIsVisible()
        signup.startSignup(`coraline-1723583410363@mail.com`)
        signup.verifyExistingEmailSignup()

    });

    it('Test Case 6: Contact Us Form', () => {

        menu.navigateToContactUsPage()
        contact.verifyContactPageIsVisible()
        contact.submitContactForm()
        contact.verifyContactFormSubmission()

    });

    it('Test Case 8: Verify All Products and product detail page', () => {

        menu.navigateToProductsPage()
        products.verifyProductsPageIsVisible()
        products.verifyProductsListIsVisible()
        products.selectFirstProduct()
        products.verifyProductsDetails()

    });

    it('Test Case 9: Search Product', () => {

        menu.navigateToProductsPage()
        products.verifyProductsPageIsVisible()
        products.searchForProduct(`Dress`)
        products.verifySearchedProductsPageIsVisible()
        products.verifySearchedProductIsVisible()

    });
   
    it('Test Case 10: Verify Subscription in home page', () => {

        cy.get('input#susbscribe_email')
          .scrollIntoView()
          .type('jones.coraline@mail.com')
     
        cy.get('button#subscribe').click()
    
        cy.contains('You have been successfully subscribed!')
          .should('be.visible')

    });

    it('Test Case 15: Place Order: Register before Checkout', () => {

        menu.navigateToLoginOrSignupPage()
        signup.submitSignupForm()
        signup.verifySignupCompleted()
        products.addProductToCart()
        checkout.navigateToCheckoutPage()
        checkout.verifyCheckoutPageIsVisible()
        payment.submitPaymentData()
        payment.verifyPlacedOrder()
        menu.navigateToDeleteAccount()
        signup.verifyDeletedAccount()

    });

});