$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CampusLogin.feature");
formatter.feature({
  "line": 1,
  "name": "CampusM Home Page",
  "description": "",
  "id": "campusm-home-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3943789530,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with valid username and password",
  "description": "",
  "id": "campusm-home-page;login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Campusm Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on student/staff option",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login page Should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CampusMSteps.launch_browser()"
});
formatter.result({
  "duration": 3386911686,
  "status": "passed"
});
formatter.match({
  "location": "CampusMSteps.iClickOnStudentStaffOption()"
});
formatter.result({
  "duration": 851164402,
  "status": "passed"
});
formatter.match({
  "location": "CampusMSteps.Iamonloginpage()"
});
formatter.result({
  "duration": 617556606,
  "status": "passed"
});
formatter.after({
  "duration": 2167779209,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Login page",
  "description": "",
  "id": "campusm-home-page;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I login with invalid \u003cusername\u003e or \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be notified with error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "campusm-home-page;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "campusm-home-page;login-page;;1"
    },
    {
      "cells": [
        "shravanthi",
        "12345"
      ],
      "line": 16,
      "id": "campusm-home-page;login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2859335254,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login page",
  "description": "",
  "id": "campusm-home-page;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I login with invalid shravanthi or 12345",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be notified with error message",
  "keyword": "Then "
});
formatter.match({
  "location": "CampusMSteps.iamonloginpage()"
});
formatter.result({
  "duration": 5521156047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shravanthi",
      "offset": 21
    },
    {
      "val": "12345",
      "offset": 35
    }
  ],
  "location": "CampusMSteps.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 803329432,
  "status": "passed"
});
formatter.match({
  "location": "CampusMSteps.showeerrormsg()"
});
formatter.result({
  "duration": 762540123,
  "status": "passed"
});
formatter.after({
  "duration": 2222452168,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Login",
  "description": "",
  "id": "campusm-home-page;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@ValidLogin"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I login with valid \u003cusername\u003e or \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should be successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "campusm-home-page;login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "campusm-home-page;login;;1"
    },
    {
      "cells": [
        "joshua.c",
        "campusm"
      ],
      "line": 26,
      "id": "campusm-home-page;login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2855197723,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login",
  "description": "",
  "id": "campusm-home-page;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@ValidLogin"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I login with valid joshua.c or campusm",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "CampusMSteps.iamonloginpage()"
});
formatter.result({
  "duration": 5269608248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "joshua.c",
      "offset": 19
    },
    {
      "val": "campusm",
      "offset": 31
    }
  ],
  "location": "CampusMSteps.validLogin(String,String)"
});
formatter.result({
  "duration": 601342527,
  "status": "passed"
});
formatter.match({
  "location": "CampusMSteps.Ishouldbesuccessfullyloggedin()"
});
formatter.result({
  "duration": 94997845,
  "status": "passed"
});
formatter.after({
  "duration": 150017802,
  "status": "passed"
});
formatter.uri("Enrollment.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#noinspection GherkinBrokenTableInspection"
    }
  ],
  "line": 2,
  "name": "Enrollment Page",
  "description": "",
  "id": "enrollment-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Personal details",
  "description": "",
  "id": "enrollment-page;personal-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@InputValues"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am logged in successfully with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to personal details page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I update personal details \u003cFname\u003e and \u003cLname\u003e and \u003cEmail\u003e and \u003cGender\u003e and \u003cDob\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "details should be updated successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should be able to revert personal details to default values",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "enrollment-page;personal-details;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Fname",
        "Lname",
        "Email",
        "Gender",
        "Dob"
      ],
      "line": 12,
      "id": "enrollment-page;personal-details;;1"
    },
    {
      "cells": [
        "joshua.c",
        "campusm",
        "user",
        "Demo",
        "demo.user@myemail.com",
        "Male",
        "27/12/1990"
      ],
      "line": 13,
      "id": "enrollment-page;personal-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2409148182,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Personal details",
  "description": "",
  "id": "enrollment-page;personal-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@InputValues"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am logged in successfully with joshua.c and campusm",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to personal details page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I update personal details user and Demo and demo.user@myemail.com and Male and 27/12/1990",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "details should be updated successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should be able to revert personal details to default values",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "joshua.c",
      "offset": 33
    },
    {
      "val": "campusm",
      "offset": 46
    }
  ],
  "location": "CampusMSteps.loggedinSuccesfully(String,String)"
});
formatter.result({
  "duration": 6433128345,
  "status": "passed"
});
formatter.match({
  "location": "EnrollmentStepdef.Navigate_to_personaldetails()"
});
formatter.result({
  "duration": 7272440105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 26
    },
    {
      "val": "Demo",
      "offset": 35
    },
    {
      "val": "demo.user@myemail.com",
      "offset": 44
    },
    {
      "val": "Male",
      "offset": 70
    },
    {
      "val": "27/12/1990",
      "offset": 79
    }
  ],
  "location": "EnrollmentStepdef.updatevalues(String,String,String,String,String)"
});
formatter.result({
  "duration": 2622473843,
  "status": "passed"
});
formatter.match({
  "location": "EnrollmentStepdef.val_PersonDetails_Upd_Success()"
});
formatter.result({
  "duration": 2812321522,
  "status": "passed"
});
formatter.match({
  "location": "EnrollmentStepdef.revert_PersonalDet_DefaultValues()"
});
formatter.result({
  "duration": 484385707,
  "status": "passed"
});
formatter.after({
  "duration": 2175535853,
  "status": "passed"
});
formatter.before({
  "duration": 2443485767,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "updated values",
  "description": "",
  "id": "enrollment-page;updated-values",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am logged in successfully with joshua.c and campusm",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on logout",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should be logged out successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "joshua.c",
      "offset": 33
    },
    {
      "val": "campusm",
      "offset": 46
    }
  ],
  "location": "CampusMSteps.loggedinSuccesfully(String,String)"
});
formatter.result({
  "duration": 5744393207,
  "status": "passed"
});
formatter.match({
  "location": "CampusMSteps.logoutFromApp()"
});
formatter.result({
  "duration": 8386714966,
  "status": "passed"
});
formatter.match({
  "location": "CampusMSteps.logout_App_Success()"
});
formatter.result({
  "duration": 96701113,
  "status": "passed"
});
formatter.after({
  "duration": 2198502212,
  "status": "passed"
});
});