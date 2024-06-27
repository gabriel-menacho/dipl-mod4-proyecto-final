import { createProduct, getComponent, login, logout } from './common'
import { email, password } from './common/constants'

describe('product spec', () => {
  beforeEach(() => {
    login(email, password)
  })

  afterEach(() => {
    logout()
  })

  it('should add product', () => {
    createProduct('product1', 100, 'description1')
  })

  it('should edit product', () => {
    const timestamp = Date.now()
    const name = `product-${timestamp}`
    const price = 100
    const description = `description-${timestamp}`
    createProduct(name, price, description)
    cy.contains(name)
      .parent()
      .within(() => {
        getComponent('edit-button').click()
      })
    getComponent('product-modal').should('be.visible')
    cy.contains('Update Product')
    getComponent('name-input').clear()
    getComponent('name-input').type(`${name}-edited`)
    getComponent('price-input').clear()
    getComponent('price-input').type((price + 1).toString())
    getComponent('description-input').type(`edited description: `)
    getComponent('submit-update-button').should('be.visible')
    getComponent('submit-update-button').click()
    cy.contains(`${name}-edited`)
    cy.contains((price + 1).toString())
    cy.contains(`edited description: ${description}`)
  })

  it('should delete product', () => {
    const timestamp = Date.now()
    const name = `product-${timestamp}`
    const price = 100
    const description = `description-${timestamp}`
    createProduct(name, price, description)
    cy.contains(name)
      .parent()
      .within(() => {
        getComponent('delete-button').click()
      })
    getComponent('confirmation-dialog').should('be.visible')
    getComponent('confirm-button').click()
    getComponent('confirmation-dialog').should('not.exist')
    cy.contains(name).should('not.exist')
  })
})
