$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/resources/features/testcasephp.feature");
formatter.feature({
  "line": 1,
  "name": "Make my trip login",
  "description": "",
  "id": "make-my-trip-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Make My Trip login Test Scenario",
  "description": "",
  "id": "make-my-trip-login;make-my-trip-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "launch make my trip application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enters \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "make-my-trip-login;make-my-trip-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 11,
      "id": "make-my-trip-login;make-my-trip-login-test-scenario;;1"
    },
    {
      "cells": [
        "hello123@hotmail.com",
        "admin123"
      ],
      "line": 12,
      "id": "make-my-trip-login;make-my-trip-login-test-scenario;;2"
    },
    {
      "cells": [
        "samdon@hotmail.com",
        "admin123"
      ],
      "line": 13,
      "id": "make-my-trip-login;make-my-trip-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Make My Trip login Test Scenario",
  "description": "",
  "id": "make-my-trip-login;make-my-trip-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "launch make my trip application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enters \"hello123@hotmail.com\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefinition.launch_make_my_trip_application()"
});
formatter.result({
  "duration": 4146702700,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinition.login_page_is_opened()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello123@hotmail.com",
      "offset": 8
    },
    {
      "val": "admin123",
      "offset": 35
    }
  ],
  "location": "loginstepdefinition.enters_and(String,String)"
});
formatter.result({
  "duration": 45482100,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.pages.makemytripadmin.login(makemytripadmin.java:35)\r\n\tat com.stepdefinition.loginstepdefinition.enters_and(loginstepdefinition.java:27)\r\n\tat ✽.Then enters \"hello123@hotmail.com\" and \"admin123\"(./src/test/resources/features/testcasephp.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginstepdefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Make My Trip login Test Scenario",
  "description": "",
  "id": "make-my-trip-login;make-my-trip-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "launch make my trip application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "login page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enters \"samdon@hotmail.com\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefinition.launch_make_my_trip_application()"
});
formatter.result({
  "duration": 1726789200,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefinition.login_page_is_opened()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samdon@hotmail.com",
      "offset": 8
    },
    {
      "val": "admin123",
      "offset": 33
    }
  ],
  "location": "loginstepdefinition.enters_and(String,String)"
});
formatter.result({
  "duration": 1819700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.pages.makemytripadmin.login(makemytripadmin.java:35)\r\n\tat com.stepdefinition.loginstepdefinition.enters_and(loginstepdefinition.java:27)\r\n\tat ✽.Then enters \"samdon@hotmail.com\" and \"admin123\"(./src/test/resources/features/testcasephp.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginstepdefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Make My Trip Signup Scenario",
  "description": "",
  "id": "make-my-trip-login;make-my-trip-signup-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tc_02_signup"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "click on sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "type \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the webbrowser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "make-my-trip-login;make-my-trip-signup-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "make-my-trip-login;make-my-trip-signup-scenario;;1"
    },
    {
      "cells": [
        "sampletest1@hotmail.com",
        "admin123#"
      ],
      "line": 25,
      "id": "make-my-trip-login;make-my-trip-signup-scenario;;2"
    },
    {
      "cells": [
        "sampletest2@hotmail.com",
        "admin123#"
      ],
      "line": 26,
      "id": "make-my-trip-login;make-my-trip-signup-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Make My Trip Signup Scenario",
  "description": "",
  "id": "make-my-trip-login;make-my-trip-signup-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tc_02_signup"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "click on sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "type \"sampletest1@hotmail.com\" and \"admin123#\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the webbrowser",
  "keyword": "Then "
});
formatter.match({
  "location": "signupstepdefinition.open_the_browser()"
});
formatter.result({
  "duration": 1602159200,
  "status": "passed"
});
formatter.match({
  "location": "signupstepdefinition.click_on_sign_up_button()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sampletest1@hotmail.com",
      "offset": 6
    },
    {
      "val": "admin123#",
      "offset": 36
    }
  ],
  "location": "signupstepdefinition.type_and(String,String)"
});
formatter.result({
  "duration": 2624900,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.pages.makemytripadminforsignup.login(makemytripadminforsignup.java:32)\r\n\tat com.stepdefinition.signupstepdefinition.type_and(signupstepdefinition.java:30)\r\n\tat ✽.Then type \"sampletest1@hotmail.com\" and \"admin123#\"(./src/test/resources/features/testcasephp.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "signupstepdefinition.close_the_webbrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Make My Trip Signup Scenario",
  "description": "",
  "id": "make-my-trip-login;make-my-trip-signup-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tc_02_signup"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "click on sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "type \"sampletest2@hotmail.com\" and \"admin123#\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the webbrowser",
  "keyword": "Then "
});
formatter.match({
  "location": "signupstepdefinition.open_the_browser()"
});
formatter.result({
  "duration": 1355432100,
  "status": "passed"
});
formatter.match({
  "location": "signupstepdefinition.click_on_sign_up_button()"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sampletest2@hotmail.com",
      "offset": 6
    },
    {
      "val": "admin123#",
      "offset": 36
    }
  ],
  "location": "signupstepdefinition.type_and(String,String)"
});
formatter.result({
  "duration": 841000,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.pages.makemytripadminforsignup.login(makemytripadminforsignup.java:32)\r\n\tat com.stepdefinition.signupstepdefinition.type_and(signupstepdefinition.java:30)\r\n\tat ✽.Then type \"sampletest2@hotmail.com\" and \"admin123#\"(./src/test/resources/features/testcasephp.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "signupstepdefinition.close_the_webbrowser()"
});
formatter.result({
  "status": "skipped"
});
});