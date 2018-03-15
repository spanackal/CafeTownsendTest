# Protractor Demo Test

## Summary:
The aim of this exercise was to utilise,  Protractor and Mocha/Jasmine frameworks to create a simple web test in JavaScript.
The following steps had to be performed as part of this exercise:

1.	Navigate to http://cafetownsend-angular-rails.herokuapp.com/login
2.	Login to the app
3.	Create a new employee and verify employee is created
4.	Edit an employee and verify employee is updated
5.	Delete the employee and verify employee is deleted

Note:
The Test Framework has been developed using Page Object and Data abstraction principles.

Getting Started:

Please run the below two commands prior to execution of the tests:

webdriver-manager update
webdriver-manager start

For running the Tests, please use the below command:

protractor tests.conf.js

