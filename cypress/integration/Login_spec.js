/// <reference types="cypress" />
describe('Login test', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })
it('There are input fields and login button', () =>{
  cy.get('[data-test=username]').should('exist')
  cy.get('[data-test=password]').should('exist')
  cy.contains('Login').and('be.visible')
})

it('Login with valid username and valid password', function (){
  cy.get('[data-test=username]').type('standard_user')
  cy.get('[data-test=password]').type('secret_sauce')
  cy.get('[data-test=login-button]').click()
  cy.url().should('include', '/inventory')
})
it('Login with valid username and invalid password', function (){
  cy.get('[data-test=username]').type('standard_user')
  cy.get('[data-test=password]').type('secret')
  cy.get('[data-test=login-button]').click()
  cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
})
it('Login with invalid username and valid password', function (){
  cy.get('[data-test=username]').type('standard')
  cy.get('[data-test=password]').type('secret_sauce')
  cy.get('[data-test=login-button]').click()
  cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
})
it('Login with invalid username and invalid password', function (){
  cy.get('[data-test=username]').type('standard')
  cy.get('[data-test=password]').type('secret')
  cy.get('[data-test=login-button]').click()
  cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
})
it('Login with empty username and password field', function (){
  cy.get('[data-test=login-button]').click()
  cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username is required')
})
it('Login with valid username and empty password field', function (){
  cy.get('[data-test=username]').type('standard_user')
  cy.get('[data-test=login-button]').click()
  cy.get('[data-test=error]').should('have.text', 'Epic sadface: Password is required')
})
it('Hint text for username field should be "Username"', function(){
cy.get('[placeholder="Username"]').should('be.visible')
})
it('Hint text for password field should be "Password"', function(){
  cy.get('[placeholder="Password"]').should('be.visible')
})
})