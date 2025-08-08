Feature: create new organization

  @createOrg
  Scenario: user didn't fill any organization name field
    Given user is in organization tab
    When user clicks Create Organization button to open create organization side bar
    And user didn't fill organization name field and user fills other fields
    And clicked create button
    Then organization name is required message should be shown

  @createOrg
  Scenario: user successfully creates new organization
    Given user is in organization tab
    When user clicks Create Organization button to open create organization side bar
    And user fills all the manditory fields
    And clicked create button
    Then organization name should be visibel on organization table
