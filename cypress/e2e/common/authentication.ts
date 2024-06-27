import { getComponent, getHeaderButtons, visitPublicPage } from '.'

export const login = (email: string, password: string) => {
  visitPublicPage()
  getHeaderButtons().should('contain', 'Log In')
  cy.url().should('include', '/')
  getComponent('login-button').click()
  getComponent('login-modal').should('be.visible')
  getComponent('email-input').type(email)
  getComponent('password-input').type(password)
  getComponent('login-action-button').click()
}

export const logout = () => {
  getComponent('logout-button').click()
}
