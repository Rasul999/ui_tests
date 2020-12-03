/// <reference types="cypress" />

context('Actions', () => {
  const USERNAME = 'demo'
  const PASSWORD = '12345'
  const INCORRECT_PASS = '123'
  const INPUT_USERNAME = 'input[id="loginform-username"]'
  const INPUT_PASSWORD = 'input[id="loginform-password"]'
  const DIV_ERR_EMAIL_OR_PASS= 'div[class="invalid-feedback"]'
  const LOGIN_PATH = '/main-page'
  const LOGIN_TITLE = 'Главная страница'

  beforeEach(() => {
    cy.visit('https://radar.wifi.ru/')
  })

  it('LoginCorrectUsernameAndPassword', () => {
    cy.get(INPUT_USERNAME)
      .type(USERNAME).should('have.value', USERNAME)
    cy.get(INPUT_PASSWORD)
      .type(PASSWORD).should('have.value', PASSWORD)
    cy.get('form').submit()
    cy.location('pathname', { timeout: 5000 }).should('eq', LOGIN_PATH);
    cy.title().should('eq', LOGIN_TITLE);
  })

  it('LoginWithIncorrectPassword', () => {
    cy.get(INPUT_USERNAME)
      .type(USERNAME).should('have.value', USERNAME)
    cy.get(INPUT_PASSWORD)
      .type(INCORRECT_PASS).should('have.value', INCORRECT_PASS)
    cy.get('form').submit()
    cy.get(DIV_ERR_EMAIL_OR_PASS).should('exist')  
  })
})
