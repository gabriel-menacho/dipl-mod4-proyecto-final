import { login, visitAdminPage, visitPublicPage } from './common'
import { email, password } from './common/constants'

describe('page redirection spec', () => {
  describe('logged in spec', () => {
    it('should visit admin page when trying to go to admin page', () => {
      login(email, password)
      visitAdminPage()
      cy.url().should('include', '/admin')
    })

    it('should visit admin page when trying to go to public page', () => {
      login(email, password)
      visitPublicPage()
      cy.url().should('include', '/admin')
    })
  })

  describe('not logged in spec', () => {
    it('should visit public page when trying to go to admin page', () => {
      visitAdminPage()
      cy.url().should('not.include', '/admin')
    })

    it('should visit public page when trying to go to public page', () => {
      visitPublicPage()
      cy.url().should('not.include', '/admin')
    })
  })
})
