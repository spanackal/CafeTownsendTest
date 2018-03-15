
const loginPage = require('./E2ETests/pages/loginPage.js');
const employeeListPage = require('./E2ETests/pages/employeeListPage.js');
const employeePage = require('./E2ETests/pages/employeePage.js');

describe('E2E Protractor Test', function() {

  it('should allow the user to create, edit and delete employees', function() {
    loginPage.loginToApplication();
    employeeListPage.clickOnCreateButton();
    employeePage.enterUserDetailsAndClickOnAddUserButton();
    employeeListPage.verifyThatUserIsDisplayedInTheEmployeeList();
    employeeListPage.clickOnEditButton();
    employeePage.editUserDetailsAndClickOnUpdateUserButton();
    employeeListPage.verifyThatUserIsDisplayedInTheEmployeeList();
    employeeListPage.clickOnDeleteButton();
    employeeListPage.acceptThePopUpForConfirmingTheUserToBeDeleted();
    employeeListPage.verifyThatTheUserHasBeenDeletedFromTheEmployeelist();

  });
});
