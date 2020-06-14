package com.stepdefinition;

import java.io.IOException;

import com.baseclass.Library2;
import com.pages.makemytripadmin;
import com.seleniumutils.utils;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginstepdefinition extends Library2{
	utils util;
	makemytripadmin signin;
	@Given("^launch make my trip application$")
	public void launch_make_my_trip_application() throws IOException  {
		Applicaton();	
	}

	@When("^login page is opened$")
	public void login_page_is_opened()  {
	}
	@Then("^enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enters_and(String email, String password) {
	    signin= new makemytripadmin(driver);
	    signin.login(email, password);
	    
	}

	@Then("^quit the browser$")
	public void close_the_browser()  {
	   driver.quit();
	}

}