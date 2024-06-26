export const getHeaderButtons = () => getComponent('header-buttons')

export const getComponent = (dataTestId: string) =>
  cy.get(`[data-testid=${dataTestId}]`)

const visit = (url: string) => {
  cy.visit(url)
}

export const visitPublicPage = () => {
  visit('http://localhost:8000/')
}

export const visitAdminPage = () => {
  visit('http://localhost:8000/admin')
}

export * from './authentication'
export * from './product'
