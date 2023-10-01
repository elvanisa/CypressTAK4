class loginPage{
    username = '#user-name'
    password = '[data-test="password"]'
    loginBtn = '[data-test="login-button"]'
    errorMsg = '[data-test="error"]'
    title = '.title'

    inputUsername(name){
        cy.get(this.username).type(name)
    }

    inputPassword(passw){
        cy.ketik(this.password, passw)
    }
}
module.exports = new loginPage()