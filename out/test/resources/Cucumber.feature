Feature: Cucumber Home Page

  Scenario: Docs
    Given I navigate to "https://cucumber.io/"
    When I take a look at the Docs
    Then I see a browser title containing "Cucumber"

    Scenario:Login with valid username and password
      Given  I am on Campusm Home page
      Then   I click on student/staff option
      When   I should be logged in after entereing valid credentials


  /*@asos
  Scenario: Login with valid username and password
    Given I am on login page
    When  I Enter username password and click SignIn
    Then  I should be logged in

  @asosInvalidLogin
  Scenario: Login with invalid credentials
    Given I am on login page
    When  I Entered invalid username or password
    Then  I should be notified with error message

  @asosForgotpassword
  Scenario: When forgot username or password
    Given I am on login page
    When  Cliked on forgotpassword link and enter email address
    Then  I should be on signinpage or resend link page

   @asosloginwithfb
    Scenario: Login using fb
     Given I am on login page
     When  I clicked on fb Icon
     Then  I should be redirected to Fb Login page

