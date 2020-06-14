package com.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



//Cucumber class
		@RunWith(Cucumber.class)
		@CucumberOptions
		(
	
 dryRun= false,
 monochrome = true,
 features = ".//src/test/resources/features/testcasephp.feature",
 glue = {"com.stepdefinition"},	        
 plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport",
            "com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"}
				       //tags = {"@tc_01_login", "@tc_02_Directory","@tc_03_jobtitle"}
				       
				      
				        
		)
	
public class TestRunner {
			
		    @AfterClass
		      public static void extendReport()
		    {
		        Reporter.loadXMLConfig("\\src\\test\\resources\\configurationproperty\\extent-config.xml");
		        Reporter.setSystemInfo("user", System.getProperty("user.name"));
		        Reporter.setSystemInfo("os", "Windows");
		        Reporter.setTestRunnerOutput("Sample test runner output message");
		    }
		}




	
