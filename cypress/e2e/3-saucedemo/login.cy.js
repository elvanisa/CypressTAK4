import loginPage from '../../support/pageObject/loginPage'
const userData = require('../../fixtures/3-saucedemo/login-data.json')

describe('Saucedemo Test Login', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('Failed Login - Wrong Password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('[placeholder="Password"]').type('salahpassw')
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
  })
  it('Failed Login - Wrong Password (POM&fixtures)', () => {
    loginPage.inputUsername(userData.failed_login[0].username)
    //cy.ketik(loginPage.password, 'salahpassw')
    loginPage.inputPassword(userData.failed_login[0].password)
    cy.get(loginPage.loginBtn).click()
    cy.get(loginPage.errorMsg).should('contain', 'Username and password do not match any user in this service')
  })
  it('Failed Login - Locked User', () => {
    //cy.get('[data-test="username"]').type('locked_out_user')
    //cy.get('[data-test="password"]').type('secret_sauce')
    //cy.get('[data-test="login-button"]').click()
    cy.login(userData.failed_login[2].username,userData.failed_login[2].password)
    //cy.get('[data-test="error"]').should('contain.text', 'Sorry, this user has been locked out')
    cy.verifyContain(loginPage.errorMsg, userData.failed_login[2].error_msg)
  })
  it('Failed Multiple Login', () => {
    cy.fixture('3-saucedemo/login-data.json').then((user) => {
      user.failed_login.forEach((data) => {
        cy.login(data.username,data.password)
        //cy.get(loginPage.errorMsg).should('be.visible')
        cy.verifyVisible(loginPage.errorMsg)
      })
    })
  })
  it('Success Login', () => {
    //cy.visit(Cypress.env('url_prod'))
    //cy.get('[data-test="username"]').type('standard_user')
    //cy.get('[data-test="password"]').type('secret_sauce')
    //cy.get('[data-test="login-button"]').click()
    cy.login(userData.success_login.username,userData.success_login.password)
    //cy.get(loginPage.title).should('be.visible')
    cy.verifyVisible(loginPage.title)
  })

})