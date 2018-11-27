#noinspection GherkinBrokenTableInspection
Feature: Enrollment Page

  @InputValues
  Scenario Outline: Personal details
    Given  I am logged in successfully with <username> and <password>
    And    I navigate to personal details page
    When   I update personal details <Fname> and <Lname> and <Email> and <Gender> and <Dob>
    Then   details should be updated successfully
    And    I should be able to revert personal details to default values
    Examples:
     |username|password | Fname | Lname | Email | Gender | Dob|
     |joshua.c|campusm|user| Demo| demo.user@myemail.com| Male|27/12/1990|

    @Logout
    Scenario: updated values
      Given  I am logged in successfully with joshua.c and campusm
      When   I click on logout
      Then   I should be logged out successfully