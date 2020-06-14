Feature: Make my trip login
@tc_01_login
Scenario Outline: Make My Trip login Test Scenario

Given launch make my trip application
When  login page is opened
Then  enters "<email>" and "<password>"
Then quit the browser

Examples: 
	|email                          | password|
	|hello123@hotmail.com    | admin123|
	|samdon@hotmail.com    | admin123|
	
@tc_02_signup
Scenario Outline: Make My Trip Signup Scenario

Given open the browser
When click on sign up button
Then type "<username>" and "<password>"
Then close the webbrowser

Examples: 
	|username                          | password|
	|sampletest1@hotmail.com    | admin123#|
	|sampletest2@hotmail.com    | admin123#|