Feature: Choose options from Sort

@Sortlist
Scenario: Sorting
Given I am on search result page
When  I sort results Relevance
Then  Results should be sorted high to low