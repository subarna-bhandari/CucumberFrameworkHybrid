package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.seleniumutils.utils;

public class makemytripadminforsignup {

	utils util;
	WebDriver driver;
	
	@FindBy(xpath="//*[@id=\"SW\"]/div[2]/div[1]/ul/li[6]/div/p")
	WebElement openlogin;
	@FindBy(xpath="/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/section[1]/div[3]/p[1]/span[2]/a[1]")
	WebElement signup;
	@FindBy(xpath="/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/section[1]/form[1]/div[1]/div[1]/input[1]")
	WebElement username;
	@FindBy(xpath="/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/section[1]/form[1]/div[2]/div[1]/input[1]")
	WebElement password;
	@FindBy(xpath="/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/section[1]/form[1]/div[4]/button[1]")
	WebElement createaccount;
	public makemytripadminforsignup(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	
}
	public void login(String e, String p)  {
	    util = new utils(driver);
	    openlogin.click();
	    signup.click();
	    username.sendKeys(e);
	    password.sendKeys(p);
	    createaccount.click();
}
}