Feature: create new organization

  @createOrg
  Scenario: user successfully creates new organization
    Given user is in organization tab
    When user clicks Create Organization button to open create organization side bar
    And user fills all the manditory fields
    And user clicks create button
    Then organization name should be visibel on organization table

  @createOrg
  Scenario Outline: user didn't fill any of required field
    Given user is in organization tab
    When user clicks Create Organization button to open create organization side bar
    And user didn't fill "<field>" field and user fills other fields
    And user clicks create button
    Then "<field> is required" message should be shown -createOrg

    Examples:
      | field             |
      | Organisation Name |
      | Address           |
      | Country           |
      | State             |
      | City              |
      | Pin Code          |

  @createOrg
  Scenario: user didn't check any Assessment Level checkbox
    Given user is in organization tab
    When user clicks Create Organization button to open create organization side bar
    And user check any Assessment Level checkbox and user fills other fields
    And user clicks create button
    Then "Please select at least one assessment level" message should be shown -createOrg
