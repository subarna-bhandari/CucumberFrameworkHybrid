package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.seleniumutils.utils;

public class makemytripadmin {
	utils util;
	WebDriver driver;
	@FindBy(xpath="//*[@id=\"SW\"]/div[2]/div[1]/ul/li[6]/div/p")
	WebElement openlogin;
	@FindBy(xpath="/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/section[1]/form[1]/div[1]/div[1]/input[1]")
	WebElement click;
	@FindBy(xpath="/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/section[1]/form[1]/div[1]/div[1]/input[1]")
	WebElement email;
	@FindBy(xpath="//*[@id=\"SW\"]/div[2]/div[2]/div[2]/section/form/div[2]/button")
	WebElement continuee;
	@FindBy(xpath="//*[@id=\"password\"]")
	WebElement password;
	@FindBy(xpath="//*[@id=\"SW\"]/div[2]/div[2]/div[2]/section/form/div[2]/button")
	WebElement submit;
	@FindBy(xpath="/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/section[1]/div[3]/p[1]/span[2]/a[1]")
	WebElement signupbutton;
	@FindBy(xpath="/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/section[1]/div[3]/p[1]/span[2]/a[1]")
	WebElement press;
	public makemytripadmin(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	public void login(String e, String p)  {
	    util = new utils(driver);
	    openlogin.click();
	    click.click();
		email.sendKeys(e);
		continuee.click();
		password.sendKeys(p);
		submit.click();
		
	}
}
