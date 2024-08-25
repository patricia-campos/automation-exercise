class Products {

  verifyProductsPageIsVisible() {

    cy.url()
      .should('contain', 'products')
    cy.get('.title')
      .should('be.visible').and('contain', 'All Products')

  }

  verifyProductsListIsVisible() {

    cy.get('.single-products')
      .should('be.visible')
      .and('have.length.at.least', 1)

  }

  selectFirstProduct() {

    cy.get('.single-products')
      .first()
      .parent()
      .contains('View Product')
      .click()

  }

  verifyProductsDetails() {

    cy.get('.product-information > h2')
      .should('be.visible')
    cy.get('.product-information p')
      .should('be.visible')
      .and('have.length', 4)
    cy.get('.product-information span span')
      .should('be.visible')

  }
  
  searchForProduct(product) {

    cy.get('input#search_product')
      .type(product)
    cy.get('button#submit_search')
      .click()

  }

  verifySearchedProductsPageIsVisible() {

    cy.get('.title')
      .should('be.visible')
      .and('contain', 'Searched Products')

  }

  verifySearchedProductIsVisible() {

    cy.get('.single-products')
    .should('be.visible')
    .and('have.length.at.least', 1)

  }

  addProductToCart() {

    cy.contains("Add to cart").click()
    cy.contains("View Cart").click()
    
  }

}

export default new Products()