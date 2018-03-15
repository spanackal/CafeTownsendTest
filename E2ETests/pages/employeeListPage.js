'use strict';


module.exports = {

    elements: {
    createButton: element(by.css('#bAdd')),
    editButton: element(by.css('#bEdit')),
    deleteButton: element(by.css('#bDelete')),
    employeeList: element(by.css('#employee-list')),
    newEmployee: element(by.xpath(("//li[contains(text(), \"Sanju\")]")))
    },

    clickOnCreateButton: function() {
        expect(this.elements.createButton.isDisplayed()).toBeTruthy();
        this.elements.createButton.click();
    },

    clickOnEditButton: async function() {
        expect(this.elements.editButton.isDisplayed()).toBeTruthy();
        this.elements.editButton.click();
    },

    clickOnDeleteButton: function() {
        expect(this.elements.deleteButton.isDisplayed()).toBeTruthy();
        this.elements.deleteButton.click();
    },

    acceptThePopUpForConfirmingTheUserToBeDeleted: function(){
        browser.switchTo().alert().accept();
    },

    verifyThatTheUserHasBeenDeletedFromTheEmployeelist: function(){
        expect(this.elements.employeeList.isDisplayed()).toBeTruthy();
        this.elements.employeeList.click();
        browser.sleep(5000);
        element.all(by.xpath(("//li[contains(text(), \"Sanju\")]"))).then(function(items) {
            expect(items.length).toBe(0);
        });

    },

    verifyThatUserIsDisplayedInTheEmployeeList: function() {
        expect(this.elements.newEmployee.isDisplayed()).toBeTruthy();
        this.elements.newEmployee.click();
    }

};