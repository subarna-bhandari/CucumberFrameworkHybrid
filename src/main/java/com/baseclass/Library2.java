package com.baseclass;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Library2 {

	protected WebDriver driver;
	 static Properties prop;
		public void Applicaton() throws IOException {
			FileInputStream filesIS = new FileInputStream("src/test/resources/configurationproperty/config.properties");
			prop = new Properties();
			prop.load(filesIS);
			String browser = prop.getProperty("browser");
			try {
				if (browser.equalsIgnoreCase("firefox")) {
					driver = new FirefoxDriver();
				} else if (browser.equalsIgnoreCase("chrome")) {
					//System.setProperty("webdriver.chrome.driver", "C:\\Users\\subar\\eclipse-workspace\\orangehrm\\src\\test\\resources\\drivers\\chromedriver.exe");
					driver = new ChromeDriver();
				}
				
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				driver.get(prop.getProperty("url"));
			
			} catch (WebDriverException e) {
				System.out.println("browser could not be lanuced");
			}
		}
			public void screenShot(String path) throws IOException {
				TakesScreenshot ts=(TakesScreenshot)driver;
				File source = ts.getScreenshotAs(OutputType.FILE);
				FileUtils.copyFile(source,new File(path));
				
		}
			public void getTitle() {
				System.out.println(driver.getTitle());
			}
			
		public void quit() {
			driver.close();
		}
}
