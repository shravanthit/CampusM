Feature: CampusM Home Page

@Homepage
    Scenario:Login with valid username and password
      Given  I am on Campusm Home page
      When   I click on student/staff option
      Then   login page Should be displayed

  @InvalidLogin
    Scenario Outline: Login page
    Given  I am on login page
    When   I login with invalid <username> or <password>
    Then   I should be notified with error message
    Examples:
      | username | password |
    |shravanthi|12345|


  @ValidLogin
  Scenario Outline: Login
    Given I am on login page
    When  I login with valid <username> or <password>
    Then  I should be successfully logged in
    Examples:
      |username  | password |
      |joshua.c  | campusm  |

