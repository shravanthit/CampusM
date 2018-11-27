Feature: Cucumber Home Page

  @asosSearchbar
  Scenario: Type in searchbar
    Given   I am on asos searchbar  page
    When    I type product name
    Then    I should be able to see the list of products

