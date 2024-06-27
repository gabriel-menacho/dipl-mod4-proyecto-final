import {
  getComponent,
  getHeaderButtons,
  login,
  logout,
  visitPublicPage,
} from './common'
import { email, password } from './common/constants'

describe('authentication spec', () => {
  it('should login', () => {
    login(email, password)
    getHeaderButtons().should('contain', 'Log Out')
    cy.url().should('include', '/admin')
    logout()
  })

  it('should not login', () => {
    visitPublicPage()
    cy.url().should('not.include', '/admin')
    getHeaderButtons().should('contain', 'Log In')
    login(email, 'wrong-password')
    cy.url().should('not.include', '/admin')
    getComponent('login-modal').should('be.visible')
    getComponent('error-msg').should('be.visible')
    getComponent('close-button').click()
    getHeaderButtons().should('contain', 'Log In')
  })

  it('should logout', () => {
    visitPublicPage()
    cy.url().should('not.include', '/admin')
    getHeaderButtons().should('contain', 'Log In')
    login(email, password)
    cy.url().should('include', '/admin')
    getHeaderButtons().should('contain', 'Log Out')
    logout()
    cy.url().should('not.include', '/admin')
    getHeaderButtons().should('contain', 'Log In')
  })
})
