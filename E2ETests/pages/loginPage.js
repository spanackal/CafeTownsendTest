'use strict';

const userData = require('../../E2ETests/data/userData.js');

module.exports = {

    elements: {
        userName: element(by.css('input[type*="text"]')),
        password: element(by.css('input[type*="password"]')),
        loginButton: element(by.css('button[class*="main"]'))
    },

    loginToApplication: function() {
        browser.get(userData.loginDetails.url);
        this.elements.userName.sendKeys(userData.loginDetails.userName);
        this.elements.password.sendKeys(userData.loginDetails.password);
        this.elements.loginButton.click();
    }

};