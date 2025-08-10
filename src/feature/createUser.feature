Feature: create new users

  @createUser
  Scenario: creates new users successfully
    Given user is in User tab
    When user clicks Create User button to open create User side bar
    And user clicks create bulk user and clicks next button
    And user selects organization and uploads user details and clicks next
    And "user review learners" and clicks next
    And "user review tags" and clicks next
    And user clicks Confirm & Create button
    Then user should be added to users list

  @createUser
  Scenario: users have duplicate emails
    Given user is in User tab
    When user clicks Create User button to open create User side bar
    And user clicks create bulk user and clicks next button
    And user selects organization and uploads user details with duplicate emails and clicks next
    Then "Your file contains errors" message should be shown -createUser
    And Next button should be disabled