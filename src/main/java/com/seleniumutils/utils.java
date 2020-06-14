package com.seleniumutils;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class utils {


	WebDriver driver;

	//constructor
	public utils(WebDriver driver) {
		this.driver=driver;
	}
	//to take screenshot

	public void screenShot(String path) throws IOException {
		TakesScreenshot ts=(TakesScreenshot)driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(source,new File(path));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
		public void getTitle() {
			String title= driver.getTitle();
		}
		public void actions(String locator) {
			Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath(locator))).click().build().perform();
			
		}
		public void Explicitywait(String locator) {
			WebDriverWait wait = new WebDriverWait(driver, 20);
			wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath(locator))));
		}
		public void dropdown(String locator) {
			Select dropdown=new Select(driver.findElement(By.xpath(locator)));
		}
		
		public void quit() {
			driver.close();
		}

}
