'use strict';

const userData = require('../../E2ETests/data/userData.js');

module.exports = {

    elements: {
        firstName: element(by.css('input[ng-model*="firstName"]')),
        lastName: element(by.css('input[ng-model*="lastName"]')),
        startDate: element(by.css('input[ng-model*="startDate"]')),
        email: element(by.css('input[ng-model*="email"]')),
        addButton: element(by.xpath(("//button[contains(text(), \"Add\")]"))),
        updateButton: element(by.xpath(("//button[contains(text(), \"Update\")]")))
    },

    enterUserDetailsAndClickOnAddUserButton: function() {
        expect(this.elements.firstName.isDisplayed()).toBeTruthy();
        this.elements.firstName.sendKeys(userData.userDetails.firstName);
        expect(this.elements.lastName.isDisplayed()).toBeTruthy();
        this.elements.lastName.sendKeys(userData.userDetails.lastName);
        expect(this.elements.startDate.isDisplayed()).toBeTruthy();
        this.elements.startDate.sendKeys(userData.userDetails.startDate);
        expect(this.elements.email.isDisplayed()).toBeTruthy();
        this.elements.email.sendKeys(userData.userDetails.emailAddress);
        expect(this.elements.addButton.isDisplayed()).toBeTruthy();
        this.elements.addButton.click();
    },

    editUserDetailsAndClickOnUpdateUserButton: function() {
        expect(this.elements.firstName.isDisplayed()).toBeTruthy();
        this.elements.firstName.sendKeys(userData.userDetails.editedFirstName);
        expect(this.elements.updateButton.isDisplayed()).toBeTruthy();
        this.elements.updateButton.click();
    }

};