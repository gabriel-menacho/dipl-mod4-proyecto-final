import { getComponent } from '.'

export const createProduct = (
  name: string,
  price: number,
  description: string
) => {
  getComponent('add-product-button').should('be.visible')
  getComponent('add-product-button').within(() => {
    cy.get('button').click()
  })
  getComponent('product-modal').should('be.visible')
  getComponent('name-input').type(name)
  getComponent('price-input').type(price.toString())
  getComponent('description-input').type(description)
  getComponent('submit-create-button').should('be.visible')
  getComponent('submit-create-button').click()
}
