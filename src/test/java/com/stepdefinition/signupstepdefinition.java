package com.stepdefinition;

import java.io.IOException;

import com.baseclass.Library2;
import com.pages.makemytripadmin;
import com.pages.makemytripadminforsignup;
import com.seleniumutils.utils;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class signupstepdefinition extends Library2 {
	utils util;
	makemytripadminforsignup log;
	
	@Given("^open the browser$")
	public void open_the_browser() throws IOException  {
		Applicaton();
	}

	@When("^click on sign up button$")
	public void click_on_sign_up_button()  {
	   
	}
		 @Then("^type \"([^\"]*)\" and \"([^\"]*)\"$")
		 public void type_and(String username, String password) { 
			 log= new makemytripadminforsignup(driver);
			 log.login(username, password);
	}

	@Then("^close the webbrowser$")
	public void close_the_webbrowser()  {
	    driver.quit();
	}

}
