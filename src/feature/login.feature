Feature: login to skillsmax

  @login
  Scenario: user logged in successfully
    Given user is in login page
    When user enters correct email id
    And user enters correct password for the email id
    And user clicks login button
    Then user should be redirected to dashboard page

  @login
  Scenario: user enters wrong password
    Given user is in login page
    When user enters email id
    And user enters wrong password
    And user clicks login button
    Then "Incorrect email or password" message should be shown
